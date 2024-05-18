interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const ModalBackground = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-full z-[100] fixed top-0 left-0 bg-black/40"
    >
      {children}
    </div>
  );
};
