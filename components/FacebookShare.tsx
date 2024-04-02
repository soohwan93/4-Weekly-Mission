import { FacebookShareButton } from "react-share";
import ShareImgDiv from "./ShareImgDiv";

export interface ShareButtonProps {
  src: string;
  text: string;
  alt: string;
  shareUrl: string;
}

function FacebookShare({ src, alt, text, shareUrl }: ShareButtonProps) {
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <ShareImgDiv src={src} alt={alt} text={text} />
      </FacebookShareButton>
    </>
  );
}
export default FacebookShare;
