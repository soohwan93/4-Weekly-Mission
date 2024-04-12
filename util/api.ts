"use client";
import { FieldValues } from "react-hook-form";
import { getCookie } from "./cookieSetting";
interface EmailObject {
  email: string;
}

const ERROR_MSG = "데이터 불러오기 실패";
const checkLoginPossibleURL = "https://bootcamp-api.codeit.kr/api/sign-in";
const checkEmailApiURL = "https://bootcamp-api.codeit.kr/api/check-email";
const checkSignupPossibleURL = "https://bootcamp-api.codeit.kr/api/sign-up";
const sharedUserSampleApiURL = "https://bootcamp-api.codeit.kr/api/users/1";
const sharedUserApiURL = "https://bootcamp-api.codeit.kr/api/users";
const sharedFolderSampleApiURL =
  "https://bootcamp-api.codeit.kr/api/sample/folder";
const sharedFolderApiURL = "https://bootcamp-api.codeit.kr/api/folders";
const folderAllDataApiURL = "https://bootcamp-api.codeit.kr/api/links";
const folderDataApiURL = "https://bootcamp-api.codeit.kr/api/links?folderId=";

async function fetchWithToken(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers as HeadersInit);
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (!headers.has("Content-Type") && options.body) {
    headers.append("Content-Type", "application/json");
  }

  const mergedOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, mergedOptions);

  if (!response.ok) {
    return new Error(ERROR_MSG);
  }

  return response.json();
}

async function getApiResponse(url: string) {
  const body = await fetchWithToken(url);
  return body;
}

async function postApiResponse(url: string, bodyData: Object) {
  const body = await fetchWithToken(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
  });
  return body;
}

export function getSharedUserSample() {
  return getApiResponse(sharedUserSampleApiURL);
}
export function getSharedUser() {
  return getApiResponse(sharedUserApiURL);
}

export function getSharedFolderSample() {
  return getApiResponse(sharedFolderSampleApiURL);
}

export function getSharedFolder() {
  return getApiResponse(sharedFolderApiURL);
}

export function getSharedLinks(userId: number, folderId: number) {
  return getApiResponse(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links?folderId=${folderId}`
  );
}

export function getFolderList() {
  return getApiResponse(sharedFolderApiURL);
}

export async function getFolderListData(id?: number) {
  const requestUrl = id ? folderDataApiURL + id : folderAllDataApiURL;
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
