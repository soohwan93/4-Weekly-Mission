import { FieldValues } from "react-hook-form";

interface EmailObject {
  email: string;
}
interface LoginObject {
  email: string;
  password: string;
}

const ERROR_MSG = "데이터 불러오기 실패";
const checkLoginPossibleURL = "https://bootcamp-api.codeit.kr/api/sign-in";
const checkEmailApiURL = "https://bootcamp-api.codeit.kr/api/check-email";
const checkSignupPossibleURL = "https://bootcamp-api.codeit.kr/api/sign-up";

const sharedUserSampleApiURL = "https://bootcamp-api.codeit.kr/api/users/1";
const sharedFolderSampleApiURL =
  "https://bootcamp-api.codeit.kr/api/sample/folder";
const folderListApiURL = "https://bootcamp-api.codeit.kr/api/users/1/folders";
const folderListAllDataApiURL =
  "https://bootcamp-api.codeit.kr/api/users/1/links";
const folderListDataApiURL =
  "https://bootcamp-api.codeit.kr/api/users/1/links?folderId=";

async function getApiResponse(url: string) {
  const response = await fetch(url);
  if (!response?.ok) {
    return new Error(ERROR_MSG);
  }
  const body = await response.json();

  return body;
}

async function postApiResponse(url: string, bodyData: Object) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  if (!response?.ok) {
    return new Error(ERROR_MSG);
  }
  const body = await response.json();

  return body;
}

export function getSharedUserSample() {
  return getApiResponse(sharedUserSampleApiURL);
}

export function getSharedFolderSample() {
  return getApiResponse(sharedFolderSampleApiURL);
}

export function getFolderList() {
  return getApiResponse(folderListApiURL);
}

export function getFolderListData(id: number) {
  const requestUrl = id ? folderListDataApiURL + id : folderListAllDataApiURL;
  return getApiResponse(requestUrl);
}

export function postLoginData(loginData: FieldValues) {
  const requestUrl = checkLoginPossibleURL;
  return postApiResponse(requestUrl, loginData);
}

export function postSignupEmailValidationData(email: EmailObject) {
  const requestUrl = checkEmailApiURL;
  return postApiResponse(requestUrl, email);
}

export function postSignupData(loginData: FieldValues) {
  const requestUrl = checkSignupPossibleURL;
  return postApiResponse(requestUrl, loginData);
}
