interface FolderTitleWrapperProps {
  children: React.ReactNode;
}
function FolderTitleWrapper({ children }: FolderTitleWrapperProps) {
  return (
    <div className="w-full flex items-center justify-between 390px:flex-col 390px:items-start 390px:gap-[10px]">
      {children}
    </div>
  );
}

export default FolderTitleWrapper;
