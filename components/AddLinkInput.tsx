"use client";
import Modal from "./Modal";
import ModalPortal from "@/util/ModalPortal";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ModalAdd from "./ModalAdd";

const AddLinkInput = ({
  footerTarget,
}: {
  footerTarget: React.RefObject<HTMLDivElement>;
}) => {
  const target = useRef<HTMLDivElement>(null);
  const [isAddLinkInputHide, setIsAddLinkInputHide] = useState<boolean>(false);
  const [isAddLinkInputHideFooter, setIsAddLinkInputHideFooter] =
    useState<boolean>(false);
  const [isAdd, setIsAdd] = useState(false);
  const handleAddModal = () => setIsAdd(!isAdd);

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    setIsAddLinkInputHide: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        return setIsAddLinkInputHide(false);
      }
      if (entry.isIntersecting) {
        setIsAddLinkInputHide(false);
      } else {
        setIsAddLinkInputHide(true);
      }
    });
  };

  const observerOptions = useMemo(() => {
    if (typeof window !== "undefined") {
      return {
        threshold: 0,
        rootMargin: window.innerWidth <= 1124 ? "-102.5px" : "-128px",
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        handleIntersection(entries, setIsAddLinkInputHide);
      },
      { threshold: 0 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  useEffect(() => {
    const observerFooter = new IntersectionObserver((entries) => {
      handleIntersection(entries, setIsAddLinkInputHideFooter);
    }, observerOptions);

    if (footerTarget.current) {
      observerFooter.observe(footerTarget.current);
    }

    return () => {
      observerFooter.disconnect();
    };
  }, [footerTarget]);

  useEffect(() => {
    setIsAddLinkInputHide(false);
    setIsAddLinkInputHideFooter(false);
  }, []);
  return (
    <>
      <div
        className={`flex flex-col items-center bg-[#f0f6ff] pt-[60px] pb-[90px] w-full 1124px:py-10 1124px:px-8`}
      >
        <div ref={target} className="relative w-full max-w-[800px]">
          <input
            className="flex w-full flex-col items-start gap-2 relative rounded-[15px] border border-solid border-[#6d6afe] bg-[#fff] bg-[url('../public/link.png')] bg-no-repeat bg-left [background-position-x:20px] py-[22px] px-[45px] text-[15px] focus:outline-none placeholder:text-[#9fa6b2]"
            id="addLinkInput"
            type="text"
            placeholder="링크를 추가해 보세요"
          />
          <button
            className="flex w-20 py-[10px] justify-center items-center gap-[10px] rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe] [border:none] text-white absolute top-[15px] right-5 text-[14px]"
            onClick={handleAddModal}
          >
            추가하기
          </button>
        </div>
      </div>
      {isAdd && (
        <ModalPortal>
          <Modal onModal={handleAddModal}>
            <ModalAdd />
          </Modal>
        </ModalPortal>
      )}
      {isAddLinkInputHideFooter && isAddLinkInputHide && (
        <div
          className={`flex flex-col items-center bg-[#f0f6ff] py-[24px] w-full ${
            isAddLinkInputHide && `fixed bottom-0 py-[30px] z-10`
          } 1124px:py-10 1124px:px-8 767px:py-[6px]`}
        >
          <div className="relative w-full max-w-[800px]">
            <input
              className="flex w-full flex-col items-start gap-2 relative rounded-[15px] border border-solid border-[#6d6afe] bg-[#fff] bg-[url('../public/link.png')] bg-no-repeat bg-left [background-position-x:20px] py-[25px] px-[45px] text-[15px] focus:outline-none placeholder:text-[#9fa6b2]"
              id="addLinkInput"
              type="text"
              placeholder="링크를 추가해 보세요"
            />
            <button
              className="flex w-20 py-[10px] justify-center items-center gap-[10px] rounded-lg bg-gradient-to-r from-[0.12%] from-[#6d6afe] to-[101.84%] to-[#6ae3fe] [border:none] text-white absolute top-4 right-5 text-[14px]"
              onClick={handleAddModal}
            >
              추가하기
            </button>
          </div>

          {isAdd && (
            <ModalPortal>
              <Modal onModal={handleAddModal}>
                <ModalAdd />
              </Modal>
            </ModalPortal>
          )}
        </div>
      )}
    </>
  );
};

export default AddLinkInput;
