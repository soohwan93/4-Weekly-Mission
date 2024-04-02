import { v4 as uuidv4 } from "uuid";

export const INPUT_LABEL_TEXT = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export const INPUT_SIGNIN_PLACEHOLDER_TEXT = {
  email: "이메일을 입력해 주세요.",
  password: "비밀번호를 입력해 주세요.",
};
export const INPUT_SIGNUP_PLACEHOLDER_TEXT = {
  email: "이메일을 입력해 주세요.",
  password: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호와 일치하는 값을 입력해 주세요.",
};

export const BUTTON_TEXT = {
  signin: "로그인",
  signup: "회원가입",
};

export const INPUT_TYPE = {
  email: "email",
  password: "password",
};

export const SIGNIN_TEXT = {
  headerSpanText: "회원이 아니신가요?",
  headerLinkText: "회원 가입하기",
  bannerText: "소셜 로그인",
  linkText: "/signup",
  linkUrl: "/signin",
};

export const SIGNUP_TEXT = {
  headerSpanText: "이미 회원이신가요?",
  headerLinkText: "로그인 하기",
  bannerText: "다른 방식으로 가입하기",
  linkText: "/signin",
  linkUrl: "/signup",
};

export const EMAIL_VALIDATION_TEXT = {
  empty: "이메일을 입력해 주세요.",
  falsy: "올바른 이메일 주소가 아닙니다.",
};

export const PASSWORD_VALIDATION_TEXT = {
  empty: "비밀번호를 입력해 주세요.",
  falsy: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
  dismatch: "비밀번호가 일치하지 않아요.",
};

export const USER_INITIAL_VALUE = {
  id: 0,
  email: "",
  image_source: "",
};

export const FOOTER_LOGO_DATA = [
  {
    id: uuidv4(),
    href: "https://www.facebook.com/",
    target: "facebook",
    src: "/facebook-logo.svg",
    alt: "facebook-logo",
  },
  {
    id: uuidv4(),
    href: "https://twitter.com/",
    target: "twitter",
    src: "/twitter-logo.svg",
    alt: "twitter-logo",
  },
  {
    id: uuidv4(),
    href: "https://www.youtube.com/",
    target: "youtube",
    src: "/youtube-logo.svg",
    alt: "youtube-logo",
  },
  {
    id: uuidv4(),
    href: "https://www.instagram.com/",
    target: "instagram",
    src: "/instafram-logo.svg",
    alt: "instafram-logo",
  },
];

export const LINKS_INITIAL_DATA = {
  createdAt: "",
  description: "",
  id: 0,
  imageSource: "",
  title: "",
  url: "",
};

export const ADD_MODAL_ITEMS = [
  {
    id: uuidv4(),
    title: "코딩팁",
    subTitle: "7개 링크",
  },
  {
    id: uuidv4(),
    title: "채용 사이트",
    subTitle: "12개 링크",
  },
  {
    id: uuidv4(),
    title: "유용한 글",
    subTitle: "30개 링크",
  },
  {
    id: uuidv4(),
    title: "나만의 장소",
    subTitle: "3개 링크",
  },
];

export const MODAL_TYPE = {
  share: "share",
  editFolder: "editFolder",
  deleteFolder: "deleteFolder",
  deleteLink: "deleteLink",
  addFolder: "addFolder",
  add: "add",
};

export const ALL_LIST_BUTTON_ID = 0;
