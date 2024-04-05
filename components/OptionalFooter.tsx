"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type OptionalFooterProps = { children: ReactNode };

const OptionalFooter = ({ children }: OptionalFooterProps) => {
  const pathName = usePathname();
  const isFooterHidden = pathName.includes("sign");
  if (isFooterHidden) return;
  return (
    <footer className={`flex flex-col items-center pt-32 767px:pt-[102.5px]`}>
      {children}
    </footer>
  );
};

export default OptionalFooter;
