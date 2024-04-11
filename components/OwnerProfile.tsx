"use client";
import { useUserData } from "@/util/ContextProvider";
import React from "react";

const OwnerProfile = ({ folderId }: { folderId: string }) => {
  const { user, folders } = useUserData(true);
  const folderData = folders?.filter((item) => item.id === Number(folderId))[0];
  if (!folderData || !user) return;

  return (
    <section className="flex flex-col items-center gap-[30px] py-[60px] w-full bg-light-blue">
      <div className="flex flex-col items-center">
        <img
          className="w-[150px] h-[150px]"
          src={user.image_source}
          alt="ownerImage"
        />
        <span>{user.name}</span>
      </div>
      <span className="text-[40px] font-bold">{folderData.name}</span>
    </section>
  );
};

export default OwnerProfile;
