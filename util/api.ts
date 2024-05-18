"use client";
import { FieldValues } from "react-hook-form";
import { getCookie } from "./cookieSetting";
import { BASE_URL } from "./staticValue";
interface Favorite {
  favorite: boolean;
}
interface EmailObject {
  email: string;
}
type Method = "GET" | "POST" | "PUT" | "DELETE";

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

  if (!response.ok) {
    const errorResponse = await response.json();
    alert(errorResponse.message);
    console.error(errorResponse.message);
    return;
  }

  return response.json();
}

async function fetcher(endpoint: string, method: Method, body?: any) {
  const options: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : undefined,
  };

  return await fetchWithToken(`${BASE_URL}${endpoint}`, options);
}

export function getSharedUser() {
  return fetcher(`/users`, "GET");
}

export function getSharedUserById(userId: number) {
  return fetcher(`/users/${userId}`, "GET");
}

export function getFolderList() {
  return fetcher(`/folders`, "GET");
}
export function getFolderListByFolderId(folderId: number) {
  return fetcher(`/folders/${folderId}`, "GET");
}

export function getFolderListLink(folderId: number) {
  return fetcher(`/folders/${folderId}/links`, "GET");
}

export async function getFolderData() {
  return fetcher(`/links`, "GET");
}

export async function getFolderListData(folderId: number) {
  return fetcher(`/folders/${folderId}/links`, "GET");
}

export function postLoginData(loginData: FieldValues) {
  return fetcher(`/auth/sign-in`, "POST", loginData);
}

export function postSignupEmailValidationData(email: EmailObject) {
  return fetcher(`/users/check-email`, "POST", email);
}

export function postSignupData(loginData: FieldValues) {
  return fetcher(`/auth/sign-up`, "POST", loginData);
}

export function putChangeFavorite(linkId: number, bodyData: Favorite) {
  return fetcher(`/links/${linkId}`, "PUT", bodyData);
}
