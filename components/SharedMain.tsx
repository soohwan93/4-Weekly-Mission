"use client";
import React from "react";
import SearchLinkInput from "./SearchLinkInput";
import LinkContainer from "./LinkContainer";
import useSearchInput from "@/util/hooks/useSearchInput";
import { getFolderListLink } from "@/util/api";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/staticValue";
import LinkContainerSkeleton from "./LinkContainerSkeleton";

export interface SharedLinksApi {
  id: number;
  created_at: string;
  updated_at: string | boolean;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

const SharedMain = ({ folderId }: { folderId: string }) => {
  const { data: links, isFetching } = useQuery<SharedLinksApi[]>({
    queryKey: [QUERY_KEY.SHARED_LINK_LIST],
    queryFn: () => getFolderListLink(Number(folderId)),
    staleTime: 0,
  });

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<SharedLinksApi>(links ?? []);
  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length || 0;

  return (
    <>
      <SearchLinkInput
        closeButtonRef={closeButtonRef}
        handleCloseClick={handleCloseClick}
        handleInputChange={handleInputChange}
        handleInputClick={handleInputClick}
        inputValue={inputValue}
        isFocus={isFocus}
      />
      {hasItemsToRender > 0 ? (
        <div className="grid grid-cols-link-container gap-5 justify-center w-full">
          {itemstoRender?.map((item: SharedLinksApi) => (
            <LinkContainer item={item} key={item.id} />
          ))}
        </div>
      ) : isFetching ? (
        <div className="grid grid-cols-link-container gap-5 justify-center w-full">
          {[...Array(3)].map((_, index) => (
            <LinkContainerSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div style={{ paddingBottom: `50px` }}>저장된 링크가 없습니다</div>
      )}
    </>
  );
};

export default SharedMain;
