import { EMAIL_VALIDATION_TEXT, PASSWORD_VALIDATION_TEXT } from "./staticValue";

//이메일 유효성 체크
const isEmailVaild = (email: string) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return pattern.test(email);
};

//비밀번호 유효성 체크
const isPasswordValid = (password: string) => {
  const pattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  return pattern.test(password);
};

//이메일 유효성 검사(로그인)
export const validateSigninEmailInput = (email: string) => {
  if (!email) {
    return EMAIL_VALIDATION_TEXT.EMPTY;
  } else if (!isEmailVaild(email)) {
    return EMAIL_VALIDATION_TEXT.FALSY;
  }
};

//이메일 유효성 검사(회원가입)
export const validateSignupEmailInput = async (email: string) => {
  if (!email) {
    return EMAIL_VALIDATION_TEXT.EMPTY;
  } else {
    const result = await emailValidationCheckAPI(email);
    if (result) {
      return String(result);
    }
  }
};

export async function emailValidationCheckAPI(emailInput: string) {
  const postRequestOfCodeitAPI = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    }
  );
  const result = await postRequestOfCodeitAPI.json();
  if (!postRequestOfCodeitAPI.ok) {
    return result.error.message;
  }
}

//비밀번호 유효성 검사(로그인)
export const validateSigninPasswordInput = (password: string) =>
  !password ? PASSWORD_VALIDATION_TEXT.EMPTY : "";

//비밀번호 유효성 검사(회원가입)
export const validateSignupPasswordInput = (password: string) => {
  if (!password) {
    return PASSWORD_VALIDATION_TEXT.EMPTY;
  } else if (!isPasswordValid(password)) {
    return PASSWORD_VALIDATION_TEXT.FALSY;
  }
};

//비밀번호 확인 유효성 검사(회원가입)
export const validateSignupPasswordChkInput = (
  value: string,
  prevValue: string
) => {
  if (value !== prevValue) {
    return PASSWORD_VALIDATION_TEXT.DISMATCH;
  }
};
