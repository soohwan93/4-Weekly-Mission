import { OnModalProps } from "./Modal";
import AddImage from "./AddImage";
import Link from "next/link";
import { MODAL_TYPE } from "@/util/staticValue";
export interface FolderListProps {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { count: number };
  name: string;
  user_id: number;
}

export type handleButtonListItemClick = (id: number, name: string) => void;

export interface FolderButtonProps extends OnModalProps {
  handleButtonListItemClick: handleButtonListItemClick;
  folderList: FolderListProps[];
  clickedButtonId: number;
}
function FolderButton({
  handleButtonListItemClick,
  folderList,
  clickedButtonId,
  onModal,
}: FolderButtonProps) {
  return (
    <div className="flex items-center w-full">
      <div className="w-full flex items-center gap-2 flex-wrap">
        <button
          className={`flex py-[6px] px-3 flex-col items-center transition-all ease-in-out [transition-duration:0.3s] [transition-delay:0s] rounded-[5px] border-[1px] border-solid border-[#6d6afe] text-[#000] h-[35px] whitespace-nowrap 767px:h-[30px] 767px:text-[14px] 767px:py-[4px] 767px:px-[10px] ${
            clickedButtonId === 0
              ? `bg-[#6d6afe] text-[#fff]`
              : `bg-[#fff] text-[#000]`
          }`}
          key="0"
          onClick={() => handleButtonListItemClick(0, "전체")}
        >
          전체
        </button>
        {folderList?.map((item: FolderListProps) => (
          <button
            className={`flex py-[6px] px-3 flex-col items-center transition-all ease-in-out [transition-duration:0.3s] [transition-delay:0s] rounded-[5px] border-[1px] border-solid border-[#6d6afe] text-[#000] h-[35px] whitespace-nowrap 767px:h-[30px] 767px:text-[14px] 767px:py-[4px] 767px:px-[10px] ${
              item.id === clickedButtonId
                ? `bg-[#6d6afe] text-[#fff]`
                : `bg-[#fff] text-[#000]`
            }`}
            onClick={() => handleButtonListItemClick(item.id, item.name)}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Link
        href={"#"}
        className="flex gap-1 whitespace-nowrap items-center justify-center text-[#6d6afe] text-center font-medium tracking-[-0.3px] 767px:fixed 767px:bottom-[101px] 767px:left-[50%] 767px:[transform:translate(-50%,-50%)] 767px:z-[10] 767px:rounded-[20px] 767px:border-[1px] 767px:border-solid 767px:border-[#6d6afe] 767px:bg-[#6d6afe] 767px:text-[#e7effb] 767px:flex 767px:py-2 767px:px-6 767px:items-start 767px:gap-[10px]"
        onClick={() => onModal(MODAL_TYPE.addFolder)}
      >
        <span>폴더 추가</span>
        <AddImage className="text-[#6d6afe] 767px:text-[#fff]" />
      </Link>
    </div>
  );
}

export default FolderButton;
