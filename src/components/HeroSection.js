"use client";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";
import i18next from "@/i18n/client";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  useGsap();
  const { t } = useTranslation();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);
  const [lang, setLang] = useState(i18next.language || "en");

  const slideRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setSmallMobile(window.innerWidth < 641);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    slideRefs.current.forEach((slide, index) => {
      gsap.set(slide, {
        opacity: index === currentSlide ? 1 : 0,
        visibility: index === currentSlide ? "visible" : "hidden",
      });
    });
  }, [currentSlide]);

  useEffect(() => {
    // Try to sync language from localStorage or i18next
    const savedLang =
      localStorage.getItem("language") || i18next.language || "en";

    setLang(savedLang);
    i18next.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLang(lng);
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
      localStorage.setItem("language", lng);
    };
    i18next.on("languageChanged", handleLanguageChange);
    return () => i18next.off("languageChanged", handleLanguageChange);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: t("jumpIntoTheVerse"),
      subtitle: "",
      description: t("boundlessWorldDesciption"),
      imageDesktop: "/assets/images/hero-1.png",
      imageMobile: "/assets/images/hero-1-mobile.png",
      cta: t("downloadText"),
      ctaSecondary: null,
    },
    {
      id: 2,
      title: t("huntOrBeHunted"),
      subtitle: "ROUND3",
      description: t("round3Description"),
      imageDesktop: "/assets/images/hero-2.png",
      imageMobile: "/assets/images/hero-2-mobile.png",
      cta: t("downloadText"),
      ctaSecondary: t("moreInfo"),
    },
    {
      id: 3,
      title: t("thinkFastLaughHarder"),
      subtitle: "ZERO IQ",
      description: t("zeroIqDescription"),
      imageDesktop: "/assets/images/hero-3.png",
      imageMobile: "/assets/images/hero-3-mobile.png",
      cta: t("downloadText"),
      ctaSecondary: t("moreInfo"),
    },
    {
      id: 4,
      title: t("noMercyNoEscape"),
      subtitle: "ROUND3",
      description: t("round3AlphaDescription"),
      imageDesktop: "/assets/images/hero-4.png",
      imageMobile: "/assets/images/hero-4-mobile.png",
      cta: t("downloadText"),
      ctaSecondary: t("moreInfo"),
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Keep your GSAP transition effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, index) => {
        gsap.set(slide, {
          opacity: index === currentSlide ? 1 : 0,
          visibility: index === currentSlide ? "visible" : "hidden",
        });
      });

      gsap.to(slideRefs.current, {
        opacity: (i) => (i === currentSlide ? 1 : 0),
        visibility: (i) => (i === currentSlide ? "visible" : "hidden"),
        duration: 0.8,
        ease: "power3.out",
        stagger: 0,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[1080px] md:h-[900px] sm:h-[750px] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        background:
          'url("assets/images/bg2.png") no-repeat center center fixed, url("assets/images/Bees1.png") no-repeat center center fixed',
        backgroundSize: "cover, cover",
      }}
    >
      {heroSlides.map((slide, index) => {
        const bgImage = isMobile ? slide.imageMobile : slide.imageDesktop;

        return (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === 0 ? "opacity-100" : "opacity-0"
            }`}
            style={{ visibility: index === 0 ? "visible" : "hidden" }}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-no-repeat bg-cover ${
                lang === "ar" ? "[transform:scaleX(-1)]" : ""
              } ${
                smallMobile
                  ? "bg-[position:center_top_20%]"
                  : isMobile
                  ? ""
                  : "bg-center"
              }`}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Content */}
            <div
              className={`relative z-[10] mx-auto lg:mt-24 mt-32 px-6 sm:px-8 lg:px-10 h-full flex items-center 
                ${lang === "ar" ? "justify-between" : "justify-start"}
              `}
            >
              <div
                className={`max-w-2xl relative w-full mx-auto lg:mx-0 ${
                  lang === "ar"
                    ? "!text-center lg:!text-right"
                    : "!text-center lg:!text-left"
                }`}
              >
                {/* Subtitle */}
                <div
                  className={`absolute -top-20 ${
                    lang === "ar" ? "right-0" : "left-0"
                  } h-[60px] items-center hidden lg:flex ${
                    slide.subtitle
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {slide.subtitle === "ROUND3" ? (
                    <Image
                      src={
                        lang === "ar"
                          ? "/assets/images/round3-ar.png"
                          : "/assets/images/round3-en.png"
                      }
                      alt="Round3"
                      width={160}
                      height={60}
                      className="object-contain"
                    />
                  ) : slide.subtitle === "ZERO IQ" ? (
                    <Image
                      src="/assets/images/zeroiq-logo.png"
                      alt="Zero IQ"
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  ) : null}
                </div>

                {/* Title */}
                <h1
                  className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
                    font-extrabold italic text-white leading-tight mb-6
                  "
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className="
                    text-white/90 text-sm sm:text-base md:text-lg 
                    max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed
                  "
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className="
                    flex flex-col xs:flex-col sm:flex-row md:flex-row lg:flex-row  
                    items-center lg:items-start justify-center lg:justify-start gap-4
                  "
                >
                  <button
                    className={`
                      inline-flex items-center justify-center gap-2 
                      px-6 py-4 border border-white bg-blue-600 text-white 
                      font-semibold hover:bg-blue-700 transition-colors cursor-pointer rounded-full
                      ${
                        slide.ctaSecondary
                          ? "w-auto"
                          : "w-full sm:w-[80%] lg:w-auto"
                      }
                    `}
                  >
                    {slide.cta}
                    <span className="hidden lg:flex items-center gap-2">
                      <Image
                        src="assets/images/apple.svg"
                        alt="Apple"
                        className="w-4 h-4"
                        width={4}
                        height={4}
                      />
                      <Image
                        src="assets/images/windows.svg"
                        alt="Windows"
                        className="w-4 h-4"
                        width={4}
                        height={4}
                      />
                    </span>
                  </button>

                  {slide.ctaSecondary && (
                    <a
                      href={
                        slide.subtitle === "ROUND3"
                          ? "https://www.zoaverse.com/round3/"
                          : slide.subtitle === "ZERO IQ"
                          ? "https://www.zoaverse.com/zero-iq/"
                          : ""
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex gap-2 items-center justify-center 
                        px-6 py-4 border border-white text-white font-semibold 
                        rounded-full cursor-pointer hover:bg-white/20
                      "
                    >
                      {slide.ctaSecondary}
                      <Image
                        src="assets/images/arrowLeft.svg"
                        alt="arrowLeft"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          lang === "ar" ? "scale-x-[-1]" : ""
                        }`}
                        width={4}
                        height={4}
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Dot Navigation */}
              <div
                className={`absolute ${
                  lang === "ar" ? "left-10" : "right-10"
                } top-[68%] -translate-y-1/2 hidden lg:flex items-center gap-3 z-20`}
              >
                {heroSlides.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => goToSlide(dotIndex)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      dotIndex === currentSlide
                        ? "bg-white scale-110"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
