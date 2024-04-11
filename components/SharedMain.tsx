"use client";
import React, { useEffect, useState } from "react";
import SearchLinkInput from "./SearchLinkInput";
import LinkContainer from "./LinkContainer";
import useSearchInput from "@/util/hooks/useSearchInput";
import { useUserData } from "@/util/ContextProvider";
import { getSharedLinks } from "@/util/api";
import { usePathname } from "next/navigation";

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

const SharedMain = () => {
  const pathname = usePathname();
  const folderId = pathname.split("/shared/")[1];
  const { user } = useUserData(true);
  const [links, setLinks] = useState<SharedLinksApi[]>([]);
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<SharedLinksApi>(links);
  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length;

  const fetchLinkData = async () => {
    const result = await getSharedLinks(user?.id as number, Number(folderId));
    setLinks(result.data);
  };
  useEffect(() => {
    if (user && user.id) {
      fetchLinkData();
    }
  }, [user]);

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
          {itemstoRender.map((item: SharedLinksApi) => (
            <LinkContainer item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div style={{ paddingBottom: `50px` }}>저장된 링크가 없습니다</div>
      )}
    </>
  );
};

export default SharedMain;
