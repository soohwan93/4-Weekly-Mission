"use client";
import { getSharedUserById } from "@/util/api";
import { Folders } from "@/util/contexts/UserDataProvider";
import { useFolderByFolderIdQuery } from "@/util/hooks/useFolderQueryByFolderId";
import { useUserQuery } from "@/util/hooks/useUserQuery";
import { QUERY_KEY } from "@/util/staticValue";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import OwnerProfileSkeleton from "./OwnerProfileSkeleton";

const OwnerProfile = ({ folderId }: { folderId: string }) => {
  const { data: foldersByFolderId } = useFolderByFolderIdQuery(
    Number(folderId)
  );
  const { data: userData } = useUserQuery();
  const { data: userDataById, isPending } = useQuery({
    queryKey: [QUERY_KEY.USER_PROFILE_BY_ID],
    queryFn: () => getSharedUserById(user.id),
    enabled: !!userData,
    staleTime: 0,
  });
  const user = userData?.[0] ?? [];

  const userById = userDataById?.[0] ?? [];

  const folderData = foldersByFolderId?.filter(
    (item: Folders) => item.id === Number(folderId)
  )[0];

  if (!folderData || !userById || isPending) return <OwnerProfileSkeleton />;

  return (
    <section className="flex flex-col h-[396px] items-center gap-[30px] py-[60px] w-full bg-light-blue">
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[150px] h-[150px]"
          src={userById.image_source}
          alt="ownerImage"
        />
        <span>{userById.name}</span>
      </div>
      <span className="text-[40px] font-bold">{folderData.name}</span>
    </section>
  );
};

export default OwnerProfile;
