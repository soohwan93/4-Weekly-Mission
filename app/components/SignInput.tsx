import { INPUT_TYPE, SIGNIN_TEXT, SIGNUP_TEXT } from "@/util/staticValue";
import {
  validateSigninEmailInput,
  validateSigninPasswordInput,
  validateSignupEmailInput,
  validateSignupPasswordChkInput,
  validateSignupPasswordInput,
} from "@/util/validation";
import React, { useEffect, useState } from "react";
interface SignInputProps {
  emailRef?: React.RefObject<HTMLInputElement>;
  passwordRef?: React.RefObject<HTMLInputElement>;
  checkPasswordRef?: React.RefObject<HTMLInputElement>;
  path: string;
  focus?: boolean;
  labelText: string;
  type: string;
}
const SignInput = ({
  emailRef,
  passwordRef,
  checkPasswordRef,
  path,
  focus,
  labelText,
  type,
}: SignInputProps) => {
  const [isEyeOn, setIsEyeOn] = useState(false);
  const [errorMsg, setErrorMsg] = useState<Promise<string> | string>("");

  const handleEyeClick = () => {
    setIsEyeOn(!isEyeOn);
  };

  const handleInputBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMsg("");
    let errMsg: Promise<string> | string = "";
    if (path.includes(SIGNIN_TEXT.linkUrl)) {
      if (type === INPUT_TYPE.email) {
        errMsg = validateSigninEmailInput(String(emailRef?.current?.value));
      } else {
        errMsg = validateSigninPasswordInput(
          String(passwordRef?.current?.value)
        );
      }
    } else if (path.includes(SIGNUP_TEXT.linkUrl)) {
      if (type === INPUT_TYPE.email) {
        errMsg = validateSignupEmailInput(String(emailRef?.current?.value));
      } else {
        if (passwordRef && checkPasswordRef) {
          errMsg = validateSignupPasswordChkInput(
            String(checkPasswordRef?.current?.value),
            String(passwordRef?.current?.value)
          );
        } else {
          errMsg = validateSignupPasswordInput(
            String(passwordRef?.current?.value)
          );
        }
      }
    }
    if (errMsg instanceof Promise) {
      errMsg = await errMsg;
    }
    setErrorMsg(errMsg);
  };

  useEffect(() => {
    if (focus) {
      emailRef?.current?.focus();
    }
  }, []);
  return (
    <div className="relative flex flex-col items-start gap-3">
      <label className="text-[14px] text-[#000]" htmlFor={type}>
        {labelText}
      </label>
      {type === "password" && (
        <i
          onClick={handleEyeClick}
          data-icon="eyeIcon"
          className={`absolute w-4 h-4 right-[15px] bg-no-repeat bg-[95%_90%]  ${
            !isEyeOn
              ? `bg-[url('../public/eye-off.svg')] top-[56px]`
              : `bg-[url('../public/eye-on.svg')] top-[55px]`
          } hover:cursor-pointer`}
        ></i>
      )}
      <input
        onBlur={handleInputBlur}
        placeholder={labelText}
        ref={emailRef || (checkPasswordRef ? checkPasswordRef : passwordRef)}
        className={`${
          errorMsg !== "" && `border-[#ff5b56] border-solid`
        }flex w-[400px] px-[15px] py-[18px] justify-center items-center rounded-[8px] border border-[#ccd5e3] border-solid text-[#000] focus:[outline:none] focus:border-[#6d6afe] 767px:[width:min(400px,100vw-65px)]`}
        id={!checkPasswordRef ? type : checkPasswordRef?.current?.value}
        type={!isEyeOn ? type : INPUT_TYPE.email}
      />
      <div className={`h-4 text-xs text-[#ff5b56]`}>{errorMsg}</div>
    </div>
  );
};

export default SignInput;
