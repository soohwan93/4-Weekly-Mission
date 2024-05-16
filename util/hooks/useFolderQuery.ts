import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../staticValue";
import { getFolderList } from "../api";
import { getCookie } from "../cookieSetting";

export function useFolderQuery() {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  return useQuery({
    queryKey: [QUERY_KEY.SHARED_FOLDER_LIST],
    queryFn: getFolderList,
    staleTime: 0,
    enabled: !!accessToken || !!refreshToken,
  });
}
