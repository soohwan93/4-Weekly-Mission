import React from "react";
import closeImg from "@/public/modal-close.png";
import SearchImage from "./SearchImage";
interface SearchLinkInputProps {
  inputValue: string;
  isFocus: boolean;
  closeButtonRef: React.RefObject<HTMLImageElement>;
  onInputClick: () => void;
  onCloseClick: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchLinkInput = ({
  onInputClick,
  onInputChange,
  inputValue,
  isFocus,
  closeButtonRef,
  onCloseClick,
}: SearchLinkInputProps) => {
  return (
    <div className="w-inherit relative">
      <SearchImage
        className={`absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 z-[1] ${
          isFocus ? `stroke-[#6d6afe]` : `stroke-[#666]`
        }`}
      />
      <input
        className="flex w-full flex-col items-start gap-2 relative rounded-lg bg-search-link-input border-none py-5 px-[45px] focus:outline-none placeholder:text-[#9fa6b2]"
        id="searchLinkInput"
        type="text"
        placeholder="링크를 검색해 보세요"
        onClick={onInputClick}
        onChange={onInputChange}
        value={inputValue}
      />
      {isFocus && (
        <img
          className="absolute right-[10px] top-[18px] w-[25px] h-[25px] hover:cursor-pointer"
          ref={closeButtonRef}
          onClick={onCloseClick}
          src={closeImg.src}
          alt="modal-close"
        />
      )}
    </div>
  );
};

export default SearchLinkInput;
