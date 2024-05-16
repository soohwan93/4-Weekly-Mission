import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../staticValue";
import { getSharedUser } from "../api";
import { getCookie } from "../cookieSetting";

export function useUserQuery() {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  return useQuery({
    queryKey: [QUERY_KEY.USER_PROFILE],
    queryFn: getSharedUser,
    staleTime: 0,
    enabled: !!accessToken || !!refreshToken,
  });
}
