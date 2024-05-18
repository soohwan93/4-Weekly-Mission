import ModalAdd from "@/components/ModalAdd";
import ModalAddFolder from "@/components/ModalAddFolder";
import ModalDeleteFolder from "@/components/ModalDeleteFolder";
import ModalDeleteLink from "@/components/ModalDeleteLink";
import ModalEdit from "@/components/ModalEdit";
import ModalShare from "@/components/ModalShare";

export const ModalContent = (type: string, title: string, linkUrl: string) => {
  switch (type) {
    case "share":
      return <ModalShare folderName={title!} />;
    case "editFolder":
      return <ModalEdit folderName={title!} />;
    case "deleteFolder":
      return <ModalDeleteFolder folderName={title!} />;
    case "deleteLink":
      return <ModalDeleteLink linkUrl={linkUrl} />;
    case "addFolder":
      return <ModalAddFolder />;
    case "addLink":
      return <ModalAdd linkUrl={linkUrl} />;
    default:
      return null;
  }
};
