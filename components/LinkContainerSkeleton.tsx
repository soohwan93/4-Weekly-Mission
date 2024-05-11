function LinkContainerSkeleton() {
  return (
    <a
      className="animate-pulse w-full h-full overflow-hidden relative rounded-[20px] shadow-lg flex flex-col gap-[15px] no-underline text-inherit hover:bg-[#f0f6ff]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className=" bg-slate-200 w-[340px] h-[170px] relative" />
      <div className="flex flex-col gap-[15px]">
        <div className="flex flex-col w-full gap-[15px] pb-5 px-5">
          <div className="flex w-20 h-5 rounded-xl bg-slate-200 justify-between text-[13px]"></div>
          <div className="line-clamp-2 w-full rounded-xl bg-slate-200 whitespace-normal overflow-ellipsis h-11"></div>
          <div className=" w-20 h-5 rounded-xl bg-slate-200"></div>
        </div>
      </div>
    </a>
  );
}

export default LinkContainerSkeleton;
