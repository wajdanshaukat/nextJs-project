"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import useGsap from "@/hooks/useGsap";
import { useTranslation } from "react-i18next";

export default function NewsSection() {
  useGsap();
  const { t, i18n } = useTranslation();
  const rootRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const events = [
    {
      id: 1,
      title: t("event1_title"),
      date: t("event1_day"),
      time: "12:00 PM",
      fullDate: "24 May 2024",
      timezone: t("ksaTime"),
      description: t("event1_desc"),
      image: "/assets/images/event-1.png",
    },
    {
      id: 2,
      title: t("event2_title"),
      date: t("event2_day"),
      time: "7:00 PM",
      fullDate: "17 May 2025",
      timezone: t("ksaTime"),
      description: t("event2_desc"),
      image: "/assets/images/event-2.png",
    },
    {
      id: 3,
      title: t("event3_title"),
      date: t("event3_day"),
      time: "2:00 PM",
      fullDate: "19 May 2025",
      timezone: t("ksaTime"),
      description: t("event3_desc"),
      image: "/assets/images/event-3.png",
    },
  ];

  // Handle window resize for responsive cards
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(slidesRef.current, { autoAlpha: 1, y: 0 });
      gsap.from(slidesRef.current, {
        y: 40,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % events.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section ref={rootRef} className="relative bg-black px-6 md:px-8 lg:px-12 py-24 overflow-hidden">
      <div className="mx-auto">
        <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row lg:gap-8 items-start">
          {/* LEFT SECTION */}
          <div className="flex-shrink-0 w-full pb-4 lg:w-[450px] space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-normal uppercase text-gray-700 tracking-wide">
                {t("happening")}
              </h2>
              <h2 className="text-5xl lg:text-7xl font-bold italic uppercase text-gray-800 tracking-wide leading-tight">
                {t("now")}
              </h2>
            </div>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {t("newsDescription")}
            </p>

            {/* Buttons below paragraph */}
            <div className="flex gap-3 pt-4 justify-end">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 transition-colors cursor-pointer"
              >
                <ChevronLeft
                  size={20}
                  className={i18n.language === "ar" ? "rotate-180" : ""}
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors cursor-pointer"
              >
                <ChevronRight
                  size={20}
                  className={i18n.language === "ar" ? "rotate-180" : ""}
                />
              </button>
            </div>
          </div>

          {/* RIGHT SECTION - Carousel */}
          <div className="relative flex justify-center items-center overflow-hidden w-full sm:px-0">
            <div className="flex gap-5 w-full justify-center">
              {events.map((event, index) => {
                const isActive = index === currentSlide;

                // Responsive card width
                const cardWidth = isActive
                  ? "w-full sm:w-[80%] lg:w-[900px]"
                  : "w-[90%] sm:w-[60%] lg:w-[400px]";

                // Determine visible cards dynamically based on screenWidth
                let isVisible = false;
                if (screenWidth >= 1280) {
                  isVisible =
                    isActive ||
                    index === (currentSlide + 1) % events.length ||
                    index === (currentSlide + 2) % events.length;
                } else if (screenWidth >= 768) {
                  isVisible =
                    isActive || index === (currentSlide + 1) % events.length;
                } else {
                  isVisible = isActive;
                }

                if (!isVisible) return null;

                return (
                  <div
                    key={event.id}
                    ref={(el) => (slidesRef.current[index] = el)}
                    className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl overflow-hidden shadow-lg relative ${
                      isActive
                        ? "scale-100 opacity-100 z-20"
                        : "scale-90 opacity-50 z-10"
                    } ${cardWidth}`}
                    style={{ height: "400px" }}
                  >
                    <div
                      className={`w-full h-full relative overflow-hidden ${
                        !isActive ? "bg-gray-200/40" : ""
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${event.image}')`,
                          transform:
                            i18n.language === "ar" ? "scaleX(-1)" : "scaleX(1)",
                        }}
                      ></div>

                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/100 via-blue-800/55 to-transparent" />
                      )}

                      {/* Text content */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-3">
                            {event.title}
                          </h3>

                          <div className="flex items-start gap-6 mb-3">
                            {/* Date */}
                            <div className="flex items-start gap-2">
                              <Calendar size={14} className="mt-[2px]" />
                              <div className="flex flex-col">
                                <span className="text-sm">{event.date}</span>
                                <span className="text-sm text-white/80">
                                  {event.fullDate}
                                </span>
                              </div>
                            </div>

                            {/* Time */}
                            <div className="flex items-start gap-2">
                              <Clock size={14} className="mt-[2px]" />
                              <div className="flex flex-col">
                                <span className="text-sm">{event.time}</span>
                                <span className="text-sm text-white/80">
                                  {event.timezone}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-white/90 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      )}

                      {!isActive && (
                        <div className="absolute inset-0 bg-gray-200/70 rounded-2xl pointer-events-none" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   const ctx = gsap.context(() => {
//     gsap.from(slidesRef.current, {
//       y: 40,
//       autoAlpha: 0,
//       stagger: 0.15,
//       duration: 0.6,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: rootRef.current,
//         start: "top 80%",
//         once: true,
//       },
//     });
//   }, rootRef);

//   return () => ctx.revert();
// }, []);
