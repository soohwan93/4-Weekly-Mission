import React from "react";
import shareImg from "@/public/share.png";
import editNameImg from "@/public/pen.png";
import deleteImg from "@/public/delete.png";
import { MODAL_TYPE } from "@/util/staticValue";
import { OnModalProps } from "@/app/folder/page";

const FolderFunctions = ({ onModal }: OnModalProps) => {
  return (
    <div className="flex gap-[10px] shrink-0">
      <a
        className="flex items-center text-[#9fa6b2] text-sm font-semibold shrink-0 whitespace-nowrap cursor-pointer"
        onClick={() => onModal(MODAL_TYPE.SHARE)}
      >
        <img src={shareImg.src} alt="shareImg" />
        <span>공유</span>
      </a>
      <a
        className="flex items-center text-[#9fa6b2] text-sm font-semibold shrink-0 whitespace-nowrap cursor-pointer"
        onClick={() => onModal(MODAL_TYPE.EDIT_FOLDER)}
      >
        <img src={editNameImg.src} alt="editNameImg" />
        <span>이름변경</span>
      </a>
      <a
        className="flex items-center text-[#9fa6b2] text-sm font-semibold shrink-0 whitespace-nowrap cursor-pointer"
        onClick={() => onModal(MODAL_TYPE.DELETE_FOLDER)}
      >
        <img src={deleteImg.src} alt="deleteImg" />
        <span>삭제</span>
      </a>
    </div>
  );
};

export default FolderFunctions;
