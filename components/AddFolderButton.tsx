import Link from "next/link";
import React from "react";
import AddImage from "./AddImage";
import { OnModalProps } from "@/app/folder/page";
import { MODAL_TYPE } from "@/util/staticValue";

const AddFolderButton = ({ onModal }: OnModalProps) => {
  return (
    <Link
      href={"#"}
      className="flex gap-1 whitespace-nowrap items-center justify-center text-[#6d6afe] text-center font-medium tracking-[-0.3px] 767px:fixed 767px:bottom-[101px] 767px:left-[50%] 767px:[transform:translate(-50%,-50%)] 767px:z-[10] 767px:rounded-[20px] 767px:border-[1px] 767px:border-solid 767px:border-[#6d6afe] 767px:bg-[#6d6afe] 767px:text-[#e7effb] 767px:flex 767px:py-2 767px:px-6 767px:items-start 767px:gap-[10px]"
      onClick={() => onModal(MODAL_TYPE.ADD_FOLDER)}
    >
      <span>폴더 추가</span>
      <AddImage className="text-[#6d6afe] 767px:text-[#fff]" />
    </Link>
  );
};

export default AddFolderButton;
