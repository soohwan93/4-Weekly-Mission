import React from "react";
type SignButtonProps = { text: string };
const SignButton = ({ text }: SignButtonProps) => {
  return (
    <button
      type="submit"
      id="loginBtn"
      className="flex w-[400px] py-4 px-5 justify-center items-center gap-[10px] [border:0px] rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe] text-lg font-semibold text-[#fff] 767px:[width:min(400px,100vw-65px)]"
    >
      {text}
    </button>
  );
};

export default SignButton;
