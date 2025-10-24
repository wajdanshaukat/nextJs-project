"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import { useLayoutEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  useGsap();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

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
      image: "assets/images/hero-1.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: null,
    },
    {
      id: 2,
      title: "HUNT OR BE HUNTED",
      subtitle: "ROUND3",
      description:
        "Step into Round3 Qurtobah, a desert-themed Prop & Hunt adventure inspired by Arabian heritage. Hide, hunt, and outsmart your rivals in a setting full of tension and excitement.",
      image: "assets/images/hero-2.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
    },
    {
      id: 3,
      title: "THINK FAST, LAUGH HARDER",
      subtitle: "ZERO IQ",
      description:
        "Two teams go head-to-head answering unpredictable, hilarious, and sometimes downright silly questions. Think fast, laugh harder, and embrace the chaos.",
      image: "assets/images/hero-3.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
    },
    {
      id: 4,
      title: "NO MERCY, NO ESCAPE",
      subtitle: "ROUND3",
      description:
        "Enter Round3 Alpha, a futuristic Prop & Hunt clash where advanced robots face off against heavily armed soldiers. Tactics, technology, and survival collide in the ultimate showdown.",
      image: "assets/images/hero-4.png",
      cta: "DOWNLOAD NOW",
      ctaSecondary: "MORE INFO",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[1080px] flex items-center overflow-hidden"
      style={{
        background:
          'url("assets/images/bg2.png") no-repeat center center fixed, url("assets/images/Bees1.png") no-repeat center center fixed',
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl relative">
              <div
                className={`absolute -top-20 left-0 h-[60px] flex items-center transition-all duration-300 ${
                  slide.subtitle ? "opacity-100 visible" : "opacity-0 invisible"
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

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                {slide.description}
              </p>

              <div className="flex items-center justify-between w-full">
                {/* Left: CTA Buttons */}
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 px-6 py-4 border border-white bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700 transition-colors rounded-full">
                    {slide.cta}
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
                  </button>

                  {/* Secondary CTA */}
                  <div
                    className={`transition-all duration-300 min-w-[190px] ${
                      slide.ctaSecondary
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <button className="inline-flex gap-2 items-center px-6 py-4 border border-white text-white font-semibold rounded-full cursor-pointer">
                      {slide.ctaSecondary || "MORE INFO"}
                      <Image
                        src="assets/images/arrowLeft.svg"
                        alt="arrowLeft"
                        className="w-4 h-4"
                        width={4}
                        height={4}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-8 top-[67%] -translate-y-1/2 flex items-center gap-3 z-20">
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
      ))}
    </section>
  );
}
