"use client";
import React, { FormEvent, useRef } from "react";
import SignInput from "./SignInput";
import {
  BUTTON_TEXT,
  INPUT_LABEL_TEXT,
  INPUT_SIGNIN_PLACEHOLDER_TEXT,
  INPUT_TYPE,
} from "@/util/staticValue";
import SignForm from "./SignForm";
import SignButton from "./SignButton";
export type SignUrlProp = { pathUrl: string };
const SigninForm = ({ pathUrl }: SignUrlProp) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <SignForm onSubmit={handleSubmit}>
      <SignInput
        focus
        path={pathUrl}
        emailRef={emailRef}
        labelText={INPUT_LABEL_TEXT.email}
        placeholderText={INPUT_SIGNIN_PLACEHOLDER_TEXT.email}
        type={INPUT_TYPE.email}
      />
      <SignInput
        path={pathUrl}
        passwordRef={passwordRef}
        labelText={INPUT_LABEL_TEXT.password}
        placeholderText={INPUT_SIGNIN_PLACEHOLDER_TEXT.password}
        type={INPUT_TYPE.password}
      />
      <SignButton text={BUTTON_TEXT.signin} />
    </SignForm>
  );
};

export default SigninForm;
