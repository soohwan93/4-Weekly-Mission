import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../staticValue";
import { getFolderListByFolderId } from "../api";
import { getCookie } from "../cookieSetting";

export function useFolderByFolderIdQuery(folderId: number) {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  return useQuery({
    queryKey: [QUERY_KEY.SHARED_FOLDER_LIST_BY_FOLDER_ID],
    queryFn: () => getFolderListByFolderId(folderId),
    staleTime: 0,
    enabled: !!accessToken || !!refreshToken,
  });
}
