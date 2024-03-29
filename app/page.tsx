import Image from "next/image";
import Link from "next/link";
import contents_01_img from "@/public/contents-01-image.png";
import contents_02_img from "@/public/contents-02-image.png";
import contents_03_img from "@/public/contents-03-image.png";
import contents_04_img from "@/public/contents-04-image.png";
import contents_05_img from "@/public/contents-05-image.png";
export default function Home() {
  return (
    <main>
      <section className="flex pt-[70px] flex-col justify-end items-center gap-10 bg-light-blue 1199px:pt-10 767px:w-full 767px:gap-6 767px:h-auto 767px:px-8 767px:pt-7 767px:pb-0">
        <div className="flex flex-col text-center text-[64px] font-bold leading-[80px] overflow-hidden break-keep 1199px:py-0 1199px:w-[1060px] 1199px:h-60 1199px:px-[275px] 767px:text-3xl 767px:leading-10 767px:p-0 767px:w-[236px] 767px:h-32 767px:overflow-visible">
          <p>
            <span className="bg-gradient-to-r from-[17.28%] from-[#6d6afe] to-[74.98%] to-[#ff9f9f] text-transparent bg-clip-text">
              세상의 모든 정보
            </span>
            를<br />
          </p>
          <span>쉽게 저장하고 관리해 보세요</span>
        </div>
        <Link
          className="text-lg font-semibold  rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-login-to text-white flex w-[350px] py-4 px-5 justify-center items-center gap-10px 767px:w-[200px] 767px:px-4 767px:py-10px"
          href="/signup"
        >
          링크 추가하기
        </Link>
        <div className="relative w-[1200px] h-[590px] 1199px:w-[698px] 1199px:h-[343px] 767px:w-calc-c1-img 767px:h-calc-c1-img">
          <Image
            src={contents_01_img}
            alt="contents_01_img"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="flex pt-[120px] px-0 pb-[50px] justify-center items-center z-[1] text-white 1199px:pt-20 767px:py-10 767px:px-[35px] 767px:relative">
        <div className="flex items-center gap-[157px] 1199px:gap-[51px] 767px:w-calc-com 767px:flex-col 767px:items-start 767px:gap-6">
          <div className="flex w-min flex-col items-start gap-10px text-5xl font-bold tracking-[-0.3px] text-black break-keep 767px:text-2xl 767px:w-auto">
            <div>
              <span className="bg-gradient-to-r from-[1.72%] from-[#fe8a8a] to-[74.97%] to-[#a4ceff] text-transparent bg-clip-text 767px:text-2xl">
                원하는&nbsp;링크
              </span>
              를 저장하세요
            </div>
            <div className="text-contents-p font-normal text-base tracking-normal 767px:absolute 767px:left-[35px] 767px:right-[35px] 767px:bottom-[-24px] 767px:text-[15px] 767px:w-calc-c1-img">
              <div>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
                싶은 모든 것을 한 공간에 저장하세요.
              </div>
            </div>
          </div>
          <div className="relative w-[550px] h-[450px] 1199px:w-[385px] 1199px:h-[315px] 767px:w-calc-com 767px:h-calc-com-img">
            <Image
              src={contents_02_img}
              alt="contents_02_img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex py-[50px] justify-center items-center z-1 text-white 767px:pt-[62.5px] 767px:pr-[35px] 767px:pb-10 767px:pl-[25px] 767px:relative">
        <div className="flex items-center gap-[157px] 1199px:gap-[51px] 767px:w-calc-com 767px:flex-col 767px:items-start 767px:gap-6 flex-row-reverse">
          <div className="flex w-min flex-col items-start gap-10px text-5xl font-bold tracking-[-0.3px] text-black break-keep 767px:text-2xl 767px:w-auto">
            <div>
              <div className="flex 767px:inline-block">
                링크를&nbsp;폴더로&nbsp;
              </div>
              <span className="bg-gradient-to-r from-[59.22%] from-[#6fbaff] to-[93.66%] to-[#ffd88b] text-transparent bg-clip-text tracking-[-0.3px] 767px:text-2xl">
                관리
              </span>
              하세요
            </div>
            <div className="text-contents-p font-normal text-base tracking-normal 767px:absolute 767px:left-[35px] 767px:right-[35px] 767px:bottom-[-24px] 767px:text-15px 767px:w-calc-c1-img">
              <div>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="relative w-[550px] h-[450px] 1199px:w-[385px] 1199px:h-[315px] 767px:w-calc-com 767px:h-calc-com-img">
            <Image
              src={contents_03_img}
              alt="contents_03_img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex py-[50px] justify-center items-center z-1 text-white 767px:pt-[62.5px] 767px:pr-[35px] 767px:pb-10 767px:pl-[25px] 767px:relative">
        <div className="flex items-center gap-[157px] 1199px:gap-[51px] 767px:w-calc-com 767px:flex-col 767px:items-start 767px:gap-6">
          <div className="flex w-min flex-col items-start gap-10px text-5xl font-bold tracking-[-0.3px] text-black break-keep 767px:text-2xl 767px:w-auto">
            <div>
              <div className="flex 767px:inline-block">
                저장한&nbsp;링크를&nbsp;
              </div>
              <span className="bg-gradient-to-r from-[19.76%] from-[#6d7ccd] to-[52.69%] to-landing-c4-to text-transparent bg-clip-text 767px:text-2xl">
                공유
              </span>
              해&nbsp;보세요
            </div>
            <div className="text-contents-p font-normal text-base tracking-normal 767px:absolute 767px:left-[35px] 767px:right-[35px] 767px:bottom-[-24px] 767px:text-15px 767px:w-calc-c1-img">
              <div>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                동료들에게 쉽고 빠르게 링크를 공유해 보세요.
              </div>
            </div>
          </div>
          <div className="relative w-[550px] h-[450px] 1199px:w-[385px] 1199px:h-[315px] 767px:w-calc-com 767px:h-calc-com-img">
            <Image
              src={contents_04_img}
              alt="contents_04_img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex py-[50px] justify-center items-center z-1 text-white 767px:pt-[62.5px] 767px:pr-[35px] 767px:pb-4 767px:pl-[25px] 767px:relative">
        <div className="flex items-center gap-[157px] 1199px:gap-[51px] 767px:w-calc-com 767px:flex-col 767px:items-start 767px:gap-6 flex-row-reverse">
          <div className="flex w-min flex-col items-start gap-10px text-5xl font-bold tracking-[-0.3px] text-black break-keep 767px:text-2xl 767px:w-auto">
            <div>
              <div className="flex 767px:inline-block">
                저장한&nbsp;링크를&nbsp;
              </div>
              <span className="bg-gradient-to-r from-[-9.84%] from-[#fe578f] to-[107.18%] to-[#68e8f9] text-transparent bg-clip-text 767px:text-2xl">
                검색
              </span>
              해&nbsp;보세요
            </div>
            <div className="text-contents-p font-normal text-base tracking-normal 767px:absolute 767px:left-[35px] 767px:right-[35px] 767px:bottom-[-24px] 767px:text-15px 767px:w-calc-c1-img">
              <div>중요한 정보들을 검색으로 쉽게 찾아보세요.</div>
            </div>
          </div>
          <div className="relative w-[550px] h-[450px] 1199px:w-[385px] 1199px:h-[315px] 767px:w-calc-com 767px:h-calc-com-img">
            <Image
              src={contents_05_img}
              alt="contents_05_img"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
