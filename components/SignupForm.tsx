"use client";
import React, { FormEvent, useRef } from "react";
import SignInput from "./SignInput";
import {
  BUTTON_TEXT,
  INPUT_LABEL_TEXT,
  INPUT_SIGNUP_PLACEHOLDER_TEXT,
  INPUT_TYPE,
} from "@/util/staticValue";
import SignForm from "./SignForm";
import SignButton from "./SignButton";
import { SignUrlProp } from "./SigninForm";

const SignupForm = ({ pathUrl }: SignUrlProp) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <SignForm onSubmit={handleSubmit}>
      <SignInput
        path={pathUrl}
        emailRef={emailRef}
        labelText={INPUT_LABEL_TEXT.email}
        placeholderText={INPUT_SIGNUP_PLACEHOLDER_TEXT.email}
        type={INPUT_TYPE.email}
      />
      <SignInput
        path={pathUrl}
        passwordRef={passwordRef}
        labelText={INPUT_LABEL_TEXT.password}
        placeholderText={INPUT_SIGNUP_PLACEHOLDER_TEXT.password}
        type={INPUT_TYPE.password}
      />
      <SignInput
        passwordRef={passwordRef}
        path={pathUrl}
        checkPasswordRef={checkPasswordRef}
        labelText={INPUT_LABEL_TEXT.passwordCheck}
        placeholderText={INPUT_SIGNUP_PLACEHOLDER_TEXT.passwordCheck}
        type={INPUT_TYPE.password}
      />
      <SignButton text={BUTTON_TEXT.signup} />
    </SignForm>
  );
};

export default SignupForm;
