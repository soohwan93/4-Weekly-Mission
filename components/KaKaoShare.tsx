import ShareImgDiv from "./ShareImgDiv";

declare global {
  interface Window {
    Kakao: any;
  }
}

export interface ShareProps {
  src: string;
  text: string;
  alt: string;
  shareUrl: string;
}

function KaKaoShare({ src, text, alt, shareUrl }: ShareProps) {
  window.Kakao.cleanup();
  window.Kakao.init("e9dde7fd5c20bdfdf100d47b1f8da3d3");

  const handleClickKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary |",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해보세요",
        imageUrl:
          "https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1",
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };
  return (
    <ShareImgDiv
      src={src}
      alt={alt}
      text={text}
      handleClick={handleClickKakaoShare}
    />
  );
}

export default KaKaoShare;
