"use client";
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  getSharedFolder,
  getSharedUser,
  postLoginData,
  postSignupData,
} from "@/util/api";

import { useContext } from "react";
import { redirect, useRouter } from "next/navigation";
import type { FieldValues } from "react-hook-form";
import { setCookie } from "nookies";
interface UserProfile {
  user: user | null | undefined;
  isPending: boolean;
}

type user = {
  id: number;
  email: string;
  image_source: string;
  name: string;
  isPending: boolean;
};

export interface Folders {
  id: number;
  name: string;
  favorite: boolean;
  user_id: number;
  created_at: string;
}

interface Context {
  user: user | null | undefined;
  isPending: boolean;
  folders: Folders[];
  isFolderPending: boolean;
  login: (data: FieldValues) => Promise<boolean>;
  signup: (data: FieldValues) => Promise<boolean>;
}
export const Context = createContext<Context>({
  user: null,
  isPending: true,
  folders: [],
  isFolderPending: true,
  login: async () => false,
  signup: async () => false,
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    user: null,
    isPending: true,
  });
  const [folders, setFolders] = useState<Folders[]>([]);
  const [isFolderPending, setFolderPending] = useState(true);

  const fetchUserProfile = useCallback(async () => {
    setUserProfile((prev) => ({
      ...prev,
      isPending: true,
    }));
    let nextUser: user | null = null;
    try {
      const result = await getSharedUser();
      nextUser = result.data[0];
    } catch (error) {
    } finally {
      setUserProfile((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    }
  }, []);

  const login = async (data: FieldValues) => {
    const result = await postLoginData(data);
    if (result.data) {
      setCookie(null, "accessToken", result.data.accessToken, {
        maxAge: 60 * 60,
        path: "/",
      });
      setCookie(null, "refreshToken", result.data.refreshToken, {
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
      });
      await fetchUserProfile();
      await fetchSharedFolder();
    }
    return false;
  };

  const signup = async (data: FieldValues) => {
    const result = await postSignupData(data);
    if (result.data) {
      setCookie(null, "accessToken", result.data.accessToken, {
        maxAge: 60 * 60,
        path: "/",
      });
      setCookie(null, "refreshToken", result.data.refreshToken, {
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
      });
      await fetchUserProfile();
      await fetchSharedFolder();
    }
    return false;
  };

  const fetchSharedFolder = useCallback(async () => {
    setFolderPending(true);
    const result = await getSharedFolder();
    if (result && result.data) {
      setFolders(result.data.folder);
    }
    setFolderPending(false);
  }, []);

  useEffect(() => {
    fetchUserProfile();
    fetchSharedFolder();
  }, []);

  return (
    <Context.Provider
      value={{
        user: userProfile.user || null,
        isPending: userProfile.isPending,
        folders,
        isFolderPending,
        login,
        signup,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUserData = (required?: boolean | undefined) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("ContextProvider 안에서만 사용할 수 있습니다.");
  }
  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      redirect("/signin");
    }
  }, [required, context.user, context.isPending, redirect]);
  return context;
};
