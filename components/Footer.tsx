import { FOOTER_LOGO_DATA } from "@/util/staticValue";
import Link from "next/link";
import { Acme } from "next/font/google";
import SharedLinkLogo from "./SharedLinkLogo";
const acme = Acme({
  weight: "400",
  subsets: ["latin"],
});
function Footer() {
  return (
    <footer className={`flex flex-col items-center pt-32 767px:pt-[102.5px]`}>
      <div
        className={`flex h-40 px-24 pt-8 pb-16 flex-col items-center shrink-0 self-stretch bg-black 767px:px-8 767px:pt-8 767px:pb-16`}
      >
        <div
          className={`flex justify-between items-center self-stretch 767px:relative `}
        >
          <span
            className={`text-gray text-center text-base ${acme.style} 767px:absolute 767px:top-20`}
          >
            ©codeit - 2024
          </span>
          <span>
            <Link
              className={`text-privacy text-base font-normal 767px:text-sm 767px:font-semibold`}
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <span className={`px-7`}>
              <Link
                className={`text-privacy text-base font-normal 767px:text-sm 767px:font-semibold`}
                href="/faq"
              >
                FAQ
              </Link>
            </span>
          </span>
          <span className={`flex items-center gap-3`}>
            {FOOTER_LOGO_DATA.map(({ id, href, target, src, alt }) => (
              <SharedLinkLogo
                key={id}
                href={href}
                target={target}
                src={src}
                alt={alt}
              />
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
