function ModalDeleteFolder({ folderName }: { folderName: string }) {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[20px] font-semibold">폴더 삭제</div>
        <span className="text-[14px] text-[#9fa6b2]">{folderName}</span>
      </div>
      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-[#ff5b56]">
        삭제하기
      </button>
    </>
  );
}

export default ModalDeleteFolder;
