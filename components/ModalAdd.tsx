"use client";
import { useState } from "react";
import checkImg from "@/public/check.png";
import { ADD_MODAL_ITEMS } from "@/util/staticValue";

function ModalAdd() {
  //refactor: number 타입으로 나중에 다시 api를 통해 받아야할 것으로 보임. 현재는 임시 데이터라 ADD_DIV_ITEMS에 uuid 적용
  const [clickedItem, setClickedItem] = useState<string>("");

  const handleAddDivClick = (id: string) => {
    setClickedItem(id);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[20px] font-semibold">폴더에 추가</div>
        <span className="text-sm text-[#9fa6b2]">링크 주소</span>
      </div>
      <div className="flex flex-col w-full">
        {ADD_MODAL_ITEMS.map(({ id, title, subTitle }) => (
          <div
            className={`flex items-center justify-center p-2 gap-2 rounded-lg hover:bg-[#f0f6ff] hover:cursor-pointer ${
              clickedItem === id && `text-[#6d6afe] bg-[#f0f6ff]`
            }`}
            key={id}
            onClick={() => handleAddDivClick(id)}
          >
            <span>{title}</span>
            <span className="text-sm text-[#9fa6b2]">{subTitle}</span>
            {clickedItem === id && (
              <span className="absolute right-[50px]">
                <img src={checkImg.src} alt="checked" />
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe]">
        추가하기
      </button>
    </>
  );
}

export default ModalAdd;
