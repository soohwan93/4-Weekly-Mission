import React from "react";

type FolderTitleProps = { children: React.ReactNode };

const FolderTitle = ({ children }: FolderTitleProps) => {
  return (
    <div className="text-[#000] w-full text-2xl font-semibold tracking-[-0.2px]">
      {children}
    </div>
  );
};

export default FolderTitle;
