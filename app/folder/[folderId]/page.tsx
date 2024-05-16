"use client";
import React, { ReactNode, useRef, useState } from "react";
import useSearchInput, {
  SearchListApiProps,
} from "@/util/hooks/useSearchInput";

import { getFolderListData } from "@/util/api";
import ModalPortal from "@/util/ModalPortal";
import Modal from "@/components/Modal";
import AddLinkInput from "@/components/AddLinkInput";
import SearchLinkInput from "@/components/SearchLinkInput";
import FolderTitle from "@/components/FolderTitle";
import FolderListItem from "@/components/FolderListItem";
import ModalShare from "@/components/ModalShare";
import ModalEdit from "@/components/ModalEdit";
import ModalDeleteFolder from "@/components/ModalDeleteFolder";
import ModalDeleteLink from "@/components/ModalDeleteLink";
import ModalAddFolder from "@/components/ModalAddFolder";
import type { Folders } from "@/util/contexts/UserDataProvider";
import FolderButton from "@/components/FolderButton";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/staticValue";
import { useFolderQuery } from "@/util/hooks/useFolderQuery";

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
  const { data: folders } = useFolderQuery();

  const { data: selectedFolderData, isPending: isSelectedFolderPending } =
    useQuery({
      queryKey: [QUERY_KEY.FOLDER_LINK_LIST, params.folderId],
      queryFn: () => getFolderListData(Number(params.folderId)),
    });
  const folderTitleName = folders?.filter(
    (folder: Folders) => folder.id === Number(params.folderId)
  )[0]?.name;

  const footerTarget = useRef<HTMLDivElement>(null);

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<FolderListApiItem>(selectedFolderData);
  const [linkUrl, setLinkUrl] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);
    type && setModalType(type);
    link && setLinkUrl(link);
  };

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

          {folders?.length === 0 ? (
            <div>저장된 폴더가 없습니다</div>
          ) : (
            <>
              {folders?.length > 0 && (
                <>
                  <FolderButton
                    folderList={folders}
                    clickedButtonId={Number(params.folderId)}
                    onModal={handleModal}
                  />
                  <FolderTitle
                    folders={folders}
                    folderId={Number(params.folderId)}
                    onModal={handleModal}
                  />
                  <FolderListItem
                    filterdFolderListItem={filterdItem}
                    folderListItem={selectedFolderData}
                    onModal={handleModal}
                    value={inputValue}
                    isPending={isSelectedFolderPending}
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
              <ModalShare folderName={folderTitleName} />
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
