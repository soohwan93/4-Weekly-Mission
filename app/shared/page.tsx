"use client";

import { useUserData } from "@/util/ContextProvider";
import Link from "next/link";

const FolderList = () => {
  const { folders } = useUserData(true);
  return (
    <>
      <div className="flex flex-col items-center h-[80vh]">
        {folders ? (
          <h1 className="text-5xl mt-20">폴더를 선택하세요</h1>
        ) : (
          <h1>폴더가 없어요</h1>
        )}
        <ul>
          {folders?.map((item) => (
            <Link
              key={item.id}
              className="text-3xl"
              href={`/shared/${item.id}`}
            >
              <li className="rounded-md py-8 px-5 hover:bg-light-blue">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FolderList;
