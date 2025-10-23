// src/components/FeaturesSection.js
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";

export default function FeaturesSection() {
  useGsap();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      id: 1,
      title: "Modular Architecture",
      desc: "Easily integrate and scale your ecosystem with plug-and-play modules built for performance and flexibility.",
      icon: "⚙️",
    },
    {
      id: 2,
      title: "Smart Contracts Ready",
      desc: "Pre-built templates and developer tools help you deploy production-grade smart contracts in minutes.",
      icon: "💎",
    },
    {
      id: 3,
      title: "Seamless Integrations",
      desc: "Connect with wallets, oracles, and APIs effortlessly for real-time data and user experience.",
      icon: "🔗",
    },
    {
      id: 4,
      title: "Advanced Analytics",
      desc: "Track performance with built-in dashboards and transparent metrics powered by blockchain data.",
      icon: "📊",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative z-10 bg-[#0B0B0C] text-white py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose ZOEVERSE</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-16">
          Everything you need to launch and scale your web3 ecosystem with ease
          and precision.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {feature.desc}
              </p>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 via-pink-500 to-amber-300 rounded-b-2xl opacity-60"></div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle blurred background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-indigo-500/20 blur-3xl rounded-full"></div>
    </section>
  );
}
