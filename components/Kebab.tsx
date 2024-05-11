import { OnModalProps } from "../app/folder/page";
import { MouseEvent, useEffect, useRef, useState } from "react";

import { MODAL_TYPE } from "@/util/staticValue";
export interface KebabButtonProps extends OnModalProps {
  linkUrl: string;
}

function Kebab({ linkUrl, onModal }: KebabButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLImageElement>(null);

  const toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      if (!dropDownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className="w-[21px] [border:none] relative bg-[url('../public/kebab.svg')] bg-no-repeat"
      ref={dropDownRef}
      onClick={toggleDropdown}
    >
      <div
        className={`absolute top-[25px] right-[-80px] ${
          isOpen ? "block" : "[display:none]"
        } bg-white shadow-lg z-10 390px:right-0`}
      >
        <div
          className="flex items-center justify-center py-[7px] px-3 bg-white hover:bg-[#e7effb] hover:text-[#6d6afe]"
          onClick={() => onModal(MODAL_TYPE.DELETE_LINK, linkUrl)}
        >
          삭제하기
        </div>
        <div
          className="flex items-center justify-center py-[7px] px-3 bg-white hover:bg-[#e7effb] hover:text-[#6d6afe]"
          onClick={() => onModal(MODAL_TYPE.ADD_FOLDER)}
        >
          폴더에 추가
        </div>
      </div>
    </div>
  );
}

export default Kebab;
