import closeImg from "@/public/modal-close.png";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const ModalContentsWrapper = ({ children, onClick }: Props) => {
  return (
    <div className="flex items-center flex-col p-10 gap-[25px]">
      <img
        className="absolute right-[10px] top-[10px] w-[25px] h-[25px] hover:cursor-pointer"
        onClick={onClick}
        src={closeImg.src}
        alt="modal-close"
      />
      {children}
    </div>
  );
};
