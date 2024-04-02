import { OwnerApiData } from "@/app/shared/page";
import React from "react";

interface OwnerProfileProps {
  name: string;
  owner: OwnerApiData;
}
const OwnerProfile = ({ name, owner }: OwnerProfileProps) => {
  return (
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
  );
};

export default OwnerProfile;
