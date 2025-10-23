// src/components/EcosystemSection.js
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsap from "@/hooks/useGsap";
import Image from "next/image";

export default function EcosystemSection() {
  useGsap();
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // fade + slide-in each step on scroll
      itemsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Foundation Layer",
      desc: "Start with robust blockchain infrastructure providing scalability, security, and interoperability across the ecosystem.",
      icon: "/assets/icons/layer1.svg",
      color: "from-indigo-400 via-cyan-400 to-sky-300",
    },
    {
      id: 2,
      title: "Protocol Integration",
      desc: "Integrate smart contracts, on-chain logic, and APIs to build powerful decentralized applications.",
      icon: "/assets/icons/protocol.svg",
      color: "from-pink-400 via-fuchsia-400 to-violet-400",
    },
    {
      id: 3,
      title: "Ecosystem Growth",
      desc: "Scale your network with community-driven modules, governance tools, and open APIs for collaboration.",
      icon: "/assets/icons/growth.svg",
      color: "from-amber-400 via-orange-400 to-red-400",
    },
    {
      id: 4,
      title: "Sustainability",
      desc: "Ensure longevity through decentralized governance and continuous innovation across your platform.",
      icon: "/assets/icons/sustain.svg",
      color: "from-emerald-400 via-green-400 to-lime-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative bg-[#09090B] text-white py-28 overflow-hidden"
    >
      {/* Section header */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          The Ecosystem Framework
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          A complete blueprint connecting blockchain infrastructure with smart
          modules and scalable governance.
        </p>
      </div>

      {/* Timeline visual */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>

        {/* Steps */}
        <div className="space-y-24 relative z-10">
          {steps.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  i % 2 === 0
                    ? "md:text-left md:pr-16"
                    : "md:text-right md:pl-16"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Icon Bubble */}
              <div className="relative flex flex-col items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Connector to center line */}
                <div
                  className={`absolute top-1/2 ${
                    i % 2 === 0 ? "right-[-60px]" : "left-[-60px]"
                  } w-16 h-[2px] bg-white/20`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative glowing blobs */}
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-fuchsia-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
    </section>
  );
}
