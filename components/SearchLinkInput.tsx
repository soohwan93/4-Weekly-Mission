import React from "react";
import closeImg from "@/public/modal-close.png";
import SearchImage from "./SearchImage";
interface SearchLinkInputProps {
  inputValue: string;
  isFocus: boolean;
  closeButtonRef: React.RefObject<HTMLImageElement>;
  handleInputClick: () => void;
  handleCloseClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchLinkInput = ({
  handleInputClick,
  handleInputChange,
  inputValue,
  isFocus,
  closeButtonRef,
  handleCloseClick,
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
        // className="flex w-full flex-col items-start gap-2 relative rounded-lg bg-search-link-input border-none bg-[url('../public/search.svg')] bg-no-repeat py-5 px-[45px] bg-left [background-position-x:20px] focus:outline-none focus:bg-[url('../public/search-purple.svg')] placeholder:text-[#9fa6b2]"
        id="searchLinkInput"
        type="text"
        placeholder="링크를 검색해 보세요"
        onClick={handleInputClick}
        onChange={handleInputChange}
        value={inputValue}
      />
      {isFocus && (
        <img
          className="absolute right-[10px] top-[18px] w-[25px] h-[25px] hover:cursor-pointer"
          ref={closeButtonRef}
          onClick={handleCloseClick}
          src={closeImg.src}
          alt="modal-close"
        />
      )}
    </div>
  );
};

export default SearchLinkInput;
