"use client";
import Image from "next/image";
import React from "react";
import { useUserProfile } from "@/util/ContextProvider";
import Link from "next/link";

const UserProfile = () => {
  const userData = useUserProfile();
  return (
    <>
      {userData?.image_source ? (
        <div className="flex gap-1">
          <Image
            width={24}
            height={24}
            src={userData.image_source}
            alt="userProfileImg"
          />
          <span className="767px:hidden">{userData.email}</span>
        </div>
      ) : (
        <Link
          className="flex w-32 px-5 py-3 justify-center items-center gap-2 rounded-lg font-semibold text-white text-lg no-underline shrink-0 bg-gradient-to-r from-0.12 from-[#6d6afe] to-101.84 to-[#6ae3fe] 1199px:mr-0 1199px:ml-auto 767px:w-20 767px:px-4 767px:py-[10px] 767px:text-sm"
          href="/signin"
        >
          로그인
        </Link>
      )}
    </>
  );
};

export default UserProfile;
