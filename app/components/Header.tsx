"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.svg";
import { useUserProfile } from "@/util/ContextProvider";

function Header() {
  const userData = useUserProfile();
  const pathName = usePathname();
  const isHeaderSticky = pathName !== "/folder";
  console.log(userData);
  return (
    <header
      className={`flex flex-col px-[200px] py-5 items-center self-stretch gap-2 z-10 bg-light-blue 1920px:w-full 1920px:px-calc-1 1920px:overflow-hidden 1199px:px-calc-2 869px:px-8 767px:py-[13px] ${
        isHeaderSticky ? "sticky top-0" : "static"
      }`}
    >
      <div className="flex justify-between items-center self-stretch shrink-0 1920px:w-[1520px] 1199px:w-[799px] 869px:w-full ">
        <Link href="/landing">
          <Image
            src={logoImg}
            alt="logoImg"
            className="767px:w-[88.67px] 767px:h-4"
          />
        </Link>
        {userData.image_source ? (
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
      </div>
    </header>
  );
}

export default Header;
