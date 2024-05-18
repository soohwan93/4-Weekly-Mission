"use client";
import { ReactNode, createContext } from "react";
import { postLoginData, postSignupData } from "@/util/api";
import { useContext } from "react";
import type { FieldValues } from "react-hook-form";
import { setAccessCookieToken, setRefreshCookieToken } from "../cookieSetting";

interface Context {
  login: (data: FieldValues) => Promise<boolean>;
  signup: (data: FieldValues) => Promise<boolean | undefined>;
}
export const Context = createContext<Context | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const login = async (data: FieldValues) => {
    const result = await postLoginData(data);
    if (!result.message) {
      setAccessCookieToken(result.accessToken);
      setRefreshCookieToken(result.refreshToken);
      return true;
    }
    return false;
  };

  const signup = async (data: FieldValues) => {
    const result = await postSignupData(data);
    if (!result.message) {
      setAccessCookieToken(result.accessToken);
      setRefreshCookieToken(result.refreshToken);
      return true;
    }
  };

  return (
    <Context.Provider value={{ login, signup }}>{children}</Context.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("ContextProvider 안에서만 사용할 수 있습니다.");
  }

  return context;
};