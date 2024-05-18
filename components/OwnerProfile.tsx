import React from "react";
import OwnerProfileSkeleton from "./OwnerProfileSkeleton";
interface OwnerProfileProps {
  folderData: any;
  userById: any;
  isPending: any;
}
const OwnerProfile = ({
  folderData,
  userById,
  isPending,
}: OwnerProfileProps) => {
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
