import shareImg from "@/public/share.png";
import editNameImg from "@/public/pen.png";
import deleteImg from "@/public/delete.png";

import { MODAL_TYPE } from "@/util/staticValue";
import { OnModalProps } from "../app/folder/page";
import type { Folders } from "@/util/contexts/UserDataProvider";
interface FolderTitleProps extends OnModalProps {
  folders: Folders[];
  folderId: number;
}
function FolderTitle({ folders, folderId, onModal }: FolderTitleProps) {
  const folder = folders?.filter((folder) => folder.id === folderId)[0];
  return (
    <div className="w-full flex items-center justify-between 390px:flex-col 390px:items-start 390px:gap-[10px]">
      <div className="text-[#000] w-full text-2xl font-semibold tracking-[-0.2px]">
        {folder?.name}
      </div>
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
    </div>
  );
}

export default FolderTitle;
