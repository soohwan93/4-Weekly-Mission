"use client";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useSearchInput, {
  SearchListApiProps,
} from "@/util/hooks/useSearchInput";

import { getFolderListData } from "@/util/api";
import ModalPortal from "@/util/ModalPortal";
import Modal from "@/components/Modal";
import FolderButtonAll, {
  handleButtonListItemClick,
} from "@/components/FolderButtonAll";
import AddLinkInput from "@/components/AddLinkInput";
import SearchLinkInput from "@/components/SearchLinkInput";
import FolderTitle from "@/components/FolderTitle";
import FolderListItem from "@/components/FolderListItem";
import ModalShare from "@/components/ModalShare";
import ModalEdit from "@/components/ModalEdit";
import ModalDeleteFolder from "@/components/ModalDeleteFolder";
import ModalDeleteLink from "@/components/ModalDeleteLink";
import ModalAddFolder from "@/components/ModalAddFolder";
import { useUserData } from "@/util/ContextProvider";
import FolderButton from "@/components/FolderButton";
import { useRouter } from "next/navigation";

export interface FolderListApiItem extends SearchListApiProps {
  id: number;
  created_at: string;
  updated_at: string;
  image_source: string;
  folder_id: string;
}

export interface FolderListProps {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { count: number };
  name: string;
  user_id: number;
}

export interface ModalProps extends OnModalProps {
  children: ReactNode;
}

export interface OnModalProps {
  onModal: (type?: string, link?: string) => void;
}

const Folder = ({ params }: { params: { folderId: string } }) => {
  const { user, folders, isFolderPending } = useUserData(true);
  const router = useRouter();

  const folderTitleName = folders?.filter(
    (folder) => folder.id === Number(params.folderId)
  )[0]?.name;

  const footerTarget = useRef<HTMLDivElement>(null);
  const [folderListItem, setFolderListItem] = useState<FolderListApiItem[]>([]);
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<FolderListApiItem>(folderListItem);
  const [linkUrl, setLinkUrl] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isFolderListPending, setIsFolderListPending] = useState(true);
  const handleButtonListItemClick: handleButtonListItemClick = useCallback(
    async (id) => {
      setIsFolderListPending(true);
      const result = await getFolderListData(id);

      if (!result) return;

      const data = result.data?.folder;
      setFolderListItem(data);
      setIsFolderListPending(false);
    },
    []
  );

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);
    type && setModalType(type);
    link && setLinkUrl(link);
  };

  useEffect(() => {
    handleButtonListItemClick(Number(params.folderId));
  }, [handleButtonListItemClick]);

  return (
    <>
      <div className="flex flex-col items-center">
        <AddLinkInput footerTarget={footerTarget} />
        <div className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:px-8">
          <SearchLinkInput
            closeButtonRef={closeButtonRef}
            handleCloseClick={handleCloseClick}
            handleInputChange={handleInputChange}
            handleInputClick={handleInputClick}
            inputValue={inputValue}
            isFocus={isFocus}
          />

          {folders.length === 0 ? (
            <div>저장된 폴더가 없습니다</div>
          ) : (
            <>
              {folders.length > 0 && (
                <>
                  <FolderButton
                    folderList={folders}
                    clickedButtonId={Number(params.folderId)}
                    onModal={handleModal}
                  />
                  <FolderTitle
                    folderId={Number(params.folderId)}
                    onModal={handleModal}
                  />
                  <FolderListItem
                    filterdFolderListItem={filterdItem}
                    folderListItem={folderListItem}
                    onModal={handleModal}
                    value={inputValue}
                    isPending={isFolderListPending}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
      {isModal && (
        <ModalPortal>
          <Modal onModal={handleModal}>
            {modalType === "share" && (
              <ModalShare
                folderName={folderTitleName}
                userId={user?.id as number}
              />
            )}
            {modalType === "editFolder" && (
              <ModalEdit folderName={folderTitleName} />
            )}
            {modalType === "deleteFolder" && (
              <ModalDeleteFolder folderName={folderTitleName} />
            )}
            {modalType === "deleteLink" && (
              <ModalDeleteLink linkUrl={linkUrl} />
            )}
            {modalType === "addFolder" && <ModalAddFolder />}
          </Modal>
        </ModalPortal>
      )}
      <div ref={footerTarget} />
    </>
  );
};

export default Folder;
