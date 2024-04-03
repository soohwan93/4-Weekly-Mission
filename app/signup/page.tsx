"use client";
import React, { useEffect, useState } from "react";
import SignHeader from "../../components/SignHeader";
import { SIGNUP_TEXT } from "@/util/staticValue";
import SignBanner from "../../components/SignBanner";
import SignupForm from "../../components/SignupForm";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [isRender, setIsRender] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let shouldRedirect = false;
    if (window.localStorage.length) {
      let key;
      let value;
      for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (key) {
          value = localStorage.getItem(key);
        }
        if (key === value) {
          shouldRedirect = true;
          break;
        }
      }
    } else {
      shouldRedirect = false;
    }
    if (shouldRedirect) {
      router.push("/folder");
    } else {
      setIsRender(true);
    }
  }, []);
  if (!isRender) return;
  return (
    <div className="m-0 flex h-auto justify-center items-center min-h-[100vh] bg-[#f0f6ff]">
      <main className="absolute left-[50%] top-[50%] [transform:translate(-50%,-50%)] p-[30px] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-[30px]">
          <SignHeader
            spanText={SIGNUP_TEXT.headerSpanText}
            linkText={SIGNUP_TEXT.headerLinkText}
            linkUrl={SIGNUP_TEXT.linkText}
          />
          <SignupForm />
        </div>
        <SignBanner text={SIGNUP_TEXT.bannerText} />
      </main>
    </div>
  );
};

export default Signup;
