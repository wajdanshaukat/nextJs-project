"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import useGsap from "@/hooks/useGsap";

export default function NewsSection() {
  useGsap();
  const rootRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const events = [
    {
      id: 1,
      title: "Event Name",
      date: "Monday",
      time: "12:00 PM",
      fullDate: "24 May 2024",
      timezone: "KSA Time",
      description:
        "Zoaverse provides a wide selection of customizable venues that makes..",
      image: "/assets/images/event-1.png",
    },
    {
      id: 2,
      title: "Gaming Tournament",
      date: "Wednesday",
      time: "7:00 PM",
      fullDate: "17 May 2025",
      timezone: "KSA Time",
      description:
        "Compete with players from around the world in our exclusive gaming tournament.",
      image: "/assets/images/event-2.png",
    },
    {
      id: 3,
      title: "Virtual Workshop",
      date: "Friday",
      time: "2:00 PM",
      fullDate: "19 May 2025",
      timezone: "KSA Time",
      description:
        "Join our interactive workshop to learn new skills and connect with like-minded individuals.",
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
    <section ref={rootRef} className="relative bg-black py-24 overflow-hidden">
      <div className="mx-auto px-6 lg:px-10">
        <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row lg:gap-8 items-start">
          {/* LEFT SECTION */}
          <div className="flex-shrink-0 w-full pb-4 lg:w-[450px] space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl lg:text-2xl font-normal uppercase text-gray-700 tracking-wide">
                HAPPENING
              </h2>
              <h2 className="text-5xl lg:text-7xl font-bold italic uppercase text-gray-800 tracking-wide leading-tight">
                NOW
              </h2>
            </div>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {`Stay connected to live events unfolding inside Zoaverse. From
              conferences and workshops to concerts and community meetups,
              there's always something exciting to join.`}
            </p>

            {/* Buttons below paragraph */}
            <div className="flex gap-3 pt-4 justify-end">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT SECTION - Carousel */}
          <div className="relative flex justify-center items-center overflow-hidden w-full">
            <div className="flex gap-5 w-full justify-center">
              {events.map((event, index) => {
                const isActive = index === currentSlide;

                // Responsive card width
                const cardWidth = isActive
                  ? "w-[90%] sm:w-[45%] lg:w-[900px]"
                  : "w-[70%] sm:w-[40%] lg:w-[400px]";

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
                      className={`w-full h-full bg-cover bg-center relative ${
                        !isActive ? "bg-gray-200/40" : ""
                      }`}
                      style={{ backgroundImage: `url('${event.image}')` }}
                    >
                      {isActive && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/100 via-blue-800/55 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar size={14} />
                              <span className="text-sm">{event.date}</span>
                              <span className="text-sm text-white/80 ml-2">
                                {event.fullDate}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Clock size={14} />
                              <span className="text-sm">{event.time}</span>
                              <span className="text-sm text-white/80 ml-2">
                                {event.timezone}
                              </span>
                            </div>
                            <p className="text-sm text-white/90 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </>
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
