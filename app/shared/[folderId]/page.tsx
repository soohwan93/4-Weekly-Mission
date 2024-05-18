"use client";
import React from "react";
import OwnerProfile from "@/components/OwnerProfile";
import SharedMain from "@/components/SharedMain";
import { useFolderByFolderIdQuery } from "@/util/hooks/useFolderQueryByFolderId";
import { useUserQuery } from "@/util/hooks/useUserQuery";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/staticValue";
import { getFolderListLink, getSharedUserById } from "@/util/api";
import useFilteredSearchResults from "@/util/hooks/useSearchInput";
import { FolderType } from "@/app/folder/page";

const Shared = ({ params }: { params: { folderId: string } }) => {
  const folderId = params.folderId;
  const { data: foldersByFolderId } = useFolderByFolderIdQuery(
    Number(folderId)
  );
  const { data: userData } = useUserQuery();

  const userId = userData?.[0].id ?? null;

  const { data: userDataById, isPending: isUserDataByIdPending } = useQuery({
    queryKey: [QUERY_KEY.USER_PROFILE_BY_ID],
    queryFn: () => getSharedUserById(userId),
    enabled: !!userId,
  });

  const { data: links, isFetching: isLinksFetching } = useQuery({
    queryKey: [QUERY_KEY.SHARED_LINK_LIST, folderId],
    queryFn: () => getFolderListLink(Number(folderId)),
  });

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useFilteredSearchResults(links ?? []);
  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length || 0;

  const userById = userDataById?.[0] ?? [];

  const folderData = foldersByFolderId?.filter(
    (item: FolderType) => item.id === Number(folderId)
  )[0];

  return (
    <>
      <div className="flex flex-col items-center">
        <OwnerProfile
          folderData={folderData}
          isPending={isUserDataByIdPending}
          userById={userById}
        />
        <section className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:py-10 1124px:px-8">
          <SharedMain
            closeButtonRef={closeButtonRef}
            hasItemsToRender={hasItemsToRender}
            inputValue={inputValue}
            isFetching={isLinksFetching}
            isFocus={isFocus}
            itemstoRender={itemstoRender}
            onCloseClick={handleCloseClick}
            onInputChange={handleInputChange}
            onInputClick={handleInputClick}
          />
        </section>
      </div>
    </>
  );
};

export default Shared;
