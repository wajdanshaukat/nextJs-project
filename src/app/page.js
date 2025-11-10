"use client";
import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeaturesSection";
import AvatarSection from "@/components/AvatarSection";
import VenusCarousel from "@/components/VenusCarousel";
import NewsSection from "@/components/NewsSection";
import Image from "next/image";

export default function Page() {
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure GSAP reads layout before paint → no jump
    const ctx = gsap.context(() => {
      // Set the initial position *before paint*
      gsap.set(bgRef.current, {
        y: 0,
        opacity: 1,
      });

      // Start floating animation
      gsap.to(bgRef.current, {
        y: 40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
        <div className="absolute left-0 w-full z-[0] pointer-events-none top-[58%] lg:top-[54%] 1xl:top-[72%] 2xl:top-[62%] -translate-y-1/2">
          <div
            ref={bgRef}
            className="absolute left-0 w-full z-[0] pointer-events-none overflow-hidden top-[58%] lg:top-[54%] 1xl:top-[72%] 2xl:top-[62%] -translate-y-1/2"
          >
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[500px] xl:h-[480px] 1xl:h-[600px] 2xl:h-[830px]">
              <Image
                src="/assets/images/Frame-48.png"
                alt="falling background"
                fill
                className="object-cover object-center opacity-100"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features">
          <FeatureSection />
        </section>
      </div>
      <section id="avatars">
        <AvatarSection />
      </section>
      <section id="media">
        <VenusCarousel />
      </section>
      <section id="news">
        <NewsSection />
      </section>
    </>
  );
}
