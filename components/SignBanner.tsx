import React from "react";
import googleLogo from "@/public/google-logo.png";
import kakaoLogo from "@/public/kakao-logo.svg";

type SignBannerText = {
  text: string;
};

const SignBanner = ({ text }: SignBannerText) => {
  return (
    <div className="flex w-[400px] py-3 px-6 justify-between items-center rounded-lg border-[1px] border-solid border-[#ccd5e3] bg-[#e7effb] 767px:[width:min(400px,100vw-65px)]">
      <span className="text-[#373740] text-sm">{text}</span>
      <div className="flex items-center justify-center h-[44px] gap-4">
        <a
          className="no-underline"
          href="https://www.google.com/"
          target="_blank"
        >
          <img src={googleLogo.src} alt="google" />
        </a>
        <a
          className="no-underline h-11"
          href="https://www.kakaocorp.com/page/"
          target="_blank"
        >
          <div className="inline-block relative w-11 h-11 shrink-0 bg-[#f5e14b] rounded-[50%]">
            <img
              className="absolute top-[53%] left-[50%] [transform:translate(-50%,-50%)]"
              src={kakaoLogo.src}
              alt="kakao"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SignBanner;
