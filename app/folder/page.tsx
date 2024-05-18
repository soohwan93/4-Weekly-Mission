"use client";
import React, { useRef } from "react";
import useFilteredSearchResults from "@/util/hooks/useSearchInput";

import { getFolderData } from "@/util/api";
import ModalPortal from "@/util/modal/ModalPortal";
import Modal from "@/components/Modal";
import FolderButtonAll from "@/components/FolderButtonAll";
import AddLinkInput from "@/components/AddLinkInput";
import SearchLinkInput from "@/components/SearchLinkInput";
import FolderListItem from "@/components/FolderListItem";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/staticValue";
import { useFolderQuery } from "@/util/hooks/useFolderQuery";
import { useModal } from "@/util/hooks/useModal";
import FolderTitleWrapper from "@/components/FolderTitleArea";
import FolderTitle from "@/components/FolderTitle";

export interface FolderType {
  id: number;
  name: string;
  favorite: boolean;
  user_id: number;
  created_at: string;
}

export interface FolderListApiItem {
  id: number;
  created_at: string;
  image_source: string;
  favorite: boolean;
  url: string;
  description: string;
  title: string;
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
  type: string;
  title?: string;
  linkUrl: string;
}

export interface OnModalProps {
  onModal: (type?: string, link?: string) => void;
}

const FolderAll = () => {
  const { data: folders, isPending: isSharedFolderPending } = useFolderQuery();
  const { data: allLinksData, isPending: isAllLinksPending } = useQuery({
    queryKey: [QUERY_KEY.FOLDER_ALL_LINK_LIST],
    queryFn: getFolderData,
    staleTime: 0,
  });
  console.log(allLinksData);

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
    setFilterdItem,
  } = useFilteredSearchResults(allLinksData);

  const footerTarget = useRef<HTMLDivElement>(null);

  const { isModal, modalType, linkUrl, handleModal } = useModal();

  return (
    <>
      <div className="flex flex-col items-center">
        <AddLinkInput linkUrl={linkUrl} footerTarget={footerTarget} />
        <div className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:px-8">
          <SearchLinkInput
            closeButtonRef={closeButtonRef}
            onCloseClick={handleCloseClick}
            onInputChange={handleInputChange}
            onInputClick={handleInputClick}
            inputValue={inputValue}
            isFocus={isFocus}
          />

          {!isSharedFolderPending && folders?.length === 0 ? (
            <div>저장된 폴더가 없습니다</div>
          ) : (
            <>
              <FolderButtonAll folderList={folders} onModal={handleModal} />
              <FolderTitleWrapper>
                <FolderTitle>전체</FolderTitle>
              </FolderTitleWrapper>
              <FolderListItem
                filterdItem={filterdItem}
                onModal={handleModal}
                isPending={isAllLinksPending}
                setFilterdItem={setFilterdItem}
              />
            </>
          )}
        </div>
      </div>
      {isModal && (
        <ModalPortal>
          <Modal type={modalType} linkUrl={linkUrl} onModal={handleModal} />
        </ModalPortal>
      )}
      <div ref={footerTarget} />
    </>
  );
};

export default FolderAll;
