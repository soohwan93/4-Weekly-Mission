import facebookShareImg from "@/public/facebook-share.png";
import linkShareImg from "@/public/share-link.png";
import kakaoShareImg from "@/public/kakao-share.png";
import KaKaoShare from "./KaKaoShare";
import FacebookShare from "./FacebookShare";
import CopyLinkButton from "./CopyLink";

export interface ModalShareProps {
  folderName: string;
}

function ModalShare({ folderName }: ModalShareProps) {
  const currentUrl = window.location.href;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className="text-[20px] font-semibold">폴더 공유</div>
        <span className="text-[14px] text-[#9fa6b2]">{folderName}</span>
      </div>
      <div className="flex items-center justify-between gap-8">
        <KaKaoShare
          src={kakaoShareImg.src}
          alt="kakao-share"
          text="카카오톡"
          shareUrl={currentUrl}
        />
        <FacebookShare
          src={facebookShareImg.src}
          alt="facebook-share"
          text="페이스북"
          shareUrl={currentUrl}
        />
        <CopyLinkButton
          src={linkShareImg.src}
          alt="link-share"
          text="링크 복사"
          shareUrl={currentUrl}
        />
      </div>
    </>
  );
}

export default ModalShare;
