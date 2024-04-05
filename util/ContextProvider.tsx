"use client";

import { ReactNode, createContext, useContext } from "react";
import { getSharedUserSample } from "@/util/api";
import { USER_INITIAL_VALUE } from "@/util/staticValue";

const Context = createContext(USER_INITIAL_VALUE);

export const ContextProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const result = await getSharedUserSample();
  if (!result) return;

  const userProfile = result.data[0];

  return <Context.Provider value={userProfile}>{children}</Context.Provider>;
};

export const useUserProfile = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("ContextProvider 안에서만 사용할 수 있습니다.");
  }
  return context;
};
