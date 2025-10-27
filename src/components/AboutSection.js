// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// export default function IdentitySection() {
//   const rootRef = useRef(null);
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // ✅ Desktop (rotate + diagonal position)
//       mm.add("(min-width: 1024px)", () => {
//         gsap.set(".info-card.left", {
//           rotation: -15,
//           xPercent: -20,
//           yPercent: 25,
//         });
//         gsap.set(".info-card.right", {
//           rotation: 15,
//           xPercent: 20,
//           yPercent: 25,
//         });
//       });

//       // ✅ Tablet & Mobile (straight + center aligned)
//       mm.add("(max-width: 1023px)", () => {
//         gsap.set(".info-card.left, .info-card.right", {
//           rotation: 0,
//           xPercent: 0,
//           yPercent: 0,
//         });
//       });

//       // ✅ Animations
//       gsap.from(".center-avatar", {
//         y: 40,
//         autoAlpha: 0,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       gsap.from(".floating-companion", {
//         y: 30,
//         autoAlpha: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       gsap.from(".info-card", {
//         y: 40,
//         autoAlpha: 0,
//         stagger: 0.3,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top 85%",
//           once: true,
//         },
//       });

//       gsap.from(".identity-text", {
//         y: 30,
//         autoAlpha: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top 85%",
//           once: true,
//         },
//       });
//     }, rootRef);

//     const handleResize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       ctx.revert();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section
//       ref={rootRef}
//       className="relative w-full min-h-screen flex flex-col items-center justify-center
//       bg-gradient-to-b from-[#f7f7f7] to-[#ffffff] py-12 sm:py-16 overflow-x-hidden overflow-y-visible
//       rounded-[40px] mx-auto mt-16 max-w-7xl"
//       id="identity"
//     >
//       {/* Center avatar */}
//       <div className="center-avatar relative w-full flex justify-center z-20 -mt-24 sm:-mt-28 md:-mt-36 overflow-visible">
//         <div className="relative w-[95%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] overflow-visible z-10">
//           <Image
//             src="/assets/images/dummy-avatar.png"
//             alt="Main Avatar"
//             width={1000}
//             height={600}
//             className="rounded-2xl object-contain mx-auto relative z-10"
//             priority
//           />
//           <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white via-white/50 to-transparent opacity-60 z-[20]" />
//         </div>

//         {/* Floating companions */}
//         <div className="absolute top-[-4%] right-[8%] sm:right-[10%] md:right-[13%] floating-companion w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-60 lg:h-60 z-[30] overflow-visible">
//           <Image
//             src="/assets/images/companion-2.png"
//             alt="Floating Companion Right"
//             fill
//             className="object-contain"
//           />
//         </div>
//         <div className="absolute top-[80%] left-[8%] sm:left-[12%] md:left-[17%] floating-companion w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 z-[30] overflow-visible">
//           <Image
//             src="/assets/images/companion-1.png"
//             alt="Floating Companion Left"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Text */}
//       <div className="identity-text mt-6 sm:mt-10 text-center px-4 sm:px-6 z-10">
//         <h2 className="text-gray-800 text-xl sm:text-3xl md:text-4xl font-bold leading-snug">
//           EXPRESS YOUR UNIQUE <br />
//           <span className="text-black font-extrabold italic">IDENTITY</span>
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-md leading-relaxed px-2">
//           Bring your personality to life with endless customization. From quirky
//           headwear and stylish crowns to expressive gestures and one-of-a-kind
//           companions, Zoaverse gives you all the tools to stand out.
//         </p>
//       </div>

//       {/* Cards */}
//       <div
//         className="relative mt-10 w-full max-w-6xl z-10 flex flex-col items-center justify-center
//         gap-10 lg:flex-row lg:justify-between lg:items-end px-4 sm:px-6 overflow-visible"
//       >
//         {/* Left card */}
//         <div
//           className="info-card left relative flex justify-center
//           w-full sm:w-[85%] md:w-[70%] lg:w-[42%]
//           scale-95 sm:scale-100 lg:absolute lg:left-0 lg:bottom-0"
//         >
//           <div className="overlap-group-2 relative w-full">
//             <div className="rectangle"></div>
//             <div className="rectangle-2"></div>
//             <div className="div-2">
//               <div className="text-wrapper">PERSONALIZED</div>
//               <p className="p">
//                 Customize your avatar to match your vibe with limitless
//                 expressions, accessories, and more.
//               </p>
//             </div>
//             <div className="ellipse"></div>
//             <Image
//               className="vector s1"
//               src="/assets/images/Vector.png"
//               alt="Personalized Icon"
//               width={50}
//               height={50}
//             />
//           </div>
//         </div>

//         {/* Right card */}
//         <div
//           className="info-card right relative flex justify-center
//           w-full sm:w-[85%] md:w-[70%] lg:w-[42%]
//           scale-95 sm:scale-100 lg:absolute lg:right-0 lg:bottom-0"
//         >
//           <div className="overlap-group-2 relative w-full">
//             <div className="rectangle-3"></div>
//             <div className="rectangle-2c"></div>
//             <div className="div-2">
//               <div className="text-wrapper">COMPANIONS</div>
//               <p className="p4">
//                 From playful creatures to futuristic bots, they're more than
//                 accessories—they're part of your journey.
//               </p>
//             </div>
//             <div className="ellipse"></div>
//             <Image
//               className="vector"
//               src="/assets/images/smile-circle-svgrepo-com 1.png"
//               alt="Companions Icon"
//               width={50}
//               height={50}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Decorative spheres */}
//       <div className="absolute top-[10%] left-[5%] w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full blur-xl opacity-70" />
//       <div className="absolute bottom-[12%] right-[8%] w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full blur-xl opacity-70" />
//     </section>
//   );
// }

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function IdentitySection() {
  const rootRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(".info-card.left", {
          rotation: -12,
          xPercent: -10,
          yPercent: 15,
        });
        gsap.set(".info-card.right", {
          rotation: 12,
          xPercent: 10,
          yPercent: 15,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(".info-card.left, .info-card.right", {
          rotation: 0,
          xPercent: 0,
          yPercent: 0,
        });
      });

      gsap.from(".center-avatar", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".floating-companion", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".identity-text", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".info-card", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, rootRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full bg-black flex justify-center items-center py-24 sm:py-28 md:py-32 overflow-visible">
      <section
        ref={rootRef}
        className="relative w-[95%] sm:w-[90%] md:w-[88%] max-w-7xl min-h-[80vh] flex flex-col items-center justify-start rounded-[40px] py-12 sm:py-16 overflow-visible"
        style={{
          background: "linear-gradient(180deg, #a6a5a5 0%, #f1f1f1 38.9%)",
        }}
        id="identity"
      >
        {/* Center avatar */}
        <div className="center-avatar relative w-full flex justify-center z-20 -mt-24 sm:-mt-28 md:-mt-36">
          <div className="relative w-[95%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] z-10">
            <Image
              src="/assets/images/dummy-avatar.png"
              alt="Main Avatar"
              width={1000}
              height={600}
              className="rounded-2xl object-contain mx-auto relative z-10"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white via-white/50 to-transparent opacity-60 z-[20]" />
          </div>

          {/* Floating companions */}
          <div className="absolute top-[-4%] right-[8%] sm:right-[10%] md:right-[13%] floating-companion w-20 h-20 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-66 lg:h-66 z-[30]">
            <Image
              src="/assets/images/companion-2.png"
              alt="Floating Companion Right"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[80%] left-[8%] sm:left-[12%] md:left-[17%] floating-companion w-20 h-20 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-52 lg:h-52 z-[30]">
            <Image
              src="/assets/images/companion-1.png"
              alt="Floating Companion Left"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="identity-text mt-12 text-center px-4 sm:px-6 z-10">
          <div className="inline-block">
            <h2 className="text-gray-800 font-regular leading-snug">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
                EXPRESS YOUR UNIQUE
              </span>
              <span className="block text-black font-extrabold italic text-[40px] sm:text-[55px] md:text-[70px] lg:text-[80px] leading-tight whitespace-nowrap">
                IDENTITY
              </span>
            </h2>
          </div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-md leading-relaxed px-2">
            Bring your personality to life with endless customization. From
            quirky headwear and stylish crowns to expressive gestures and
            one-of-a-kind companions, Zoaverse gives you all the tools to stand
            out.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-16 sm:mt-20 w-full max-w-8xl z-10 flex flex-col lg:flex-row lg:justify-between lg:items-end items-center gap-8 sm:gap-10 px-4 overflow-visible">
          {/* Left Card */}
          <div className="info-card left relative flex justify-center scale-95 sm:scale-100 w-full sm:w-[80%] md:w-[70%] lg:w-[46%] xl:w-[44%] overflow-visible order-1 lg:order-none">
            <div className="overlap-group-2 relative">
              <div className="rectangle"></div>
              <div className="rectangle-2"></div>
              <div className="div-2">
                <div className="text-wrapper">PERSONALIZED</div>
                <p className="p">
                  Customize your avatar to match your vibe with limitless
                  expressions, accessories, and more.
                </p>
              </div>
              <div className="ellipse"></div>
              <Image
                className="vector s1"
                src="/assets/images/Vector.png"
                alt="Personalized Icon"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="info-card right relative flex justify-center scale-95 sm:scale-100 w-full sm:w-[80%] md:w-[70%] lg:w-[46%] xl:w-[44%] overflow-visible order-2 lg:order-none">
            <div className="overlap-group-2 relative">
              <div className="rectangle-3"></div>
              <div className="rectangle-2c"></div>
              <div className="div-2">
                <div className="text-wrapper">COMPANIONS</div>
                <p className="p4">
                  {`From playful creatures to futuristic bots, they're more than
                  accessories—they're part of your journey.`}
                </p>
              </div>
              <div className="ellipse"></div>
              <Image
                className="vector"
                src="/assets/images/smile-circle-svgrepo-com 1.png"
                alt="Companions Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Decorative Circle Images (from Figma) */}
        <div className="absolute top-[8%] left-[5%] w-16 h-16 z-[5] opacity-90">
          <Image
            src="/assets/images/Asset 10@4x 1.png"
            alt="Yellow Circle"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-[18%] right-[8%] w-12 h-12 z-[5] opacity-90">
          <Image
            src="/assets/images/Asset 8@4x 1.png"
            alt="Purple Circle 1"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-[15%] left-[40%] w-8 h-8 z-[5] opacity-90">
          <Image
            src="/assets/images/Asset 8@4x 1.png"
            alt="Purple Circle 2"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
