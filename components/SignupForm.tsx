"use client";
import React, { useState } from "react";
import {
  BUTTON_TEXT,
  INPUT_LABEL_TEXT,
  INPUT_SIGNUP_PLACEHOLDER_TEXT,
  PASSWORD_VALIDATION_TEXT,
} from "@/util/staticValue";

import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import {
  validateSignupEmailInput,
  validateSignupPasswordChkInput,
  validateSignupPasswordInput,
} from "@/util/validation";
import { useUserData } from "@/util/contexts/UserDataProvider";
import { useMutation } from "@tanstack/react-query";

const SignupForm = () => {
  const { signup } = useUserData();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    clearErrors,
    setError,
    getValues,
  } = useForm();

  const signupMutation = useMutation({
    mutationFn: (signupData: FieldValues) => signup(signupData),
  });
  const checkEmailMutation = useMutation({
    mutationFn: (emailData: string) => validateSignupEmailInput(emailData),
  });
  const [isPasswordEyeOn, setIsPasswordEyeOn] = useState(false);
  const [isPasswordCheckEyeOn, setIsPasswordCheckEyeOn] = useState(false);

  const handlePasswordEyeClick = () => {
    setIsPasswordEyeOn(!isPasswordEyeOn);
  };
  const handlePasswordCheckEyeClick = () => {
    setIsPasswordCheckEyeOn(!isPasswordCheckEyeOn);
  };

  const handleEmailBlur = async () => {
    const emailError = await checkEmailMutation.mutateAsync(watch("email"));
    if (emailError) {
      setError("email", {
        type: "custom",
        message: emailError,
      });
    } else {
      clearErrors("email");
    }
  };

  const handlePasswordBlur = () => {
    const passwordError = validateSignupPasswordInput(watch("password"));
    if (passwordError) {
      setError("password", {
        type: "custom",
        message: passwordError,
      });
    } else {
      clearErrors("password");
    }
  };

  const handlePasswordCheckBlur = () => {
    const passwordCheckError = validateSignupPasswordChkInput(
      watch("password"),
      watch("passwordCheck")
    );
    if (passwordCheckError) {
      setError("passwordCheck", {
        type: "custom",
        message: passwordCheckError,
      });
    } else {
      clearErrors("passwordCheck");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const signupData = {
      email: data.email,
      password: data.password,
    };
    const result = await signupMutation.mutateAsync(signupData);
    if (result) {
      router.push("/folder");
    }
  };

  const onErrors = (errors: Object) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative flex flex-col items-start gap-3">
        <label className="text-[14px] text-[#000]" htmlFor="email">
          {INPUT_LABEL_TEXT.EMAIL}
        </label>
        <input
          id="email"
          {...register("email", {
            validate: (value) => checkEmailMutation.mutateAsync(value),
            onBlur: () => handleEmailBlur(),
          })}
          placeholder={INPUT_SIGNUP_PLACEHOLDER_TEXT.EMAIL}
          className={`${
            errors.email && `border-[#ff5b56] border-solid`
          }flex w-[400px] px-[15px] py-[18px] justify-center items-center rounded-[8px] border border-[#ccd5e3] border-solid text-[#000] focus:[outline:none] focus:border-[#6d6afe] 767px:[width:min(400px,100vw-65px)]`}
          type="email"
        />
        <div className={`h-4 text-xs text-[#ff5b56]`}>
          {errors.email && (errors.email.message as string)}
        </div>
      </div>
      <div className="relative flex flex-col items-start gap-3">
        <label className="text-[14px] text-[#000]" htmlFor="password">
          {INPUT_LABEL_TEXT.PASSWORD}
        </label>
        <i
          onClick={handlePasswordEyeClick}
          data-icon="eyeIcon"
          className={`absolute w-4 h-4 right-[15px] bg-inherit bg-no-repeat bg-[95%_90%]  ${
            !isPasswordEyeOn
              ? `bg-[url('../public/eye-off.svg')] top-[56px]`
              : `bg-[url('../public/eye-on.svg')] top-[55px]`
          } hover:cursor-pointer`}
        />
        <input
          id="password"
          {...register("password", {
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
              message: PASSWORD_VALIDATION_TEXT.FALSY,
            },
            validate: (value) => validateSignupPasswordInput(value),
            onBlur: () => handlePasswordBlur(),
          })}
          placeholder={INPUT_SIGNUP_PLACEHOLDER_TEXT.PASSWORD}
          className={`${
            errors.password?.message && `border-[#ff5b56] border-solid`
          }flex w-[400px] px-[15px] py-[18px] justify-center items-center rounded-[8px] border border-[#ccd5e3] border-solid text-[#000] focus:[outline:none] focus:border-[#6d6afe] 767px:[width:min(400px,100vw-65px)]`}
          type={`${isPasswordEyeOn ? `text` : `password`}`}
        />
        <div className={`h-4 text-xs text-[#ff5b56]`}>
          {errors.password?.message as string}
        </div>
      </div>
      <div className="relative flex flex-col items-start gap-3">
        <label className="text-[14px] text-[#000]" htmlFor="passwordCheck">
          {INPUT_LABEL_TEXT.PASSWORD_CHECK}
        </label>
        <i
          onClick={handlePasswordCheckEyeClick}
          data-icon="eyeIcon"
          className={`absolute w-4 h-4 right-[15px] bg-no-repeat bg-[95%_90%]  ${
            !isPasswordCheckEyeOn
              ? `bg-[url('../public/eye-off.svg')] bg-inherit top-[56px]`
              : `bg-[url('../public/eye-on.svg')] top-[55px]`
          } hover:cursor-pointer`}
        />
        <input
          id="passwordCheck"
          {...register("passwordCheck", {
            required: PASSWORD_VALIDATION_TEXT.EMPTY,
            validate: (value) =>
              value === getValues("password") ||
              PASSWORD_VALIDATION_TEXT.DISMATCH,
            onBlur: () => handlePasswordCheckBlur(),
          })}
          placeholder={INPUT_SIGNUP_PLACEHOLDER_TEXT.PASSWORD_CHECK}
          className={`${
            errors.passwordCheck && `border-[#ff5b56] border-solid`
          }flex w-[400px] px-[15px] py-[18px] justify-center items-center rounded-[8px] border border-[#ccd5e3] border-solid text-[#000] focus:[outline:none] focus:border-[#6d6afe] 767px:[width:min(400px,100vw-65px)]`}
          type={`${isPasswordCheckEyeOn ? `text` : `password`}`}
        />
        <div className={`h-4 text-xs text-[#ff5b56]`}>
          {errors.passwordCheck?.message as string}
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={`flex w-[400px] py-4 px-5 justify-center items-center gap-[10px] [border:0px] rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe] text-lg font-semibold text-[#fff] 767px:[width:min(400px,100vw-65px)]`}
      >
        {BUTTON_TEXT.SIGNUP}
      </button>
    </form>
  );
};

export default SignupForm;
