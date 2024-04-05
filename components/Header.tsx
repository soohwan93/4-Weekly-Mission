import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.svg";
import OptionalHeader from "./OptionalHeader";
import UserProfile from "./UserProfile";

function Header() {
  return (
    <OptionalHeader>
      <div className="flex justify-between items-center self-stretch shrink-0 1920px:w-[1520px] 1199px:w-[799px] 869px:w-full ">
        <Link href="/">
          <Image
            src={logoImg}
            alt="logoImg"
            className="767px:w-[88.67px] 767px:h-4"
          />
        </Link>
        <UserProfile />
      </div>
    </OptionalHeader>
  );
}

export default Header;
