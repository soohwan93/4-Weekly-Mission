function ModalAddFolder() {
  return (
    <>
      <div className="text-[20px] font-semibold">폴더 추가</div>
      <input
        className="h-[50px] w-full rounded-[10px] border-[0.1px] border-solid border-[#ccd5e3] pl-[10px] [transition-duration:0.2s] [transition-timing-function:ease-in-out] [transition-property:border-color] [outline:none] focus:border-[#6d6afe]"
        placeholder="내용 입력"
      />

      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe]">
        추가하기
      </button>
    </>
  );
}

export default ModalAddFolder;
