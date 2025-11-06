"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function ClientWrapper({ children }) {
  const [showPage, setShowPage] = useState(false);
  const loaderRef = useRef(null);
  const simpleRingRef = useRef(null);
  const glowRingRef = useRef(null);
  const textRef = useRef(null);
  const pageRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    // 1️⃣ Determine language preference safely
    let storedLang = null;
    try {
      storedLang = localStorage.getItem("language");
    } catch (e) {
      console.warn("localStorage not available:", e);
    }

    const lang = storedLang || window.__LANG__ || "en"; // default to EN

    // 2️⃣ Update <html> attributes early
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // 3️⃣ Update i18next if needed
    import("i18next").then((module) => {
      const i18next = module.default;
      if (i18next.language !== lang) {
        i18next.changeLanguage(lang);
      }
    });

    // 4️⃣ Continue with your GSAP loader logic
    const ctx = gsap.context(() => {
      gsap.set(simpleRingRef.current, { rotate: 45 });
      gsap.fromTo(
        simpleRingRef.current,
        { rotate: 45 },
        { rotate: 405, duration: 1, ease: "linear", repeat: -1 }
      );

      setTimeout(() => {
        gsap.to(simpleRingRef.current, {
          opacity: 0,
          scale: 1.3,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.set(glowRingRef.current, { opacity: 1, scale: 0.9, rotate: 0 });
        gsap.fromTo(
          glowRingRef.current,
          { rotate: 0 },
          { rotate: 360, duration: 1.2, ease: "linear", repeat: -1 }
        );
        gsap.to(glowRingRef.current, {
          boxShadow: "0 0 25px #3dbff2, 0 0 60px #3dbff2",
          borderColor: "#3dbff2",
          duration: 1.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        gsap.fromTo(
          textRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.4 }
        );
      }, 1000);

      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setShowPage(true);
            if (loaderRef.current) loaderRef.current.style.display = "none";
          },
        });

        tl.to(loaderRef.current, {
          y: -120,
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: "power3.inOut",
        });

        tl.fromTo(
          pageRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.4, ease: "power3.out" },
          "-=0.6"
        );
      }, 2500);
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070708]"
      >
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div
            ref={simpleRingRef}
            className="absolute inset-0 border-4 border-t-transparent border-white rounded-full"
          />
          <div
            ref={glowRingRef}
            className="absolute inset-0 rounded-full border-4 border-t-transparent border-white opacity-0"
          ></div>
          <span
            ref={textRef}
            className="absolute text-white font-semibold tracking-widest text-sm opacity-0"
          >
            {t("zoaverse")}
          </span>
        </div>
      </div>

      <div
        ref={pageRef}
        className={`${
          showPage ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
