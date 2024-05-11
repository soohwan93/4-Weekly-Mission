import AddImage from "./AddImage";
import Link from "next/link";
import { MODAL_TYPE } from "@/util/staticValue";
import { OnModalProps } from "../app/folder/page";
import type { Folders } from "@/util/contexts/UserDataProvider";
import { useRouter } from "next/navigation";

export type handleButtonListItemClick = (id?: number) => void;

export interface FolderButtonProps extends OnModalProps {
  folderList: Folders[];
}
function FolderButtonAll({ folderList, onModal }: FolderButtonProps) {
  const router = useRouter();
  return (
    <div className="flex items-center w-full">
      <div className="w-full flex items-center gap-2 flex-wrap">
        <button
          className={`flex py-[6px] px-3 flex-col items-center transition-all ease-in-out bg-[#6d6afe] text-[#fff] [transition-duration:0.3s] [transition-delay:0s] rounded-[5px] border-[1px] border-solid border-[#6d6afe] h-[35px] whitespace-nowrap 767px:h-[30px] 767px:text-[14px] 767px:py-[4px] 767px:px-[10px] `}
          key="0"
          onClick={() => router.push(`/folder`)}
        >
          전체
        </button>
        {folderList?.map((item: Folders) => (
          <button
            className={`flex py-[6px] px-3 flex-col items-center transition-all ease-in-out bg-[#fff] text-[#000] [transition-duration:0.3s] [transition-delay:0s] rounded-[5px] border-[1px] border-solid border-[#6d6afe] h-[35px] whitespace-nowrap 767px:h-[30px] 767px:text-[14px] 767px:py-[4px] 767px:px-[10px]`}
            onClick={() => router.push(`/folder/${item.id}`)}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Link
        href={"#"}
        className="flex gap-1 whitespace-nowrap items-center justify-center text-[#6d6afe] text-center font-medium tracking-[-0.3px] 767px:fixed 767px:bottom-[101px] 767px:left-[50%] 767px:[transform:translate(-50%,-50%)] 767px:z-[10] 767px:rounded-[20px] 767px:border-[1px] 767px:border-solid 767px:border-[#6d6afe] 767px:bg-[#6d6afe] 767px:text-[#e7effb] 767px:flex 767px:py-2 767px:px-6 767px:items-start 767px:gap-[10px]"
        onClick={() => onModal(MODAL_TYPE.ADD_FOLDER)}
      >
        <span>폴더 추가</span>
        <AddImage className="text-[#6d6afe] 767px:text-[#fff]" />
      </Link>
    </div>
  );
}

export default FolderButtonAll;
