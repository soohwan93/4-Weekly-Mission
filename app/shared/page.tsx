"use client";
import { useEffect, useState } from "react";
import React from "react";
import useSearchInput from "@/util/hooks/useSearchInput";
import { LINKS_INITIAL_DATA } from "@/util/staticValue";
import { getSharedFolderSample } from "@/util/api";
import closeImg from "@/public/modal-close.png";
import LinkContainer from "../../components/LinkContainer";
import SearchLinkInput from "../../components/SearchLinkInput";

export interface FolderApiData {
  count: number;
  id: number;
  links: LinksApiData[];
  name: string;
  owner: OwnerApiData;
}

export interface LinksApiData {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

interface OwnerApiData {
  id: number;
  name: string;
  profileImageSource: string;
}

const Shared = () => {
  const [ownerProfile, setOwnerProfile] = useState({
    count: 0,
    id: 0,
    links: [LINKS_INITIAL_DATA],
    name: "",
    owner: { id: 0, name: "", profileImageSource: "" },
  });
  const { links, name, owner } = ownerProfile;

  const {
    filterdItem,
    handleCloseClick,
    handleInputChange,
    handleInputClick,
    inputValue,
    isFocus,
    closeButtonRef,
  } = useSearchInput<LinksApiData>(ownerProfile.links);
  const itemstoRender = inputValue ? filterdItem : links;
  const hasItemsToRender = itemstoRender?.length;

  const handleSharedUserFolder = async () => {
    const result = await getSharedFolderSample();
    if (!result) return;

    const data = result.folder;
    setOwnerProfile(data);
  };

  useEffect(() => {
    handleSharedUserFolder();
  }, []);

  return (
    <>
      {ownerProfile && (
        <div className="flex flex-col items-center">
          <section className="flex flex-col items-center gap-[30px] py-[60px] w-full bg-light-blue">
            <div className="flex flex-col items-center">
              <img
                className="w-[150px] h-[150px]"
                src={owner.profileImageSource}
                alt="ownerImage"
              />
              <span>{owner.name}</span>
            </div>
            <span className="text-[40px] font-bold">{name}</span>
          </section>

          <div className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:py-10 1124px:px-8">
            <SearchLinkInput
              closeButtonRef={closeButtonRef}
              handleCloseClick={handleCloseClick}
              handleInputChange={handleInputChange}
              handleInputClick={handleInputClick}
              inputValue={inputValue}
              isFocus={isFocus}
            />
            {hasItemsToRender > 0 ? (
              <div className="grid grid-cols-link-container gap-5 justify-center w-full">
                {itemstoRender.map((item: LinksApiData) => (
                  <LinkContainer item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <div style={{ paddingBottom: `50px` }}>
                저장된 링크가 없습니다
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Shared;
