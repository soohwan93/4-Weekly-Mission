export interface ShareImgDivProps {
  src: string;
  alt: string;
  text: string;
  handleClick?: () => void;
}

function ShareImgDiv({ src, alt, text, handleClick }: ShareImgDivProps) {
  return (
    <div
      className="flex flex-col items-center gap-[10px] [border:none] bg-inherit hover:cursor-pointer"
      onClick={handleClick}
    >
      <img src={src} alt={alt} />
      <span className="text-[13px] [line-height:15px]">{text}</span>
    </div>
  );
}

export default ShareImgDiv;
