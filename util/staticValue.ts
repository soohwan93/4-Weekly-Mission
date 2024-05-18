import { v4 as uuidv4 } from "uuid";
export const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export const INPUT_LABEL_TEXT = {
  EMAIL: "이메일",
  PASSWORD: "비밀번호",
  PASSWORD_CHECK: "비밀번호 확인",
};

export const INPUT_SIGNIN_PLACEHOLDER_TEXT = {
  EMAIL: "이메일을 입력해 주세요.",
  PASSWORD: "비밀번호를 입력해 주세요.",
};
export const INPUT_SIGNUP_PLACEHOLDER_TEXT = {
  EMAIL: "이메일을 입력해 주세요.",
  PASSWORD: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  PASSWORD_CHECK: "비밀번호와 일치하는 값을 입력해 주세요.",
};

export const BUTTON_TEXT = {
  SIGNIN: "로그인",
  SIGNUP: "회원가입",
};

export const INPUT_TYPE = {
  EMAIL: "email",
  PASSWORD: "password",
};

export const SIGNIN_TEXT = {
  HEADER_SPAN_TEXT: "회원이 아니신가요?",
  HEADER_LINK_TEXT: "회원 가입하기",
  BANNER_TEXT: "소셜 로그인",
  LINK_TEXT: "/signup",
  LINK_URL: "/signin",
};

export const SIGNUP_TEXT = {
  HEADER_SPAN_TEXT: "이미 회원이신가요?",
  HEADER_LINK_TEXT: "로그인 하기",
  BANNER_TEXT: "다른 방식으로 가입하기",
  LINK_TEXT: "/signin",
  LINK_URL: "/signup",
};

export const EMAIL_VALIDATION_TEXT = {
  EMPTY: "이메일을 입력해 주세요.",
  FALSY: "올바른 이메일 주소가 아닙니다.",
  FAIL: "이메일을 확인해 주세요.",
};

export const PASSWORD_VALIDATION_TEXT = {
  EMPTY: "비밀번호를 입력해 주세요.",
  FALSY: "비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.",
  DISMATCH: "비밀번호가 일치하지 않아요.",
  FAIL: "비밀번호를 확인해 주세요.",
};

export const USER_INITIAL_VALUE = {
  id: 0,
  email: "",
  image_source: "",
  name: "",
  isPending: true,
};

export const FOLDER_INITIAL_VALUE = {
  id: 0,
  name: "",
  favorite: false,
  user_id: 0,
  created_at: "",
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
  SHARE: "share",
  EDIT_FOLDER: "editFolder",
  DELETE_FOLDER: "deleteFolder",
  DELETE_LINK: "deleteLink",
  ADD_FOLDER: "addFolder",
  ADD_LINK: "addLink",
};

export const ALL_LIST_BUTTON_ID = 0;

export const QUERY_KEY = {
  SHARED_FOLDER_LIST: "sharedFolderList",
  SHARED_FOLDER_LIST_BY_FOLDER_ID: "sharedFolderListByFolderId",
  USER_PROFILE: "userProfile",
  USER_PROFILE_BY_ID: "userProfileById",
  SHARED_LINK_LIST: "sharedLinkList",
  FOLDER_ALL_LINK_LIST: "folderAllLinkList",
  FOLDER_LINK_LIST: "folderLinkList",
};
