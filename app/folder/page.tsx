"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import useSearchInput, {
  SearchListApiProps,
} from "@/util/hooks/useSearchInput";
import { useUserProfile } from "@/util/ContextProvider";
import { ALL_LIST_BUTTON_ID, MODAL_TYPE } from "@/util/staticValue";
import { getFolderList, getFolderListData } from "@/util/api";
import ModalPortal from "@/util/ModalPortal";
import Modal from "@/app/components/Modal";
import FolderButton, {
  handleButtonListItemClick,
} from "../components/FolderButton";
import AddLinkInput from "../components/AddLinkInput";
import SearchLinkInput from "../components/SearchLinkInput";
import FolderTitle from "../components/FolderTitle";
import FolderListItem from "../components/FolderListItem";
import ModalShare from "../components/ModalShare";
import ModalEdit from "../components/ModalEdit";
import ModalDeleteFolder from "../components/ModalDeleteFolder";
import ModalDeleteLink from "../components/ModalDeleteLink";
import ModalAddFolder from "../components/ModalAddFolder";

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

const Folder = () => {
  const footerTarget = useRef<HTMLDivElement>(null);
  const [folderListItem, setFolderListItem] = useState<FolderListApiItem[]>([]);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);
  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<FolderListApiItem>(folderListItem);
  const userProfile = useUserProfile();
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [isSelectedAll, setIsSelectedAll] =
    useState<typeof ALL_LIST_BUTTON_ID>(ALL_LIST_BUTTON_ID);
  const [folderTitleName, setFolderTitleName] = useState<string>("");
  const [clickedButtonId, setClickedButtonId] = useState<number>(0);
  const handleButtonListItemClick: handleButtonListItemClick = async (
    id,
    name
  ) => {
    setClickedButtonId(id);
    setFolderTitleName(name);
    const result = await getFolderListData(id);
    setIsSelectedAll(ALL_LIST_BUTTON_ID);

    if (!result) return;

    const data = result.data;
    setFolderListItem(data);
  };

  const handleFolderList = async () => {
    const result = await getFolderList();
    if (!result) return;
    const data = result.data;
    setFolderList(data);
  };

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);
    type && setModalType(type);
    link && setLinkUrl(link);
  };

  useEffect(() => {
    handleFolderList();
    handleButtonListItemClick(0, "전체");
  }, []);

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
          {folderList?.length > 0 ? (
            <>
              <FolderButton
                handleButtonListItemClick={handleButtonListItemClick}
                folderList={folderList}
                clickedButtonId={clickedButtonId}
                onModal={handleModal}
              />
              <FolderTitle
                folderTitleName={folderTitleName}
                isSelectedAll={isSelectedAll}
                onModal={handleModal}
              />
              <FolderListItem
                filterdFolderListItem={filterdItem}
                folderListItem={folderListItem}
                onModal={handleModal}
                value={inputValue}
              />
            </>
          ) : (
            <div>저장된 폴더가 없습니다</div>
          )}
        </div>
      </div>
      {isModal && (
        <ModalPortal>
          <Modal onModal={handleModal}>
            {modalType === "share" && (
              <ModalShare
                folderId={clickedButtonId}
                folderName={folderTitleName}
                userId={userProfile?.id}
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
