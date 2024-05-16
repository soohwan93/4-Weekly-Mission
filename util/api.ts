"use client";
import { FieldValues } from "react-hook-form";
import {
  getCookie,
  setAccessCookieToken,
  setRefreshCookieToken,
} from "./cookieSetting";
import { API } from "./staticValue";
interface EmailObject {
  email: string;
}

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

  let response = await fetch(url, mergedOptions);

  if (response.status === 401) {
    const refreshTokenResponse = await fetch(API.URL.REFRESH_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: getCookie("refreshToken"),
      }),
    });
    if (refreshTokenResponse.ok) {
      const refreshTokenData = await refreshTokenResponse.json();
      const accessToken = refreshTokenData.data.accessToken;
      const refreshToken = refreshTokenData.data.refreshToken;

      setAccessCookieToken(accessToken);
      setRefreshCookieToken(refreshToken);
      headers.set("Authorization", `Bearer ${accessToken}`);

      const updatedOptions: RequestInit = {
        ...mergedOptions,
        headers: headers,
      };

      response = await fetch(url, updatedOptions);
    } else {
      return new Error(API.MESSAGE.REFRESH);
    }
  }

  if (!response.ok) {
    return new Error(API.MESSAGE.COMMON);
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

export function getSharedUser() {
  return getApiResponse(API.URL.USER_DATA);
}

export function getSharedUserById(userId: number) {
  const requestUrl = API.URL.USER_DATA_FROM_USERID + userId;
  return getApiResponse(requestUrl);
}

export function getFolderList() {
  return getApiResponse(API.URL.SHARED_FOLDER);
}
export function getFolderListByFolderId(folderId: number) {
  const requestUrl = API.URL.SHARED_FOLDER_LINK + folderId;
  return getApiResponse(requestUrl);
}

export function getFolderListLink(folderId: number) {
  const requestUrl = `${API.URL.SHARED_FOLDER_LINK}${folderId}/links`;
  return getApiResponse(requestUrl);
}

export async function getFolderListData(folderId?: number) {
  const requestUrl = folderId
    ? `${API.URL.SHARED_FOLDER_LINK}${folderId}/links`
    : API.URL.FOLDER_ALL_DATA;
  return getApiResponse(requestUrl);
}

export function postLoginData(loginData: FieldValues) {
  const requestUrl = API.URL.CHECK_LOGIN_POSSIBLE;
  return postApiResponse(requestUrl, loginData);
}

export function postSignupEmailValidationData(email: EmailObject) {
  const requestUrl = API.URL.CHECK_EMAIL;
  return postApiResponse(requestUrl, email);
}

export function postSignupData(loginData: FieldValues) {
  const requestUrl = API.URL.CHECK_SIGNUP_POSSIBLE;
  return postApiResponse(requestUrl, loginData);
}
