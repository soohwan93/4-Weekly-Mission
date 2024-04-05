import React, { FormEventHandler } from "react";
type SignFormProps = {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};
const SignForm = ({ children, onSubmit }: SignFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-4"
      action=""
    >
      {children}
    </form>
  );
};

export default SignForm;
