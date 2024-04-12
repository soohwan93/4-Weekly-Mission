"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type OptionalHeaderProp = { children: ReactNode };

const OptionalHeader = ({ children }: OptionalHeaderProp) => {
  const pathName = usePathname();
  const isHeaderHidden = pathName.includes("sign");
  const isHeaderSticky = pathName !== "/folder";

  if (isHeaderHidden) return;

  return (
    <header
      className={`flex flex-col px-[200px] py-5 items-center self-stretch gap-2 z-10 bg-light-blue 1920px:w-full 1920px:px-calc-1 1920px:overflow-hidden 1199px:px-calc-2 869px:px-8 767px:py-[13px] ${
        isHeaderSticky ? "sticky top-0" : "static"
      }`}
    >
      {children}
    </header>
  );
};

export default OptionalHeader;
