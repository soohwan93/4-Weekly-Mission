import React from "react";
import OwnerProfile from "@/components/OwnerProfile";
import SharedMain from "@/components/SharedMain";

const Shared = ({ params }: { params: { folderId: string } }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <OwnerProfile folderId={params.folderId} />
        <section className="flex flex-col items-center gap-10 py-10 max-w-[1060px] min-h-[1200px] w-full 1124px:py-10 1124px:px-8">
          <SharedMain />
        </section>
      </div>
    </>
  );
};

export default Shared;
