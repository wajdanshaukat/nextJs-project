"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import useGsap from "@/hooks/useGsap";

export default function EventsSection() {
  useGsap();
  const rootRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % events.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section ref={rootRef} className="relative bg-black py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-[#F5F5F5] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SECTION */}
            <div className="space-y-6 relative">
              <div className="space-y-1">
                <h2 className="text-xl lg:text-2xl font-normal uppercase text-gray-700 tracking-wide">
                  HAPPENING
                </h2>
                <h2 className="text-5xl lg:text-7xl font-bold uppercase text-gray-800 tracking-wide leading-tight">
                  NOW
                </h2>
              </div>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-lg">
                {`Stay connected to live events unfolding inside Zoaverse. From
                conferences and workshops to concerts and community meetups,
                there's always something exciting to join.`}
              </p>

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

            {/* RIGHT SECTION - Event Cards Carousel */}
            <div className="relative flex justify-start items-center h-80 overflow-hidden">
              {events.map((event, index) => {
                const isActive = index === currentSlide;
                const isNext = index === (currentSlide + 1) % events.length;
                const isNext2 = index === (currentSlide + 2) % events.length;

                return (
                  <div
                    key={event.id}
                    ref={(el) => (slidesRef.current[index] = el)}
                    className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-2xl overflow-hidden shadow-lg mr-5 ${
                      isActive
                        ? "opacity-100 z-20 scale-100"
                        : isNext
                        ? "opacity-50 z-10 scale-90"
                        : isNext2
                        ? "opacity-40 z-5 scale-80"
                        : "opacity-30 z-0 scale-75"
                    }`}
                    style={{
                      width: isActive ? "600px" : "400px",
                      height: "400px",
                    }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                      style={{
                        backgroundImage: `url('${event.image}')`,
                      }}
                    >
                      {/* Gradient overlay for active card only */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-700/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">
                              {event.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-2">
                              <Calendar size={14} />
                              <span className="text-sm">{event.date}</span>
                              <span className="text-sm text-white/80 ml-2">{event.fullDate}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                              <Clock size={14} />
                              <span className="text-sm">{event.time}</span>
                              <span className="text-sm text-white/80 ml-2">{event.timezone}</span>
                            </div>

                            <p className="text-sm text-white/90 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </>
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
