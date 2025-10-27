"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const VenusCarousel = ({ isRTL = false, isOpen = false }) => {
  const containerRef1 = useRef(null);
  const itemsRef = useRef([]);
  const subHeadingRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    {
      id: 1,
      videoSrc: "assets/images/f1_video.mp4",
      heading: "Art Gallery",
      subHeading: "Explore immersive digital art in our virtual lobby.",
    },
    {
      id: 2,
      videoSrc: "assets/images/f2_video.mp4",
      heading: "Lobby",
      subHeading: "Welcome to a modern and elegant digital space.",
    },
    {
      id: 3,
      videoSrc: "assets/images/f3_video.mp4",
      heading: "Conference Room",
      subHeading: "Collaborate with teams in a futuristic environment.",
    },
    {
      id: 4,
      videoSrc: "assets/images/f1_video.mp4",
      heading: "Open Space",
      subHeading: "Flexible zones for creative collaboration.",
    },
    {
      id: 5,
      videoSrc: "assets/images/f2_video.mp4",
      heading: "Lounge Area",
      subHeading: "Relax and connect in a cozy digital lounge.",
    },
    {
      id: 6,
      videoSrc: "assets/images/f3_video.mp4",
      heading: "Meeting Hub",
      subHeading: "A private yet collaborative meeting environment.",
    },
  ];

  const getVisibleItems = () => {
    return items.map((_, index) => {
      const adjustedIndex = (index + currentIndex) % items.length;
      return items[adjustedIndex];
    });
  };

  const animateCarousel = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const timeline = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prev) =>
          direction === "next"
            ? (prev + 1) % items.length
            : (prev - 1 + items.length) % items.length
        );
        setIsAnimating(false);
      },
    });

    const itemsArray = itemsRef.current;
    const duration = 2.5;
    const isMobile = window.innerWidth < 1020;

    itemsArray.forEach((el, i) => {
      let width = "0%";
      let opacity = 0.5;
      let marginLeft = "0px";
      let marginRight = "0px";

      if (!isMobile) {
        if (direction === "next") {
          if (i === 3) {
            width = "100%";
            opacity = 1;
            marginLeft = "10px";
            marginRight = "10px";
          } else if (i === 2 || i === 4) {
            width = "40%";
            opacity = 0.5;
          }
        } else {
          if (i === 1) {
            width = "100%";
            opacity = 1;
            marginLeft = "10px";
            marginRight = "10px";
          } else if (i === 0 || i === 2) {
            width = "40%";
            opacity = 0.5;
          }
        }
      } else {
        // Mobile layout: center card only
        if (
          (direction === "next" && i === 3) ||
          (direction === "prev" && i === 1)
        ) {
          width = "100%";
          opacity = 1;
          marginLeft = "10px";
          marginRight = "10px";
        }
      }

      timeline.to(
        el,
        {
          width,
          opacity,
          marginLeft,
          marginRight,
          duration,
          ease: "power2.inOut",
        },
        0
      );
    });
  };

  // Initial render/flicker fix
  useLayoutEffect(() => {
    const itemsArray = itemsRef.current;
    gsap.set(itemsArray, { opacity: 0, visibility: "hidden" });

    const showInitial = () => {
      const isMobile = window.innerWidth < 1020;
      itemsArray.forEach((item, i) => {
        let config = { opacity: 0.5, visibility: "visible", width: "0%" };
        if (isMobile) {
          if (i === 2)
            config = { opacity: 1, width: "100%", visibility: "visible" };
        } else {
          if (i === 1 || i === 3)
            config = { opacity: 0.5, width: "40%", visibility: "visible" };
          if (i === 2)
            config = {
              opacity: 1,
              width: "100%",
              visibility: "visible",
              marginLeft: "10px",
              marginRight: "10px",
            };
        }
        gsap.set(item, config);
      });
    };

    showInitial();
    window.addEventListener("resize", showInitial);
    return () => window.removeEventListener("resize", showInitial);
  }, []);

  return (
    <div
      className="w-full my-slider max-md:px-2 md:px-5 lg:!px-24 py-2 md:py-10 max-lg:h-[750px] self-center"
      id="venus"
    >
      <div
        ref={containerRef1}
        className="relative max-lg:h-full lg:h-dvh flex items-center justify-start overflow-hidden"
      >
        <div className="absolute flex items-center w-full" id="carousal-bottom">
          {getVisibleItems().map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="lg:!h-[750px] max-lg:h-[512px] rounded-lg self-start transition relative overflow-hidden"
              style={{ minWidth: "0%", opacity: 0, visibility: "hidden" }}
            >
              <div
                className="rounded-[40px] absolute h-full w-full"
                style={{
                  background:
                    "linear-gradient(0deg, #085DFF 13.75%, rgba(8, 93, 255, 0) 39.24%)",
                }}
              />
              <div className="absolute h-full w-full">
                <div className="h-full text-white px-4 relative flex flex-col gap-2 w-max justify-end">
                  <h3>{item.heading}</h3>
                  <p
                    ref={(el) => (subHeadingRef.current[index] = el)}
                    style={{
                      width: "500px",
                      paddingRight: `${isRTL ? "0px" : "170px"}`,
                      paddingLeft: `${isRTL ? "170px" : "0px"}`,
                    }}
                  >
                    {item.subHeading}
                  </p>
                </div>
              </div>
              <video
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover h-full w-full rounded-[40px]"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          className={`absolute max-lg:translate-y-[210px] lg:translate-y-[320px] h-[512px] self-center flex flex-row items-center justify-center w-full ${
            isOpen ? "z-30" : "z-50"
          }`}
        >
          <div className="w-[40%]" />
          <div className="w-full mx-[10px] flex flex-row gap-2 justify-end ltr:mr-10 rtl:ml-10">
            <button
              onClick={() => animateCarousel("prev")}
              className="z-10 bg-white/80 hover:bg-white p-3 w-12 h-12 flex items-center justify-center rotate-180 rounded-full shadow-lg"
            >
              <Image
                src="assets/images/arrowIcon-1.svg"
                alt="prev"
                className="rtl:rotate-180"
                width={8}
                height={8}
              />
            </button>
            <button
              onClick={() => animateCarousel("next")}
              className="z-10 bg-white/80 hover:bg-white p-3 w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
            >
              <Image
                src="assets/images/arrowIcon-1.svg"
                alt="next"
                className="rtl:rotate-180"
                width={8}
                height={8}
              />
            </button>
          </div>
          <div className="w-[40%] max-sm:hidden" />
        </div>
      </div>
    </div>
  );
};

export default VenusCarousel;
