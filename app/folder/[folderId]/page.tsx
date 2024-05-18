"use client";
import React, { ReactNode, useRef, useState } from "react";
import useFilteredSearchResults from "@/util/hooks/useSearchInput";
import { getFolderListData } from "@/util/api";
import ModalPortal from "@/util/modal/ModalPortal";
import Modal from "@/components/Modal";
import AddLinkInput from "@/components/AddLinkInput";
import SearchLinkInput from "@/components/SearchLinkInput";
import FolderTitleWrapper from "@/components/FolderTitleArea";
import FolderListItem from "@/components/FolderListItem";
import FolderButton from "@/components/FolderButton";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/util/staticValue";
import { useFolderQuery } from "@/util/hooks/useFolderQuery";
import { useModal } from "@/util/hooks/useModal";
import FolderTitle from "@/components/FolderTitle";
import FolderFunctions from "@/components/FolderFunctions";
import { FolderType } from "../page";

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
  const folderTitleName: string = folders?.filter(
    (folder: FolderType) => folder.id === Number(params.folderId)
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
    setFilterdItem,
  } = useFilteredSearchResults(selectedFolderData);
  const { isModal, linkUrl, modalType, handleModal } = useModal();

  const folderTitie: string = folders?.filter(
    (folder: FolderType) => folder.id === Number(params.folderId)
  )[0].name;

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

          {folders?.length === 0 ? (
            <div>저장된 폴더가 없습니다</div>
          ) : (
            <>
              <FolderButton
                folderList={folders}
                clickedButtonId={Number(params.folderId)}
                onModal={handleModal}
              />
              <FolderTitleWrapper>
                <FolderTitle>{folderTitie}</FolderTitle>
                <FolderFunctions onModal={handleModal} />
              </FolderTitleWrapper>
              <FolderListItem
                filterdItem={filterdItem}
                onModal={handleModal}
                isPending={isSelectedFolderPending}
                setFilterdItem={setFilterdItem}
              />
            </>
          )}
        </div>
      </div>
      {isModal && (
        <ModalPortal>
          <Modal
            type={modalType}
            title={folderTitleName}
            linkUrl={linkUrl}
            onModal={handleModal}
          />
        </ModalPortal>
      )}
      <div ref={footerTarget} />
    </>
  );
};

export default Folder;
