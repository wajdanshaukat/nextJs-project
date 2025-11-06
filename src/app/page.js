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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

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
        <div
          className="absolute left-0 w-full z-[1] pointer-events-none"
          style={{
            top: "56%",
            transform: "translateY(-50%)",
          }}
        >
          <div
            ref={bgRef}
            className="absolute left-0 w-full z-[1] pointer-events-none overflow-hidden"
            style={{
              top: "56%",
              transform: "translateY(-50%)",
            }}
          >
            <div className="relative w-full h-[500px]">
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
