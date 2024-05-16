"use client";

import type { Folders } from "@/util/contexts/UserDataProvider";
import { useFolderQuery } from "@/util/hooks/useFolderQuery";
import Link from "next/link";

const FolderList = () => {
  const { data: sharedFolderData } = useFolderQuery();
  const folders: Folders[] = sharedFolderData ?? undefined;
  return (
    <>
      <div className="flex flex-col items-center">
        {folders ? (
          <>
            <h1 className="text-5xl mt-20">폴더를 선택하세요</h1>
            <ul>
              {folders.map((item) => (
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
          </>
        ) : (
          <h1 className="mt-20 text-5xl [height:calc(100vh-460px)]">
            폴더가 없어요
          </h1>
        )}
      </div>
    </>
  );
};

export default FolderList;
