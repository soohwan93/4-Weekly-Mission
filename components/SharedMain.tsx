"use client";
import React from "react";
import SearchLinkInput from "./SearchLinkInput";
import LinkContainer from "./LinkContainer";
import useSearchInput from "@/util/hooks/useSearchInput";
import { LinksApiData } from "@/app/shared/page";

interface SharedMainProps {
  links: LinksApiData[];
}

const SharedMain = ({ links }: SharedMainProps) => {
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<LinksApiData>(links);
  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length;
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
          {itemstoRender.map((item: LinksApiData) => (
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
