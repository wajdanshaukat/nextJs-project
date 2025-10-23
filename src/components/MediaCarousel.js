"use client";
import { useEffect, useRef, useState } from "react";
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

    const itemsArray = itemsRef.current;
    const duration = 2.5;

    const timeline = gsap.timeline({
      onComplete: () => {
        // ✅ only update index after animation completes
        setCurrentIndex((prev) =>
          direction === "next"
            ? (prev + 1) % items.length
            : (prev - 1 + items.length) % items.length
        );
        setIsAnimating(false);
      },
    });

    if (window.innerWidth > 1020) {
      if (direction === "next") {
        timeline
          .to(
            [itemsArray[0], itemsArray[1], itemsArray[5]],
            {
              width: "0%",
              margin: 0,
              opacity: 0.5,
              duration,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            [itemsArray[2], itemsArray[4]],
            {
              width: "40%",
              margin: 0,
              opacity: 0.5,
              duration,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            itemsArray[3],
            {
              width: "100%",
              opacity: 1,
              marginRight: "10px",
              marginLeft: "10px",
              duration,
              ease: "power2.inOut",
            },
            0
          );
      } else {
        timeline
          .to(
            [itemsArray[0], itemsArray[4], itemsArray[5]],
            {
              width: "0%",
              margin: 0,
              opacity: 0.5,
              duration,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            [itemsArray[1], itemsArray[3]],
            {
              width: "40%",
              margin: 0,
              opacity: 0.5,
              duration,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            itemsArray[2],
            {
              width: "100%",
              opacity: 1,
              marginRight: "10px",
              marginLeft: "10px",
              duration,
              ease: "power2.inOut",
            },
            0
          );
      }
    } else {
      timeline
        .to(
          itemsArray,
          {
            width: "0%",
            margin: 0,
            opacity: 0.5,
            duration,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          itemsArray[3],
          {
            width: "100%",
            opacity: 1,
            marginRight: "10px",
            marginLeft: "10px",
            duration,
            ease: "power2.inOut",
          },
          0
        );
    }
  };

  useEffect(() => {
    const updateLayout = () => {
      const itemsArray = itemsRef.current;
      if (!itemsArray.length) return;
      containerRef1.current?.offsetHeight; // ✅ force reflow

      requestAnimationFrame(() => {
        if (window.innerWidth < 1020) {
          gsap.set(itemsArray, { width: "0%", margin: 0, opacity: 0.5 });
          gsap.set(itemsArray[2], {
            width: "100%",
            opacity: 1,
            marginRight: "10px",
            marginLeft: "10px",
          });
        } else {
          gsap.set(itemsArray[0], { width: "0%", margin: 0, opacity: 0.5 });
          gsap.set(itemsArray[1], { width: "40%", margin: 0, opacity: 0.5 });
          gsap.set(itemsArray[2], {
            width: "100%",
            opacity: 1,
            marginRight: "10px",
            marginLeft: "10px",
          });
          gsap.set(itemsArray[3], { width: "40%", margin: 0, opacity: 0.5 });
          gsap.set(itemsArray[4], { width: "0%", margin: 0, opacity: 0.5 });
        }
      });
    };

    // ✅ ensure layout after videos load
    const handleVideoLoaded = () => {
      setTimeout(updateLayout, 100);
    };

    const videos = document.querySelectorAll("video");
    videos.forEach((v) => v.addEventListener("loadeddata", handleVideoLoaded));

    requestAnimationFrame(() => setTimeout(updateLayout, 0));
    window.addEventListener("resize", updateLayout);

    return () => {
      videos.forEach((v) =>
        v.removeEventListener("loadeddata", handleVideoLoaded)
      );
      window.removeEventListener("resize", updateLayout);
    };
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
              style={{ minWidth: "0%" }}
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
                    className="max-sm:!text-wrap max-sm:!w-[400px]"
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
