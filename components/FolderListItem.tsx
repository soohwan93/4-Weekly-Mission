import { OnModalProps } from "../app/folder/page";
import FolderLinkConatiner from "./FolderLinkConatiner";

export interface FolderListItemProps extends OnModalProps {
  folderListItem: FolderListApiItem[];
  filterdFolderListItem: FolderListApiItem[];
  value: string;
}

export interface FolderListApiItem extends SearchListProps {
  id: number;
  created_at: string;
  updated_at: string;
  image_source: string;
  folder_id: string;
}

export interface SearchListProps {
  url: string;
  title: string;
  description: string;
}

function FolderListItem({
  folderListItem,
  onModal,
  filterdFolderListItem,
  value,
}: FolderListItemProps) {
  const itemstoRender = value ? filterdFolderListItem : folderListItem;
  const hasItemsToRender = itemstoRender?.length;

  return (
    <>
      {hasItemsToRender > 0 ? (
        <>
          <div className="grid grid-cols-link-container gap-5 justify-center w-full">
            {itemstoRender.map((item) => (
              <FolderLinkConatiner
                item={item}
                key={item.id}
                onModal={onModal}
              />
            ))}
          </div>
        </>
      ) : (
        <div style={{ paddingBottom: `200px` }}>저장된 링크가 없습니다</div>
      )}
    </>
  );
}

export default FolderListItem;
