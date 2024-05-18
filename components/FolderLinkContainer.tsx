"use client";
import noImage from "@/public/no-image.png";
import { FolderListApiItem, OnModalProps } from "../app/folder/page";
import starOffImg from "@/public/star-off.png";
import starOnImg from "@/public/star-on.png";

import { MouseEvent, useState } from "react";
import { formatDate, formatDateRelative } from "@/util/formatDate";
import Kebab from "./Kebab";
import { putChangeFavorite } from "@/util/api";

export interface ListItemProps extends OnModalProps {
  item: FolderListApiItem;
}

function FolderLinkContainer({ item, onModal }: ListItemProps) {
  const [starred, setStarred] = useState(!!item.favorite);

  const handleStarClick = async (e: MouseEvent) => {
    e.preventDefault();
    const body = { favorite: !starred };
    await putChangeFavorite(item.id, body);
    setStarred(!starred);
  };

  return (
    <a
      className="w-full h-full relative rounded-[20px] shadow-lg flex flex-col gap-[15px] no-underline text-inherit bg-white hover:bg-[#f0f6ff]"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className=" overflow-hidden h-[170px] relative [border-top-left-radius:20px] [border-top-right-radius:20px]">
        <img
          className="w-full h-[170px] object-cover [transition-property:transform] [transition-duration:0.5s] [transition-timing-function:ease] hover:scale-[1.3]"
          src={item.image_source || noImage.src}
          alt={String(item.id) || "no-Image"}
        />
        {starred ? (
          <img
            className="absolute right-[15px] top-[15px]"
            onClick={(e) => handleStarClick(e)}
            src={starOnImg.src}
            alt="starOnImg"
          />
        ) : (
          <img
            className="absolute right-[15px] top-[15px]"
            onClick={(e) => handleStarClick(e)}
            src={starOffImg.src}
            alt="starOffImg"
          />
        )}
      </div>
      <div className="flex flex-col gap-[15px] pb-5 px-5">
        <div className="flex justify-between text-[13px]">
          {formatDateRelative(item.created_at)}
          <Kebab onModal={onModal} linkUrl={item.url} />
        </div>
        <div className="line-clamp-2 whitespace-normal overflow-ellipsis h-11">
          {item.title}
        </div>
        <div className="text-sm">{formatDate(item.created_at)}</div>
      </div>
    </a>
  );
}

export default FolderLinkContainer;
