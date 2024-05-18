import stopPropagation from "@/util/stopPropagation";
import { ModalProps } from "../app/folder/page";
import { ModalContent } from "@/util/modal/ModalContent";
import { ModalBackground } from "@/util/modal/ModalBackground";
import { ModalContainer } from "@/util/modal/ModalContainer";
import { ModalContentsWrapper } from "@/util/modal/ModalContentsWrapper";

function Modal({ type, title, linkUrl, onModal }: ModalProps) {
  return (
    <>
      <ModalBackground onClick={() => onModal()}>
        <ModalContainer onClick={stopPropagation}>
          <ModalContentsWrapper onClick={() => onModal()}>
            {ModalContent(type, title!, linkUrl)}
          </ModalContentsWrapper>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}

export default Modal;
