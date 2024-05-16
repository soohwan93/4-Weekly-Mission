import React from "react";
import SignHeader from "../../components/SignHeader";
import { SIGNUP_TEXT } from "@/util/staticValue";
import SignBanner from "../../components/SignBanner";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <div className="m-0 flex h-auto justify-center items-center min-h-[100vh] bg-[#f0f6ff]">
      <main className="absolute left-[50%] top-[50%] [transform:translate(-50%,-50%)] p-[30px] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-[30px]">
          <SignHeader
            spanText={SIGNUP_TEXT.HEADER_SPAN_TEXT}
            linkText={SIGNUP_TEXT.HEADER_LINK_TEXT}
            linkUrl={SIGNUP_TEXT.LINK_TEXT}
          />
          <SignupForm />
        </div>
        <SignBanner text={SIGNUP_TEXT.BANNER_TEXT} />
      </main>
    </div>
  );
};

export default Signup;
