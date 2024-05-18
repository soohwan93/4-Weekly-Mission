import { SyntheticEvent } from "react";

interface Props {
  children: React.ReactNode;
  onClick: (e: SyntheticEvent) => void;
}

export const ModalContainer = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="absolute w-[360px] bg-white rounded-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </div>
  );
};
