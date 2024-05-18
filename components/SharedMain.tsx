import React from "react";
import SearchLinkInput from "./SearchLinkInput";
import LinkContainer from "./LinkContainer";
import LinkContainerSkeleton from "./LinkContainerSkeleton";
import { FolderListApiItem } from "@/app/folder/page";

interface SharedMainProps {
  closeButtonRef: React.RefObject<HTMLImageElement>;
  onCloseClick: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputClick: () => void;
  inputValue: string;
  isFocus: boolean;
  hasItemsToRender: number;
  itemstoRender: FolderListApiItem[] | undefined;
  isFetching: boolean;
}
const SharedMain = ({
  closeButtonRef,
  onCloseClick,
  onInputChange,
  onInputClick,
  inputValue,
  isFocus,
  hasItemsToRender,
  itemstoRender,
  isFetching,
}: SharedMainProps) => {
  return (
    <>
      <SearchLinkInput
        closeButtonRef={closeButtonRef}
        onCloseClick={onCloseClick}
        onInputChange={onInputChange}
        onInputClick={onInputClick}
        inputValue={inputValue}
        isFocus={isFocus}
      />
      {isFetching && (
        <div className="grid grid-cols-link-container gap-5 justify-center w-full">
          {[...Array(3)].map((_, index) => (
            <LinkContainerSkeleton key={`skeleton_${index}`} />
          ))}
        </div>
      )}
      {hasItemsToRender > 0 ? (
        <div className="grid grid-cols-link-container gap-5 justify-center w-full">
          {itemstoRender?.map((item: FolderListApiItem) => (
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
