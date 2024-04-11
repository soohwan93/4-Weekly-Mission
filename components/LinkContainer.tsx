import noImage from "@/public/no-image.png";

import { SharedLinksApi } from "./SharedMain";
import { formatDate, formatDateRelative } from "@/util/formatDate";
export interface LinkContainerProps {
  item: SharedLinksApi;
}
function LinkContainer({ item }: LinkContainerProps) {
  return (
    <a
      className="w-full h-full overflow-hidden relative rounded-[20px] shadow-lg flex flex-col gap-[15px] no-underline text-inherit hover:bg-[#f0f6ff]"
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
    >
      <div className="overflow-hidden w-[340px] h-[170px] relative">
        <img
          className="w-full h-[170px] object-cover [transition-property:transform] [transition-duration:0.5s] [transition-timing-function:ease] hover:scale-[1.3]"
          src={item.image_source || noImage.src}
          alt={String(item.title) || "no-Image"}
        />
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[15px] pb-5 px-5">
          <div className="flex justify-between text-[13px]">
            {formatDateRelative(item.created_at)}
          </div>
          <div className="line-clamp-2 whitespace-normal overflow-ellipsis h-11">
            {item.title}
          </div>
          <div className="text-sm">{formatDate(item.created_at)}</div>
        </div>
      </div>
    </a>
  );
}

export default LinkContainer;
