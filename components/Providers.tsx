import { ContextProvider } from "@/util/ContextProvider";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useUserProfile } from "@/util/ContextProvider";
import { ChildernProps } from "../app/layout";

const Providers = ({ children }: ChildernProps) => {
  return (
    <ContextProvider>
      <Header />
      {children}
      <Footer />
    </ContextProvider>
  );
};

export default Providers;
