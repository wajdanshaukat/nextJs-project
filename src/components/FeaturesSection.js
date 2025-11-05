"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  useGsap();
  const rootRef = useRef(null);
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState("virtualSpaces");

  const tabs = [
    { key: "virtualSpaces", label: t("virtualSpaces") },
    { key: "store", label: t("store") },
    { key: "gamingHub", label: t("gamingHub") },
  ];

  const data = {
    virtualSpaces: [
      {
        path: "/assets/images/spaces-1.png",
        header: t("conferenceHeader"),
        description: t("conferenceDesc"),
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/spaces-2.png",
        header: t("podcastHeader"),
        description: t("podcastDesc"),
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/spaces-3.png",
        header: t("galleryHeader"),
        description: t("galleryDesc"),
        bgColor: "#97B3FF",
      },
      {
        path: "/assets/images/spaces-4.png",
        header: t("classroomHeader"),
        description: t("classroomDesc"),
        bgColor: "#E7BCFB",
      },
      {
        path: "/assets/images/spaces-5.png",
        header: t("lobbyHeader"),
        description: t("lobbyDesc"),
        bgColor: "#AEF2D6",
      },
    ],
    store: [
      {
        path: "/assets/images/store-1.png",
        header: t("gesturesHeader"),
        description: t("gesturesDesc"),
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/store-2.png",
        header: t("backDecoHeader"),
        description: t("backDecoDesc"),
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/store-3.png",
        header: t("companionsHeader"),
        description: t("companionsDesc"),
        bgColor: "#97B3FF",
      },
      {
        path: "/assets/images/store-4.png",
        header: t("headwearHeader"),
        description: t("headwearDesc"),
        bgColor: "#E7BCFB",
      },
    ],
    gamingHub: [
      {
        path: "/assets/images/gaming-1.png",
        header: t("round3AlphaHeader"),
        description: t("round3AlphaDesc"),
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/gaming-2.png",
        header: t("zeroIqHeader"),
        description: t("zeroIqDesc"),
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/gaming-3.png",
        header: t("round3QurtobaHeader"),
        description: t("round3QurtobaDesc"),
        bgColor: "#97B3FF",
      },
    ],
  };

  const handleNext = () => swiperRef.current?.slideNext();
  const handleBack = () => swiperRef.current?.slidePrev();

  // Animate cards on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-slide", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [activeTab, i18n.language]);

  return (
    <section
      ref={rootRef}
      className="relative z-10 lg:py-24 px-2 overflow-hidden bg-transparent h-full"
    >
      <div
        className={`mx-auto relative ${
          i18n.language === "ar" ? "lg:mr-12 mr-8" : "lg:ml-12 ml-8"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-regular px-4 rtl:text-right">
            {t("whyChoose")}
            <br />
            <span className="text-brand-200 text-[50px] sm:text-[70px] md:text-[100px] font-extrabold italic block leading-[1]">
              {t("zoaverse")}
            </span>
          </h2>

          {/* Tabs + Arrows */}
          <div
            className={`mt-6 flex flex-col sm:flex-row px-4 justify-between gap-4 ${
              i18n.language === "ar" ? "items-start" : "items-end"
            }`}
          >
            {/* Tabs row */}
            <div className="flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-xs uppercase tracking-wide border border-white px-4 py-2 cursor-pointer rounded-full transition-all flex-shrink-0 ${
                    activeTab === tab.key
                      ? "bg-white text-black font-semibold"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Arrow buttons row */}
            <div className="flex gap-4 mt-2 sm:mt-0 sm:justify-end ltr:mr-8 rtl:ml-8">
              <button
                onClick={handleBack}
                className="p-3 rounded-full bg-white hover:bg-white/20 transition cursor-pointer"
              >
                <IoIosArrowBack
                  className={`text-black text-2xl ${
                    i18n.language === "ar" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white hover:bg-white/20 transition cursor-pointer"
              >
                <IoIosArrowForward
                  className={`text-black text-2xl ${
                    i18n.language === "ar" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        {/* Swiper Carousel */}
        <Swiper
          key={i18n.language}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3.15}
          slidesPerGroup={1}
          loop={true}
          loopedSlides={data[activeTab]?.length}
          spaceBetween={35}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 15 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.15, spaceBetween: 30 },
            1024: { slidesPerView: 3.15, spaceBetween: 35 },
            1440: { slidesPerView: 4, spaceBetween: 40 },
            1920: { slidesPerView: 5, spaceBetween: 45 },
          }}
          className="!overflow-visible w-full"
        >
          {data[activeTab]?.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="text-black w-full max-w-[450px] flex flex-col gap-3 pb-3 p-1 rounded-[34px] h-full"
                style={{ background: card.bgColor }}
              >
                <div>
                  <Image
                    src={card.path}
                    alt=""
                    className="rounded-[34px] w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="px-3 flex flex-col gap-4">
                  <div className="font-semibold md:leading-[39px] sm:leading-[24px] leading-[20px] sm:text-[20px] text-[16px] md:text-[32px] rtl:text-right">
                    {card.header.toUpperCase()}
                  </div>
                  <div className="font-normal md:leading-[17px] sm:leading-[14px] sm:text-sm text-xs leading-normal md:text-base rtl:text-right">
                    {card.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
