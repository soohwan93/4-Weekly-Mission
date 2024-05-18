import { useState } from "react";

export const useModal = () => {
  const [linkUrl, setLinkUrl] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModal = (type?: string, link?: string) => {
    setIsModal(!isModal);
    type && setModalType(type);
    link && setLinkUrl(link);
  };
  return { isModal, linkUrl, modalType, handleModal, setIsModal };
};
