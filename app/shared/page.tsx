import { useEffect, useState } from "react";
import React from "react";
import useSearchInput from "@/util/hooks/useSearchInput";
import { LINKS_INITIAL_DATA } from "@/util/staticValue";
import { getSharedFolderSample } from "@/util/api";
import LinkContainer from "../../components/LinkContainer";
import SearchLinkInput from "../../components/SearchLinkInput";
import OwnerProfile from "@/components/OwnerProfile";
import SharedMain from "@/components/SharedMain";

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

export interface OwnerApiData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface OwnerProfileData {
  links: LinksApiData[];
  name: string;
  owner: OwnerApiData;
}

const Shared = async () => {
  const result = await getSharedFolderSample();
  if (!result) return;

  const ownerProfile = result.folder;

  const { links, name, owner }: OwnerProfileData = ownerProfile;

  if (!ownerProfile) return;
  return (
    <>
      <div className="flex flex-col items-center">
        <OwnerProfile name={name} owner={owner} />
        <section className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:py-10 1124px:px-8">
          <SharedMain links={links} />
        </section>
      </div>
    </>
  );
};

export default Shared;
