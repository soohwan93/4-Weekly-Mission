import React from "react";
import signLogo from "@/public/logo-sign.svg";
import Link from "next/link";
interface TextProps {
  spanText: string;
  linkText: string;
  linkUrl: string;
}
const SignHeader = ({ spanText, linkText, linkUrl }: TextProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link href="/">
        <img src={signLogo.src} alt="logo-sign" />
      </Link>
      <div>
        <span className="text-[#000] mr-[5px]">{spanText}</span>
        <Link className="font-semibold text-[#6d6afe] underline" href={linkUrl}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default SignHeader;
