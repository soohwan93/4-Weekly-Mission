import { FolderType, OnModalProps } from "../app/folder/page";
import { useRouter } from "next/navigation";
import AddFolderButton from "./AddFolderButton";

export type handleButtonListItemClick = (id?: number) => void;

export interface FolderButtonProps extends OnModalProps {
  folderList: FolderType[];
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
        {folderList?.map((item: FolderType) => (
          <button
            className={`flex py-[6px] px-3 flex-col items-center transition-all ease-in-out bg-[#fff] text-[#000] [transition-duration:0.3s] [transition-delay:0s] rounded-[5px] border-[1px] border-solid border-[#6d6afe] h-[35px] whitespace-nowrap 767px:h-[30px] 767px:text-[14px] 767px:py-[4px] 767px:px-[10px]`}
            onClick={() => router.push(`/folder/${item.id}`)}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <AddFolderButton onModal={onModal} />
    </div>
  );
}

export default FolderButtonAll;
