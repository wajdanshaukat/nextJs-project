"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";

export default function HeroSection() {
  useGsap();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);

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
      // Slide transition animations
      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          gsap.set(slide, { opacity: index === currentSlide ? 1 : 0 });
        }
      });

      gsap.to(slideRefs.current, {
        opacity: (index) => (index === currentSlide ? 1 : 0),
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
        background: 'url("assets/images/bg2.png") no-repeat center center fixed, url("assets/images/Bees1.png") no-repeat center center fixed',
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
      }}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[index] = el)}
          className="absolute inset-0 w-full h-full"
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
            <div className="max-w-4xl">
              {slide.subtitle && (
                <div className="text-white/80 text-lg mb-2 font-medium">
                  {slide.subtitle}
                </div>
              )}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 items-center">
                  <button className="inline-flex items-center gap-2 px-6 py-4 border border-white bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700 transition-colors rounded-full">
                    {slide.cta}
                    <Image
                      src="assets/images/apple.svg"
                      alt="Apple"
                      className="w-4 h-4"
                    />

                    <Image
                      src="assets/images/windows.svg"
                      alt="Windows"
                      className="w-4 h-4"
                    />
                  </button>
                  {slide.ctaSecondary && (
                    <button className="inline-flex gap-2 items-center px-6 py-4 border border-white text-white font-semibold rounded-full cursor-pointer">
                      {slide.ctaSecondary}
                      <Image
                        src="assets/images/arrowLeft.svg"
                        alt="arrowLeft"
                        className="w-4 h-4"
                      />
                    </button>
                  )}
                </div>

                {/* Dots Navigation */}
                <div className="flex items-center ml-auto gap-3">
                  {heroSlides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => goToSlide(dotIndex)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        dotIndex === currentSlide ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
  
    </section>
  );
}
