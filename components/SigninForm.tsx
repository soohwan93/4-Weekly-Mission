"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  BUTTON_TEXT,
  EMAIL_VALIDATION_TEXT,
  INPUT_LABEL_TEXT,
  INPUT_SIGNIN_PLACEHOLDER_TEXT,
  PASSWORD_VALIDATION_TEXT,
} from "@/util/staticValue";
import {
  validateSigninEmailInput,
  validateSigninPasswordInput,
} from "@/util/validation";
import { useRouter } from "next/navigation";
import { useUserData } from "@/util/contexts/UserDataProvider";
import { useMutation } from "@tanstack/react-query";

const SigninForm = () => {
  const { login } = useUserData();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    clearErrors,
    setError,
  } = useForm();

  const signinMutation = useMutation({
    mutationFn: (loginData: FieldValues) => login(loginData),
  });

  const [isEyeOn, setIsEyeOn] = useState(false);

  const handleEyeClick = () => {
    setIsEyeOn(!isEyeOn);
  };

  const handleEmailBlur = (value?: string) => {
    if (value) {
      setError("email", {
        type: "custom",
        message: value,
      });
    } else {
      const emailError = validateSigninEmailInput(watch("email"));
      if (emailError) {
        setError("email", {
          type: "custom",
          message: emailError,
        });
      } else {
        clearErrors("email");
      }
    }
  };

  const handlePasswordBlur = (value?: string) => {
    if (value) {
      setError("password", {
        type: "custom",
        message: value,
      });
    } else {
      const passwordError = validateSigninPasswordInput(watch("password"));
      if (passwordError) {
        setError("password", {
          type: "custom",
          message: passwordError,
        });
      } else {
        clearErrors("password");
      }
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const result = await signinMutation.mutateAsync(data);
    if (result) {
      router.push("/folder");
    } else {
      handleEmailBlur(EMAIL_VALIDATION_TEXT.FAIL);
      handlePasswordBlur(PASSWORD_VALIDATION_TEXT.FAIL);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative flex flex-col items-start gap-3">
        <label className="text-[14px] text-[#000]" htmlFor="email">
          {INPUT_LABEL_TEXT.EMAIL}
        </label>
        <input
          {...register("email", {
            validate: (value) => validateSigninEmailInput(value),
            onBlur: () => handleEmailBlur(),
          })}
          placeholder={INPUT_SIGNIN_PLACEHOLDER_TEXT.EMAIL}
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
          onClick={handleEyeClick}
          data-icon="eyeIcon"
          className={`absolute w-4 h-4 right-[15px] bg-no-repeat bg-[95%_90%]  ${
            !isEyeOn
              ? `bg-[url('../public/eye-off.svg')] top-[56px]`
              : `bg-[url('../public/eye-on.svg')] top-[55px]`
          } hover:cursor-pointer`}
        />
        <input
          {...register("password", {
            required: PASSWORD_VALIDATION_TEXT.EMPTY,
            onBlur: () => handlePasswordBlur(),
          })}
          placeholder={INPUT_SIGNIN_PLACEHOLDER_TEXT.PASSWORD}
          className={`${
            errors.password && `border-[#ff5b56] border-solid`
          }flex w-[400px] px-[15px] py-[18px] justify-center items-center rounded-[8px] border border-[#ccd5e3] border-solid text-[#000] focus:[outline:none] focus:border-[#6d6afe] 767px:[width:min(400px,100vw-65px)]`}
          type={`${isEyeOn ? `text` : `password`}`}
        />
        <div className={`h-4 text-xs text-[#ff5b56]`}>
          {errors.password && (errors.password.message as string)}
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex w-[400px] py-4 px-5 justify-center items-center gap-[10px] [border:0px] rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe] text-lg font-semibold text-[#fff] 767px:[width:min(400px,100vw-65px)]"
      >
        {BUTTON_TEXT.SIGNIN}
      </button>
    </form>
  );
};

export default SigninForm;
