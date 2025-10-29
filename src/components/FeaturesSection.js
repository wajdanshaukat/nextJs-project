"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  useGsap();
  const rootRef = useRef(null);
  const swiperRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Virtual Spaces");

  const tabs = ["Virtual Spaces", "Store", "Gaming Hub"];

  const data = {
    "Virtual Spaces": [
      {
        path: "/assets/images/spaces-1.png",
        header: "Conference",
        description:
          "Host professional events in a sleek, 3D auditorium designed for large audiences. Engage participants with live presentations, Q&A sessions, and multi-language support for an inclusive experience.",
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/spaces-2.png",
        header: "Podcast",
        description:
          "Bring your voice to life in an immersive studio environment. Turn traditional audio shows into interactive sessions with dynamic 3D settings, available on PC and coming soon to mobile.",
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/spaces-3.png",
        header: "Gallery",
        description:
          "Showcase art, products, or ideas in customizable 3D galleries. From corporate exhibitions to creative showcases, tailor your space to match your brand or vision.",
        bgColor: "#97B3FF",
      },
      {
        path: "/assets/images/spaces-4.png",
        header: "Classroom",
        description:
          "Transform learning into an interactive experience. Equipped with virtual whiteboards, collaboration tools, and real-time communication to make education engaging and accessible.",
        bgColor: "#E7BCFB",
      },
      {
        path: "/assets/images/spaces-5.png",
        header: "Lobby",
        description:
          "Your central hub for connection and networking. Meet, chat, and navigate easily in a visually stunning space designed for smooth onboarding and community building.",
        bgColor: "#AEF2D6",
      },
    ],
    Store: [
      {
        path: "/assets/images/store-1.png",
        header: "Gestures",
        description:
          "Express yourself with animated emotes and fun gestures. From celebratory moves to quirky actions, make your avatar truly yours.",
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/store-2.png",
        header: "Back Decoration",
        description:
          "Stand out with unique gear and accessories. Equip wings, shields, or futuristic gadgets to personalize your look and presence.",
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/store-3.png",
        header: "Companions",
        description:
          "Adopt a virtual sidekick to accompany you on your journey. Choose from a range of adorable or edgy companions that make every moment more fun.",
        bgColor: "#97B3FF",
      },
      {
        path: "/assets/images/store-4.png",
        header: "Headwear",
        description:
          "Top off your avatar with playful, stylish, or bold headgear. From lighthearted accessories to statement pieces, show off your personality.",
        bgColor: "#E7BCFB",
      },
    ],
    "Gaming Hub": [
      {
        path: "/assets/images/gaming-1.png",
        header: "Round3 - Alpha",
        description:
          "Enter a futuristic battlefield where robots clash with armored soldiers. A thrilling Prop & Hunt experience that blends strategy, survival, and high-tech combat.",
        bgColor: "#AEF2D6",
      },
      {
        path: "/assets/images/gaming-2.png",
        header: "Zero IQ",
        description:
          "Dive into the craziest trivia game show you’ll ever play. Two teams face bizarre, funny, and unpredictable questions in a competition full of laughs.",
        bgColor: "#6BD2D7",
      },
      {
        path: "/assets/images/gaming-3.png",
        header: "Round3 - Qurtoba",
        description:
          "A desert-inspired Prop & Hunt set in an Arabian city. Hide, hunt, and outwit your opponents in a richly detailed environment that brings heritage and action together.",
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
  }, [activeTab]);

  return (
    <section
      ref={rootRef}
      className="relative z-10 lg:py-24 overflow-hidden bg-transparent h-full"
    >
      <div className="mx-auto px-8 lg:px-10 relative">
        {/* Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-regular">
            Why Choose
            <br />
            <span className="text-brand-200 text-[50px] sm:text-[70px] md:text-[100px] font-extrabold italic block leading-[1]">
              ZOEVERSE
            </span>
          </h2>

          {/* Tabs + Arrows */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-end gap-4">
            {/* Tabs row */}
            <div className="flex gap-3 flex-nowrap overflow-x-auto sm:overflow-x-visible">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs uppercase tracking-wide border border-white px-4 py-2 rounded-full transition-all flex-shrink-0 ${
                    activeTab === tab
                      ? "bg-white text-black font-semibold"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Arrow buttons row */}
            <div className="flex gap-4 mt-2 sm:mt-0 sm:justify-end">
              <button
                onClick={handleBack}
                className="p-3 rounded-full bg-white hover:bg-white/20 transition"
              >
                <IoIosArrowBack className="text-black text-2xl" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white hover:bg-white/20 transition"
              >
                <IoIosArrowForward className="text-black text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3.15}
          slidesPerGroup={1}
          loop={true}
          spaceBetween={35}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 15 },
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.15, spaceBetween: 30 },
            1024: { slidesPerView: 3.15, spaceBetween: 35 },
          }}
          className="!overflow-hidden w-full"
        >
          {data[activeTab].map((card, index) => (
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
                    {card.header}
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

{
  /* <div className="grid md:grid-cols-3 gap-6">
  {cards.map((c, i) => (
    <div
      key={c.title}
      ref={(el) => (cardRefs.current[i] = el)}
      className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/0" />
      <div className="p-5">
        <div className="text-brand-200 text-sm font-semibold">{c.title}</div>
        <div className="mt-2 text-white/80 text-sm leading-relaxed">
          {c.desc}
        </div>
      </div>
    </div>
  ))}
</div>; */
}
