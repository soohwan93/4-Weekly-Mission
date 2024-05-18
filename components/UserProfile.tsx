"use client";

import Link from "next/link";
import { removeAllCookieToken } from "@/util/cookieSetting";
import { useUserQuery } from "@/util/hooks/useUserQuery";

import { useRouter } from "next/navigation";

const UserProfile = () => {
  const { data: userData, isLoading } = useUserQuery();
  const router = useRouter();
  const handleLogout = () => {
    removeAllCookieToken();
    router.push("/signin");
  };
  const user = userData?.[0] || null;
  if (isLoading) return;
  if (!user)
    return (
      <Link
        className="flex w-32 px-5 py-3 justify-center items-center gap-2 rounded-lg font-semibold text-white text-lg no-underline shrink-0 bg-gradient-to-r from-0.12 from-[#6d6afe] to-101.84 to-[#6ae3fe] 1199px:mr-0 1199px:ml-auto 767px:w-20 767px:px-4 767px:py-[10px] 767px:text-sm"
        href="/signin"
      >
        로그인
      </Link>
    );
  return (
    <>
      {user?.image_source && (
        <div className="flex gap-5">
          <div className="flex gap-3 items-center">
            <img
              className="rounded-full "
              width={52}
              height={52}
              src={user.image_source}
              alt="userProfileImg"
            />
            <span className="767px:hidden">{user.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-32 px-5 py-3 justify-center items-center gap-2 rounded-lg font-semibold whitespace-nowrap text-white text-lg no-underline shrink-0 bg-gradient-to-r from-0.12 from-[#6d6afe] to-101.84 to-[#6ae3fe] 1199px:mr-0 1199px:ml-auto 767px:w-20 767px:px-4 767px:py-[10px] 767px:text-sm"
          >
            로그아웃
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
