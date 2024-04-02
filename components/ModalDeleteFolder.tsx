function ModalDeleteFolder({ folderName }: { folderName: string }) {
  return (
    <>
      <div className="text-[20px] font-semibold">폴더 삭제</div>
      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-[#ff5b56]">
        삭제하기
      </button>
    </>
  );
}

export default ModalDeleteFolder;
