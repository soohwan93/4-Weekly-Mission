"use client";
import React, { ReactNode, useRef, useState } from "react";
import useSearchInput, {
  SearchListApiProps,
} from "@/util/hooks/useSearchInput";

import { getFolderListData } from "@/util/api";
import ModalPortal from "@/util/ModalPortal";
import Modal from "@/components/Modal";
import FolderButtonAll from "@/components/FolderButtonAll";
import AddLinkInput from "@/components/AddLinkInput";
import SearchLinkInput from "@/components/SearchLinkInput";
import FolderListItem from "@/components/FolderListItem";
import ModalDeleteLink from "@/components/ModalDeleteLink";
import ModalAddFolder from "@/components/ModalAddFolder";
import FolderTitleAll from "@/components/FolderTitleAll";
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

const FolderAll = () => {
  const { data: sharedFolderData, isPending: isSharedFolderPending } =
    useFolderQuery();

  const { data: allLinksData, isPending: allLinksPending } = useQuery({
    queryKey: [QUERY_KEY.FOLDER_ALL_LINK_LIST],
    queryFn: () => getFolderListData(),
    staleTime: 0,
  });

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<FolderListApiItem>(allLinksData);

  const footerTarget = useRef<HTMLDivElement>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);
    type && setModalType(type);
    link && setLinkUrl(link);
  };

  const folders = sharedFolderData ?? [];
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

          {!isSharedFolderPending && folders?.length === 0 ? (
            <div>저장된 폴더가 없습니다</div>
          ) : (
            <>
              {folders?.length > 0 && (
                <>
                  <FolderButtonAll folderList={folders} onModal={handleModal} />
                  <FolderTitleAll />
                  <FolderListItem
                    filterdFolderListItem={filterdItem}
                    folderListItem={allLinksData}
                    onModal={handleModal}
                    value={inputValue}
                    isPending={allLinksPending}
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

export default FolderAll;
