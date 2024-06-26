import React from "react";

import SigninForm from "../components/SigninForm";
import SignHeader from "../components/SignHeader";
import { SIGNIN_TEXT } from "@/util/staticValue";
import SignBanner from "../components/SignBanner";

const Signin = () => {
  return (
    <div className="m-0 flex h-auto justify-center items-center min-h-[100vh] bg-[#f0f6ff]">
      <main className="absolute left-[50%] top-[50%] [transform:translate(-50%,-50%)] p-[30px] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-[30px]">
          <SignHeader
            spanText={SIGNIN_TEXT.headerSpanText}
            linkText={SIGNIN_TEXT.headerLinkText}
            linkUrl={SIGNIN_TEXT.linkText}
          />
          <SigninForm pathUrl={SIGNIN_TEXT.linkUrl} />
        </div>
        <SignBanner text={SIGNIN_TEXT.bannerText} />
      </main>
    </div>
  );
};

export default Signin;
