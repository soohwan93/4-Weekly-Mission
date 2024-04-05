import Image from "next/image";
import React from "react";
interface SharedLinkLogoProps {
  href: string;
  target: string;
  src: string;
  alt: string;
}
function SharedLinkLogo({ href, target, src, alt }: SharedLinkLogoProps) {
  return (
    <a className={`w-5 h-5 gap-3`} href={href} target={target}>
      <Image width={20} height={20} src={src} alt={alt} />
    </a>
  );
}

export default SharedLinkLogo;
