"use client";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";
import i18next from "@/i18n/client";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

export default function HeroSection() {
  useGsap();
  const { t } = useTranslation();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);
  const [showUnsupportedModal, setShowUnsupportedModal] = useState(false);
  const [lang, setLang] = useState(i18next.language || "en");
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

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

  // Auto-detect OS and handle download
  const handleAutoDownload = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    const isMac = /macintosh|mac os x|mac_powerpc/i.test(userAgent);
    const isWindows = /windows|win32|win64|wow64|winnt/i.test(userAgent);

    // Define your download URLs
    const macDownload =
      "https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg";

    const windowsDownload =
      "https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe";

    // Optional: trigger your tracking event before redirect
    if (typeof trackDownload === "function") trackDownload();

    // Choose correct link
    const downloadLink = isMac
      ? macDownload
      : isWindows
      ? windowsDownload
      : null;

    if (downloadLink) {
      setTimeout(() => {
        window.location.href = downloadLink;
      }, 300);
    } else {
      setShowUnsupportedModal(true);
    }
  };

  useEffect(() => {
    if (showUnsupportedModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showUnsupportedModal]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const closeModal = () => {
    const tl = gsap.timeline({
      onComplete: () => setShowUnsupportedModal(false),
    });
    tl.to(modalContentRef.current, {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    }).to(
      modalRef.current,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.inOut",
      },
      "-=0.2"
    );
  };

  useLayoutEffect(() => {
    if (showUnsupportedModal) {
      gsap.set(modalRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(modalContentRef.current, { scale: 0.8, y: 50, opacity: 0 });

      const tl = gsap.timeline();
      tl.to(modalRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
      }).to(
        modalContentRef.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
    }
  }, [showUnsupportedModal]);

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
        duration: 1.6, // slower fade
        ease: "power2.inOut",
        onUpdate: () => {
          slideRefs.current.forEach((slide, i) => {
            slide.style.visibility =
              gsap.getProperty(slide, "opacity") > 0.05 ? "visible" : "hidden";
          });
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[1000px] md:h-[900px] lg:h-[700px] xl:h-screen flex items-center overflow-hidden bg-cover bg-center"
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
                  : "bg-[position:center_80px]"
              }`}
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Content */}
            <div
              className={`relative z-[10] mx-auto lg:mt-24 mt-32 px-6 sm:px-8 lg:px-16 h-full flex items-center 
                ${lang === "ar" ? "justify-between" : "justify-start"}
              `}
            >
              <div
                className={`max-w-[900px] relative w-full mx-auto lg:mx-0 ${
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
                    text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] 
                    font-extrabold text-white leading-tight mb-6
                    whitespace-pre-line
                    ltr:italic rtl:!not-italic
                  "
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className="
                    text-white/90 text-sm sm:text-base md:text-lg 
                    max-w-[600px] mx-auto lg:mx-0 mb-8 leading-relaxed
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
                    onClick={handleAutoDownload}
                    className={`
                      inline-flex items-center justify-center gap-2 
                      px-6 py-4 border border-white bg-blue-600 text-white font-medium
                      text-[14px] hover:bg-blue-700 transition-colors cursor-pointer rounded-full
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
                        px-6 py-4 border border-white text-white text-[14px] 
                        font-medium rounded-full cursor-pointer hover:bg-white/20
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
                  lang === "ar" ? "left-16" : "right-16"
                } top-[75%] -translate-y-1/2 hidden lg:flex items-center gap-3 z-20`}
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
      {showUnsupportedModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none"
        >
          <div
            ref={modalContentRef}
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center relative scale-75 opacity-0"
          >
            {/* Close Button */}
            <button
              onClick={() => closeModal()}
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <IoClose size={14} />
            </button>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {t("unsupportedTitle")}
            </h1>
            <p className="text-gray-600 mb-6">{t("unsupportedDesc")}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                className="bg-transparent border-0 download-btn"
                href="https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof trackDownload === "function") trackDownload();
                  setTimeout(() => {
                    window.location.href =
                      "https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg";
                  }, 300);
                }}
              >
                <img
                  src="assets/images/mac.png"
                  className="w-[160px] hover:scale-105 transition-transform"
                  alt="Apple logo"
                />
              </a>

              <a
                className="bg-transparent border-0 download-btn"
                href="https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof trackDownload === "function") trackDownload();
                  setTimeout(() => {
                    window.location.href =
                      "https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe";
                  }, 300);
                }}
              >
                <img
                  src="assets/images/windows.png"
                  className="w-[160px] hover:scale-105 transition-transform"
                  alt="Windows logo"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
