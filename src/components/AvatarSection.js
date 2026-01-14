"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AvatarSection() {
  const rootRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(".info-card.left", {
          rotation: isRTL ? 12 : -12,
          xPercent: isRTL ? 10 : -10,
          yPercent: 15,
        });
        gsap.set(".info-card.right", {
          rotation: isRTL ? -12 : 12,
          xPercent: isRTL ? -10 : 10,
          yPercent: 15,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(".info-card.left, .info-card.right", {
          rotation: 0,
          xPercent: 0,
          yPercent: 0,
        });
      });

      gsap.from(".center-avatar", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".floating-companion", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".identity-text", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".info-card", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, rootRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [isRTL, i18n.language]);

  return (
    <section className="relative bg-black px-4 py-24 sm:py-28 md:py-32 overflow-visible">
      <div className="mx-auto px-2 md:px-6 lg:px-10">
        {/* Inner box: matches News Section width/padding behavior but keeps your gradient */}
        <div
          ref={rootRef}
          id="identity"
          className="rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-start w-full mx-auto overflow-visible relative"
          style={{
            // keep the avatar gradient background — applied to this inner box
            background: "linear-gradient(180deg, #a6a5a5 0%, #f1f1f1 38.9%)",
          }}
        >
          {/* Center avatar (kept the same) */}
          <div className="center-avatar relative w-full flex justify-center z-20 -mt-24 sm:-mt-28 md:-mt-36">
            <div className="relative w-[95%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] z-10 mx-auto">
              <div className="relative w-full">
                <video
                  src="/assets/images/Video3.mp4"
                  alt="Main Avatar"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl object-contain w-full h-auto z-10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white via-white/50 to-transparent opacity-60 z-[20]" />
              </div>
            </div>

            {/* Floating companions */}
            <div className="absolute top-[-4%] right-[-8%] sm:right-[16%] md:right-[10%] floating-companion w-32 h-32 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-66 lg:h-66 z-[30]">
              <Image
                src="/assets/images/companion-2.png"
                alt="Floating Companion Right"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute top-[80%] left-[8%] sm:left-[12%] md:left-[17%] floating-companion w-28 h-28 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-52 lg:h-52 z-[30]">
              <Image
                src="/assets/images/companion-1.png"
                alt="Floating Companion Left"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="identity-text mt-12 text-center mx-6 z-10 w-[90%] max-w-[580px] h-auto">
            <p className="font-montserrat font-medium text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[100%] tracking-tight text-center uppercase text-[#1E1E1E]">
              {t("expressYourUnique")}
            </p>

            <p className="font-montserrat font-extrabold text-[30px] sm:text-[64px] md:text-[80px] lg:text-[86px] leading-[96px] tracking-wide text-center uppercase text-[#1E1E1E] mt-2 mb-4 md:mt-6 md:mb-8 lg:mt-6 lg:mb-8 ltr:italic rtl:!not-italic">
              {t("identity")}
            </p>

            <p className="font-montserrat font-normal text-sm sm:text-base md:text-lg text-center text-[#1E1E1E] mx-auto leading-tight">
              {t("avatarDescription")}
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              relative mt-16 sm:mt-20 w-full z-10 flex flex-col 
              lg:flex-row lg:justify-between lg:items-end items-center 
              gap-8 sm:gap-10 px-4 overflow-visible
              xl:max-w-[95%] xl:px-0
            "
          >
            {/* Left Card */}
            <div
              className={`
                info-card left relative flex justify-center scale-95 sm:scale-100 
                w-full sm:w-[80%] md:w-[70%] lg:w-[46%] xl:w-[44%] 
                overflow-visible
                xl:w-[42%] 2xl:absolute 
                ${isRTL ? "2xl:right-0 mr-[-50px]" : "2xl:left-0 ml-[-50px]"} 
                2xl:bottom-0
                overlap-group-2
              `}
            >
              <div>
                <div className="rectangle"></div>
                <div className="rectangle-2"></div>
                <div className="div-2">
                  <div className="text-wrapper">{t("personalized")}</div>
                  <p className="p">{t("personalizedDesc")}</p>
                </div>
                <div className="ellipse"></div>
                <Image
                  className="vector s1"
                  src="/assets/images/Vector.png"
                  alt="Personalized Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            {/* Right Card */}
            <div
              className={`
              info-card right relative flex justify-center scale-95 sm:scale-100 
              w-full sm:w-[80%] md:w-[70%] lg:w-[46%] xl:w-[44%] 
              overflow-visible
              xl:w-[42%] 2xl:absolute 
              ${isRTL ? "2xl:left-0 ml-[-50px]" : "2xl:right-0 mr-[-50px]"} 
              2xl:bottom-0
              overlap-group-3
            `}
            >
              <div>
                <div className="rectangle-3"></div>
                <div className="rectangle-2c"></div>
                <div className="div-2">
                  <div className="text-wrapper">{t("companions")}</div>
                  <p className="p4">{t("companionsDescri")}</p>
                </div>
                <div className="ellipse"></div>
                <Image
                  className="vector"
                  src="/assets/images/smile-circle-svgrepo-com 1.png"
                  alt="Companions Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          {/* Decorative Circle Images (kept same positions) */}
          <div className="absolute top-[8%] left-[5%] w-16 h-16 z-[5] opacity-90">
            <Image
              src="/assets/images/Asset 10@4x 1.png"
              alt="Yellow Circle"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-[18%] right-[8%] w-12 h-12 z-[5] opacity-90">
            <Image
              src="/assets/images/Asset 8@4x 1.png"
              alt="Purple Circle 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-[10%] left-[30%] w-8 h-8 z-[5] opacity-90">
            <Image
              src="/assets/images/Asset 8@4x 1.png"
              alt="Purple Circle 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
