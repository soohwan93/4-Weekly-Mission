function ModalEdit({ folderName }: { folderName: string }) {
  return (
    <>
      <div className="text-[20px] font-semibold">폴더 이름 변경</div>
      <input
        className="h-[50px] w-full rounded-[10px] border-[0.1px] border-solid border-[#ccd5e3] pl-[10px] [transition-duration:0.2s] [transition-timing-function:ease-in-out] [transition-property:border-color] [outline:none] focus:border-[#6d6afe]"
        placeholder={folderName}
      />
      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe]">
        변경하기
      </button>
    </>
  );
}

export default ModalEdit;
