function ModalDeleteLink({ linkUrl }: { linkUrl: string }) {
  return (
    <>
      <div className="text-[20px] font-semibold">링크 삭제</div>
      <span className="text-[14px] text-[#9fa6b2]">{linkUrl}</span>
      <button className="[border:none] w-full h-[50px] text-white font-semibold rounded-[10px] bg-[#ff5b56]">
        삭제하기
      </button>
    </>
  );
}

export default ModalDeleteLink;
