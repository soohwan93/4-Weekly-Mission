import React from "react";

const OwnerProfileSkeleton = () => {
  return (
    <section className="flex animate-pulse flex-col h-[396px] items-center gap-[30px] py-[60px] w-full bg-light-blue">
      <div className="flex flex-col items-center gap-3 ">
        <div className="w-[150px] h-[150px] bg-slate-200" />
        <span className="w-12 h-6 rounded-xl bg-slate-200" />
      </div>
      <span className="w-[300px] h-[60px] rounded-xl bg-slate-200" />
    </section>
  );
};

export default OwnerProfileSkeleton;
