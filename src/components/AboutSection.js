"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function IdentitySection() {
  const rootRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#f7f7f7] to-[#ffffff] py-12 sm:py-16 overflow-visible rounded-[40px] mx-auto mt-16 max-w-7xl"
      id="identity"
    >
      {/* Center main avatar (now overlapping upward) */}
      <div className="center-avatar relative w-full flex justify-center z-20 -mt-32 sm:-mt-36 overflow-visible">
        <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] overflow-visible z-10">
          {/* Avatar Image */}
          <Image
            src="/assets/images/dummy-avatar.png"
            alt="Main Avatar"
            width={1000}
            height={600}
            className="rounded-2xl object-contain mx-auto relative z-10"
            priority
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white via-white/50 to-transparent opacity-60 z-[20]" />
        </div>

        {/* Floating companions (now above avatar) */}
        <div className="absolute top-[-3%] right-[13%] floating-companion w-32 h-32 md:w-60 md:h-60 z-[30] overflow-visible">
          <Image
            src="/assets/images/companion-2.png"
            alt="Floating Companion Right"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[80%] left-[17%] floating-companion w-32 h-32 md:w-48 md:h-48 z-[30] overflow-visible">
          <Image
            src="/assets/images/companion-1.png"
            alt="Floating Companion Left"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Title and description */}
      <div className="identity-text mt-6 sm:mt-10 text-center px-6 z-10">
        <h2 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold">
          EXPRESS YOUR UNIQUE <br />
          <span className="text-black font-extrabold italic">IDENTITY</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Bring your personality to life with endless customization. From quirky
          headwear and stylish crowns to expressive gestures and one-of-a-kind
          companions, Zoaverse gives you all the tools to stand out.
        </p>
      </div>

      {/* Cards positioned in bottom corners like second image */}
      <div className="relative mt-10 w-full h-[500px] z-10">
        {/* Personalized Card - Bottom Left corner with counter-clockwise rotation */}
        <div className="info-card absolute left-0 bottom-0 -rotate-[15deg] scale-[0.8] sm:scale-[0.85] md:scale-[0.9] translate-x-[-25%] translate-y-[30%]">
          <div className="overlap-group-2 relative">
            <div className="rectangle"></div>
            <div className="rectangle-2"></div>
            <div className="div-2">
              <div className="text-wrapper">PERSONALIZED</div>
              <p className="p">
                Customize your avatar to match your vibe with limitless
                expressions, accessories, and more.
              </p>
            </div>
            <div className="ellipse"></div>
            <Image
              className="vector s1"
              src="assets/images/Vector.png"
              alt="Personalized Icon"
            />
          </div>
        </div>

        {/* Companions Card - Bottom Right corner with clockwise rotation */}
        <div className="info-card absolute right-0 bottom-0 rotate-[15deg] scale-[0.8] sm:scale-[0.85] md:scale-[0.9] translate-x-[25%] translate-y-[30%]">
          <div className="overlap-group-2 relative">
            <div className="rectangle-3"></div>
            <div className="rectangle-2c"></div>
            <div className="div-2">
              <div className="text-wrapper">COMPANIONS</div>
              <p className="p4">
                {"From playful creatures to futuristic bots, they're more than accessories—they're part of your journey."}
              </p>
            </div>
            <div className="ellipse"></div>
            <Image
              className="vector"
              src="assets/images/smile-circle-svgrepo-com 1.png"
              alt="Companions Icon"
            />
          </div>
        </div>
      </div>

      {/* Decorative spheres */}
      <div className="absolute top-[10%] left-[5%] w-10 h-10 bg-yellow-400 rounded-full blur-xl opacity-70" />
      <div className="absolute bottom-[15%] right-[10%] w-8 h-8 bg-purple-500 rounded-full blur-xl opacity-70" />
    </section>
  );
}

