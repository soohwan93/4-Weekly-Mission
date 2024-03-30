import stopPropagation from "@/util/stopPropagation";
import closeImg from "@/public/modal-close.png";
import { ReactNode } from "react";
export interface ModalProps extends OnModalProps {
  children: ReactNode;
}

export interface OnModalProps {
  onModal: (type?: string, link?: string) => void;
}

function Modal({ onModal, children }: ModalProps) {
  return (
    <>
      <div
        className="w-full h-full z-[100] fixed top-0 left-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, 0.4)`,
        }}
        onClick={() => onModal()}
      >
        <div
          className="absolute bg-white rounded-[10px]"
          style={{
            transform: `translate(-50%,-50%)`,
            top: `50%`,
            left: `50%`,
          }}
          onClick={stopPropagation}
        >
          <div className="flex [width:360px] items-center flex-col p-10 gap-[25px]">
            <img
              className="absolute right-[10px] top-[10px] w-[25px] h-[25px] hover:cursor-pointer"
              onClick={() => onModal()}
              src={closeImg.src}
              alt="modal-close"
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
