"use client";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";

export default function HeroSection() {
  useGsap();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [smallMobile, setSmallMobile] = useState(false);

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

  const heroSlides = [
    {
      id: 1,
      title: "JUMP INTO THE VERSE",
      subtitle: "",
      description:
        "Discover the future of virtual experiences with Zoaverse - an immersive platform for events, shows, classes, and meetings in 3D interactive spaces. Engage, learn, and connect like never before.",
      imageDesktop: "/assets/images/hero-1.png",
      imageMobile: "/assets/images/hero-1-mobile.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: null,
    },
    {
      id: 2,
      title: "HUNT OR BE HUNTED",
      subtitle: "ROUND3",
      description:
        "Step into Round3 Qurtobah, a desert-themed Prop & Hunt adventure inspired by Arabian heritage. Hide, hunt, and outsmart your rivals in a setting full of tension and excitement.",
      imageDesktop: "/assets/images/hero-2.png",
      imageMobile: "/assets/images/hero-2-mobile.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
    },
    {
      id: 3,
      title: "THINK FAST, LAUGH HARDER",
      subtitle: "ZERO IQ",
      description:
        "Two teams go head-to-head answering unpredictable, hilarious, and sometimes downright silly questions. Think fast, laugh harder, and embrace the chaos.",
      imageDesktop: "/assets/images/hero-3.png",
      imageMobile: "/assets/images/hero-3-mobile.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
    },
    {
      id: 4,
      title: "NO MERCY, NO ESCAPE",
      subtitle: "ROUND3",
      description:
        "Enter Round3 Alpha, a futuristic Prop & Hunt clash where advanced robots face off against heavily armed soldiers. Tactics, technology, and survival collide in the ultimate showdown.",
      imageDesktop: "/assets/images/hero-4.png",
      imageMobile: "/assets/images/hero-4-mobile.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
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
                smallMobile
                  ? "bg-[position:center_top_20%]"
                  : isMobile
                  ? ""
                  : "bg-center"
              }`}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/20"></div>
            </div>

            {/* Content */}
            <div
              className="
                relative z-[10] mx-auto lg:mt-24 mt-32 px-6 sm:px-8 lg:px-10 h-full 
                flex items-center justify-center lg:justify-start
              "
            >
              <div
                className="
                  max-w-2xl relative w-full 
                  !text-center lg:!text-left
                  mx-auto lg:mx-0
                 "
              >
                {/* Subtitle */}
                <div
                  className={`absolute -top-20 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 h-[60px] items-center hidden lg:flex ${
                    slide.subtitle
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {slide.subtitle === "ROUND3" ? (
                    <Image
                      src="/assets/images/round3-logo.png"
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
                    flex flex-row xs:flex-col 
                    items-center lg:items-start justify-center lg:justify-start gap-4
                  "
                >
                  <button
                    className={`
                      inline-flex items-center justify-center gap-2 
                      px-6 py-3 border border-white bg-blue-600 text-white 
                      font-semibold hover:bg-blue-700 transition-colors rounded-full
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
                    <button
                      className="
                        inline-flex gap-2 items-center justify-center 
                        px-6 py-3 border border-white text-white font-semibold 
                        rounded-full cursor-pointer
                      "
                    >
                      {slide.ctaSecondary}
                      <Image
                        src="assets/images/arrowLeft.svg"
                        alt="arrowLeft"
                        className="w-4 h-4"
                        width={4}
                        height={4}
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Dot Navigation */}
              <div
                className="
                  absolute right-10 top-[68%] -translate-y-1/2 
                  hidden lg:flex items-center gap-3 z-20
                "
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
