// "use client";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// import "./i18n/client";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import $ from "jquery";
// // import dynamic from "next/dynamic";

// // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // const Modernizr = dynamic(() => import("modernizr"), { ssr: false });

// // Swiper.use([Navigation, Pagination, Autoplay]);
// export default function Home() {
//   const cardRef = useRef(null);
//   const { t, i18n } = useTranslation();
//   const [isRTL, setIsRTL] = useState(i18n.dir() === "rtl"); // Initialize based on initial language

//   useEffect(() => {
//     // Set the HTML dir attribute based on language
//     setIsRTL(i18n.dir() === "rtl");
//     document.documentElement.lang = i18n.language;
//   }, [i18n.language]);
//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang);
//   };
//   // const showDiv2 = () => {
//   //   if (typeof window !== "undefined" && window.showDiv2) {
//   //     window.showDiv2();
//   //   }
//   // };

//   // const showtxt = () => {
//   //   if (typeof window !== "undefined" && window.showtxt) {
//   //     window.showtxt();
//   //   }
//   // };

//   // const scrollToFeatures = () => {
//   //   if (typeof window !== "undefined" && window.scrollToFeatures) {
//   //     window.scrollToFeatures();
//   //   }
//   // };
//   // const scrollToDownload = () => {
//   //   if (typeof window !== "undefined" && window.scrollToDownload) {
//   //     window.scrollToDownload();
//   //   }
//   // };

//   // // Scroll to avatars section when a button is clicked
//   // const scrollToAvatars = () => {
//   //   if (typeof window !== "undefined" && window.scrollToAvatars) {
//   //     window.scrollToAvatars();
//   //   }
//   // };

//   // // Scroll to spaces section when a button is clicked
//   // const scrollToSpaces = () => {
//   //   if (typeof window !== "undefined" && window.scrollToSpaces) {
//   //     window.scrollToSpaces();
//   //   }
//   // };
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     var element = document.getElementById("sec2");
//     if (element) {
//       var elementPosition = element.getBoundingClientRect().top;
//       setPosition(elementPosition);
//     }
//   }, []);

//   function scrollToDownload() {
//     window.scrollTo({
//       top: position,
//       behavior: "smooth",
//     });
//     var downloadElement = document.getElementById("mob-download");
//     if (downloadElement) {
//       downloadElement.scrollIntoView({
//         block: "center",
//         behavior: "smooth",
//       });
//     }
//   }

//   function scrollToFeatures() {
//     window.scrollTo({
//       top: position * 2,
//       behavior: "smooth",
//     });
//     var featureElement = document.getElementById("mob-features");
//     if (featureElement) {
//       featureElement.scrollIntoView({
//         block: "center",
//         behavior: "smooth",
//       });
//     }
//   }

//   function scrollToAvatars() {
//     var element = document.getElementById("d2");
//     element.scrollIntoView({
//       block: "start",
//       behavior: "smooth",
//     });
//   }
//   function scrollToSpaces() {
//     var element4 = document.getElementById("venus");
//     if (element4) {
//       element4.scrollIntoView({
//         block: "start",
//         behavior: "smooth",
//       });
//     }

//     // Calculate the exact position you want to scroll to

//     // Scroll to that exact position
//   }

//   function showDiv2() {
//     gsap.to("#div1", { y: "-100%", duration: 3, ease: "power2.inOut" });
//     gsap.to("#textdiv", {
//       opacity: 1,
//       duration: 6,
//       ease: "power2.inOut",
//       delay: 2,
//       y: 20,
//     });

//     gsap.to(document.documentElement, {
//       // duration: 0,
//       // delay: 8,
//       css: { overflow: "auto" },
//       ease: "power2.inOut",
//     });

//     gsap.to("#navbarSupportedContent", {
//       y: "-250%",
//       duration: 0.5,
//       ease: "power2.inOut",
//     });

//     gsap.to("#div2", {
//       y: "0%",
//       scale: 1.5,
//       duration: 0.5,
//       ease: "power2.inOut",
//       onComplete: scaleDiv3,
//     });
//   }

//   function scaleDiv3() {
//     gsap.to(".roundvideo", {
//       duration: 1,
//       delay: 1,
//       borderRadius: "40px",
//       onComplete: showdivs,
//     });
//     gsap.to("#nevdots", {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut",
//       delay: 2,
//     });
//     gsap.to("#div2", { scale: 0.9, duration: 6, ease: "power2.inOut" });
//     gsap.to("#navbarSupportedContent", {
//       y: "%",
//       duration: 6,
//       ease: "power2.inOut",
//     });
//     gsap.set(cardRef.current, {
//       y: "800%",

//       opacity: 0,
//     });
//     gsap.set("#usersCard", {
//       y: "800%",
//       opacity: 0,
//     });

//     gsap.to("#usersCard", {
//       y: 0,
//       opacity: 1,

//       duration: 9, // Animation duration
//       ease: "power3.out", // Easing for smooth animation
//     });

//     gsap.to(cardRef.current, {
//       y: 0,
//       opacity: 1,

//       duration: 9, // Animation duration
//       ease: "power3.out", // Easing for smooth animation
//     });
//     ScrollTrigger.create({
//       trigger: ".container1",
//       start: "top 20%",
//       end: "bottom top",
//       onEnter: () => {
//         gsap.to(cardRef.current, {
//           opacity: 0,
//           y: "100vh",
//           width: 0,
//           zIndex: "-99999 !important",
//           immediateRender: false, // Prevents initial render
//           overwrite: true, // Ensures animations don't stack
//         });
//       },
//       onLeaveBack: () => {
//         gsap.to(cardRef.current, {
//           opacity: 1,
//           y: 0,
//           width: "100%",
//           immediateRender: true,
//           overwrite: true,
//         });
//       },
//     });

//     // gsap.to("#div3", { scale: 0.90, duration: 2, ease: "power2.inOut", delay: 2,});
//     gsap.to("#card", {
//       opacity: 1,
//       duration: 6,
//       ease: "power2.inOut",
//       delay: 2,
//     });
//     gsap.to("#header", {
//       opacity: 1,
//       duration: 6,
//       ease: "power2.inOut",
//       delay: 2,
//       y: 20,
//     });
//     gsap.to(".roundpic", { duration: 2, delay: 6, borderRadius: "40px" });
//   }
//   // Call the function initially
//   function showtxt() {
//     gsap.to("#textmain", {
//       opacity: 1,
//       duration: 2,
//       ease: "power2.inOut",
//       delay: 2,
//       y: -50,
//     });
//   }

//   function showdivs() {
//     document.addEventListener("DOMContentLoaded", function () {
//       gsap.to(document.documentElement, {
//         // duration: 1,
//         // delay: 1,
//         // css: { overflow: "auto" },
//       });
//     });
//   }

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     // Register GSAP plugin only once
//     gsap.registerPlugin(ScrollTrigger);

//     // Scroll to top on reload
//     window.onbeforeunload = () =>
//       window.scrollTo({ top: 0, behavior: "instant" });

//     // Animation for #pdiv2
//     gsap.to("#pdiv2", {
//       duration: 3,
//       delay: 1,
//       scrollTrigger: {
//         trigger: "#pdiv2",
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Zoom effect for #zoomImages
//     gsap.to("#zoomImages", {
//       duration: 3,
//       scale: 1.4,
//       delay: 3,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#zoomImages",
//         start: "top 90%",
//         end: "top top",
//         scrub: true,
//       },
//     });

//     // Horizontal scroll section
//     const sections = gsap.utils.toArray(".swipersec");
//     if (sections.length) {
//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".container1",
//           pin: true,
//           scrub: 1,
//         },
//         onComplete: () => {
//           gsap.to(".bgsw1", {
//             opacity: 1,
//             duration: 2,
//             y: 20,
//             ease: "power2.inOut",
//             scrollTrigger: {
//               trigger: "#fstswiper",
//               start: "top 90%",
//               end: "bottom 10%",
//               toggleActions: "play restart reverse reset",
//             },
//           });
//         },
//       });
//     }

//     // Section animations
//     gsap.to(".img1", {
//       translateY: "0px",
//       width: "65%",
//       ease: "power2.inOut",
//       duration: 2,
//       scrollTrigger: {
//         trigger: "#d1",
//         start: "top 100%",
//         end: "bottom 90%",
//         scrub: true,
//       },
//     });

//     gsap.to(".s1", {
//       y: 0,
//       rotation: -360,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#d1",
//         start: "top 90%",
//         end: "bottom 90%",
//         scrub: true,
//       },
//     });

//     gsap.to(".c1", {
//       y: -50,
//       rotation: 15,
//       duration: 2,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#d1",
//         start: "top 50%",
//         end: "bottom 90%",
//         scrub: true,
//       },
//     });

//     gsap.to(".c2", {
//       y: 20,
//       rotation: -8,
//       duration: 2,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#d1",
//         start: "top 50%",
//         end: "bottom 90%",
//         scrub: true,
//       },
//     });

//     gsap.to(".t1", {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       delay: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#d1",
//         start: "top 80%",
//         end: "bottom 90%",
//         scrub: true,
//       },
//     });

//     gsap.to("#card", {
//       y: 400,
//       duration: 2,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#div2",
//         start: "bottom 99%",
//         scrub: true,
//       },
//     });

//     gsap.to(".updiv", {
//       y: 120,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#div2",
//         start: "top 5%",
//         scrub: true,
//       },
//     });

//     gsap.to(".movtextar", {
//       x: 650,
//       duration: 3,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "horizntlswiper",
//         start: "top 5%",
//         scrub: true,
//       },
//     });

//     // Initialize Swipers safely
//     let swiper4 = null;
//     let swiper5 = null;

//     const articleSwiper = document.querySelector(".mySwiperarticle");
//     if (articleSwiper) {
//       swiper4 = new Swiper(articleSwiper, {
//         centeredSlides: true,
//         loop: true,
//         initialSlide: 1,
//         pagination: {
//           el: ".swiper-pagination2",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiperbtnprev",
//           prevEl: ".swiperbtnnext",
//         },
//         breakpoints: {
//           300: { slidesPerView: 1, spaceBetween: 20 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 10 },
//         },
//         speed: 2000,
//         effect: "slide",
//       });
//     }

//     const articleSwiper2 = document.querySelector(".mySwiperarticle2");
//     if (articleSwiper2) {
//       swiper5 = new Swiper(articleSwiper2, {
//         centeredSlides: true,
//         loop: true,
//         pagination: {
//           el: ".swiper-pagination3",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper2btnnext",
//           prevEl: ".swiper2btnprev",
//         },
//         autoplay: { delay: 2000 },
//         breakpoints: {
//           300: { slidesPerView: 1, spaceBetween: 20 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 40 },
//         },
//         speed: 2000,
//         effect: "slide",
//       });
//     }

//     // Hover effects (only attach if element exists)
//     const hoverPairs = [
//       ["f1", "f2"],
//       ["i1", "i2"],
//       ["l1", "l2"],
//       ["y1", "y2"],
//       ["t1", "t2"],
//     ];

//     hoverPairs.forEach(([id1, id2]) => {
//       const el1 = document.getElementById(id1);
//       const el2 = document.getElementById(id2);
//       if (el1 && el2) {
//         el1.addEventListener("mouseover", () => {
//           el1.classList.add("hidden");
//           el2.classList.remove("hidden");
//         });
//         el2.addEventListener("mouseout", () => {
//           el1.classList.remove("hidden");
//           el2.classList.add("hidden");
//         });
//       }
//     });

//     // Navbar toggle blur div
//     const toggleButton = document.querySelector(".navbar-toggler");
//     const blurDiv = document.getElementById("hedblur");
//     if (toggleButton && blurDiv) {
//       toggleButton.addEventListener("click", () => {
//         blurDiv.style.display =
//           blurDiv.style.display === "none" ? "block" : "none";
//       });
//     }

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       swiper4?.destroy();
//       swiper5?.destroy();
//     };
//   }, []); 

//   const containerRef = useRef(null);
//   const carouselRef = useRef(null);
//   const [isInitialized, setIsInitialized] = useState(false);
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [rotationX, setRotationX] = useState(0);
//   const [rotationY, setRotationY] = useState(0);
//   const itemLength = 12;
//   const radius = Math.round(250 / Math.tan(Math.PI / itemLength));
//   const theta = 360 / itemLength;
//   // Initialize carousel with staged animations
//   useEffect(() => {
//     if (!isInitialized && containerRef.current && carouselRef.current) {
//       // Set initial perspective
//       gsap.set(containerRef.current, {
//         perspective: 900,
//       });
//       // Initially hide carousel
//       gsap.set(carouselRef.current, {
//         z: -radius,
//         rotationX: 0,
//         rotationY: 0,
//         opacity: 0,
//       });
//       // Prepare items for initial animation
//       const items = Array.from({ length: itemLength }).map((_, i) =>
//         document.querySelector(`#item${i + 1}`)
//       );
//       // Set initial state for items
//       items.forEach((item, i) => {
//         if (item) {
//           gsap.set(item, {
//             x: Math.random() * 1000 - 500, // Random X position
//             y: Math.random() * 1000 - 500, // Random Y position
//             z: Math.random() * 1000 - 500, // Random Z position
//             rotation: Math.random() * 360,
//             opacity: 0,
//             visibility: "visible",
//           });
//         }
//       });
//       // Create animation timeline
//       const tl = gsap.timeline({
//         onComplete: () => setIsInitialized(true),
//       });
//       // Stage 1: Fade in items with stagger
//       tl.to(items, {
//         duration: 0.8,
//         opacity: 1,
//         stagger: 0.05,
//         ease: "power2.out",
//       });
//       // Stage 2: Move items to their ring positions
//       items.forEach((item, i) => {
//         const angle = theta * i;
//         tl.to(
//           item,
//           {
//             duration: 1.2,
//             x: 0,
//             y: 0,
//             z: radius,
//             rotation: 0,
//             rotationY: angle,
//             transformOrigin: `50% 50% ${-radius}px`,
//             ease: "back.out(1.2)",
//           },
//           "-=0.9"
//         ); // Overlap animations
//       });
//       // Stage 3: Reveal the entire carousel
//       tl.to(
//         carouselRef.current,
//         {
//           duration: 1.5,
//           opacity: 1,
//           rotationY: 360,
//           rotationX: -15,
//           ease: "power3.inOut",
//         },
//         "-=0.5"
//       );
//     }
//   }, [isInitialized, radius, theta]);
//   // Handle mouse movement with reduced sensitivity and smoothing
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       // Calculate mouse position relative to center with reduced sensitivity
//       const mouseXRel =
//         (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
//       const mouseYRel =
//         (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
//       // Apply much stronger smoothing
//       setMouseX((prev) => prev + (mouseXRel * 0.03 - prev) * 0.05);
//       setMouseY((prev) => prev + (mouseYRel * 0.03 - prev) * 0.05);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
//   // Smooth rotation animation with reduced speed
//   useEffect(() => {
//     const animate = () => {
//       setRotationY((prev) => prev + mouseX * 2); // Reduced rotation speed
//       setRotationX((prev) => {
//         const target = mouseY * 15; // Reduced tilt range
//         return prev + (target - prev) * 2; // Slower transition
//       });
//     };
//     const intervalId = setInterval(animate, 1000 / 30); // Reduced update frequency
//     return () => clearInterval(intervalId);
//   }, [mouseX, mouseY]);
//   // Update carousel rotation with smoother easing
//   useEffect(() => {
//     if (carouselRef.current && isInitialized) {
//       gsap.to(carouselRef.current, {
//         duration: 1.2, // Longer duration for smoother movement
//         rotationY: rotationY * 15, // Reduced rotation multiplier
//         rotationX: rotationX,
//         ease: "power1.out", // Smoother easing
//       });
//     }
//   }, [rotationX, rotationY, isInitialized]);
//   // Hover effect for items
//   const handleItemHover = (index, isEnter) => {
//     const item = document.querySelector(`#item${index + 1}`);
//     if (item) {
//       gsap.to(item, {
//         duration: 0.3,
//         scale: isEnter ? 1.1 : 1,
//         z: isEnter ? radius * 1.1 : radius,
//         ease: "power2.out",
//       });
//     }
//   };

//   //sectoion 3 Horizontal scroll
//   const firstSectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const buttonsRef = useRef(null);
//   const peopleRef = useRef(null);

//   useEffect(() => {
//     // Initial animations for first section elements
//     gsap.set([headingRef.current, descriptionRef.current, buttonsRef.current], {
//       y: 100,
//       opacity: 0,
//     });

//     gsap.set(peopleRef.current, {
//       y: 300,
//       opacity: 0,
//       scale: 0.8, // Start from a scale of 0
//       transformOrigin: "bottom center", // Scale from the bottom
//     });

//     // Entry animations timeline
//     const entryTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top bottom",
//         // toggleActions: "play none none reverse", // Reverse on scrolling back
//       },
//     });

//     entryTl
//       .to(headingRef.current, {
//         duration: 1.4, // Increased duration for a smoother animation
//         delay: 0.3, // Add slight delay
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//       })
//       .to(
//         descriptionRef.current,
//         {
//           duration: 1.4,
//           y: 0,
//           opacity: 1,
//           ease: "power2.out",
//         },
//         "-=1.2" // Overlap with previous animation
//       )
//       .to(
//         buttonsRef.current,
//         {
//           duration: 1.5,
//           y: 0,
//           opacity: 1,
//           ease: "power2.out",
//         },
//         "-=1.2"
//       );

//     gsap.to(firstSectionRef.current, {
//       width: "90%",
//       // duration:6, // Target width
//       transformOrigin: "right center", // Anchor to the right
//       ease: "power3.out", // Smooth easing curve
//       scrollTrigger: {
//         trigger: firstSectionRef.current,
//         start: "top top", // Start animation when section reaches the top of the viewport
//         end: "+=1000", // Increase scroll length to slow down animation
//         scrub: 1, // Smooth scrubbing (1 second scrubbing delay)
//         toggleActions: "play none none reverse", // Reverse animation when scrolling back
//       },
//     });

//     // Animate the 'people' image
//     gsap.to(peopleRef.current, {
//       width: "100%",
//       duration: 3, // Duration for a smooth effect
//       y: 0, // Bring it to its natural position
//       opacity: 1,
//       delay: 1,
//       scale: 1, // Full scale
//       ease: "power3.out", // Smooth easing
//       scrollTrigger: {
//         trigger: headingRef.current, // Start animation when this element enters viewport
//         start: "top bottom",
//         // toggleActions: "play none none reverse", // Reverse on scrolling back
//       },
//     });

//     return () => {
//       // Cleanup ScrollTrigger instances
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef1 = useRef(null);
//   const itemsRef = useRef([]);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const subHeadingRef = useRef([]);
//   // Sample items - you can replace with your own content
//   const items = [
//     {
//       id: 1,
//       imgSrc: "assets/images/zoa1.jpg",
//       heading: t("artGallery"),
//       subHeading: t("lobbySubtext"),
//     },
//     {
//       id: 2,
//       imgSrc: "assets/images/zoa2.jpg",
//       heading: t("lobbyText"),
//       subHeading: t("lobbySubtext"),
//     },
//     {
//       id: 3,
//       imgSrc: "assets/images/zoa3.jpg",
//       heading: t("conferenceRoom"),
//       subHeading: t("conferenceRoomText"),
//     },
//     {
//       id: 4,
//       imgSrc: "assets/images/zoa1.jpg",
//       heading: t("openSpaceText"),
//       subHeading: t("openSpaceSubtext"),
//     },
//     {
//       id: 5,
//       imgSrc: "assets/images/zoa2.jpg",
//       heading: t("lobbyText"),
//       subHeading: t("lobbySubtext"),
//     },
//     {
//       id: 6,
//       imgSrc: "assets/images/zoa3.jpg",
//       heading: t("conferenceRoom"),
//       subHeading: t("conferenceRoomText"),
//     },
//   ];

//   const animateCarousel = (direction) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     gsap.set([subHeadingRef], {
//       paddingRight: "0px",
//     });
//     const timeline = gsap.timeline({
//       onComplete: () => setIsAnimating(false),
//     });
//     const itemsArray = itemsRef.current;
//     const newIndex =
//       direction === "next"
//         ? (currentIndex + 1) % items.length
//         : (currentIndex - 1 + items.length) % items.length;

//     const duration = 2.5;
//     setCurrentIndex(newIndex);
//     if (window.innerWidth > 1020) {
//       if (direction === "next") {
//         // Animate the items to the right
//         timeline
//           .to(
//             itemsArray[0],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[1],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[2],
//             {
//               width: "40%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[3],
//             {
//               width: "100%",
//               opacity: 1,
//               duration,
//               marginRight: "10px",
//               marginLeft: "10px",
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[4],
//             {
//               width: "40%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[5],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           );
//       } else {
//         // Animate the items to the left
//         timeline
//           .to(
//             itemsArray[0],
//             {
//               width: "40%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[1],
//             {
//               width: "100%",
//               opacity: 1,
//               marginRight: "10px",
//               marginLeft: "10px",
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[2],
//             {
//               width: "40%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[3],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[4],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[5],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           );
//       }
//     } else {
//       if (direction === "next") {
//         // Animate the items to the right
//         timeline
//           .to(
//             itemsArray[0],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[1],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[2],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[3],
//             {
//               width: "100%",
//               opacity: 1,
//               duration,
//               marginRight: "10px",
//               marginLeft: "10px",
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[4],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[5],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           );
//       } else {
//         // Animate the items to the left
//         timeline
//           .to(
//             itemsArray[0],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[1],
//             {
//               width: "100%",
//               opacity: 1,
//               marginRight: "10px",
//               marginLeft: "10px",
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[2],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[3],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[4],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           )
//           .to(
//             itemsArray[5],
//             {
//               width: "0%",
//               margin: 0,
//               opacity: 0.5,
//               duration,
//               ease: "power2.inOut",
//             },
//             0
//           );
//       }
//     }
//   };

//   useEffect(() => {
//     const updateLayout = () => {
//       const itemsArray = itemsRef.current;

//       if (window.innerWidth < 1020) {
//         gsap.set(itemsArray[0], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[1], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[2], {
//           width: "100%",
//           opacity: 1,
//           marginRight: "10px",
//           marginLeft: "10px",
//           ease: "power2.inOut",
//         });
//         gsap.set(itemsArray[3], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[4], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[5], { width: "0%", margin: 0, opacity: 0.5 });
//       } else {
//         gsap.set(itemsArray[0], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[4], { width: "0%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[1], { width: "40%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[2], {
//           width: "100%",
//           opacity: 1,
//           marginRight: "10px",
//           marginLeft: "10px",
//           ease: "power2.inOut",
//         });
//         gsap.set(itemsArray[3], { width: "40%", margin: 0, opacity: 0.5 });
//         gsap.set(itemsArray[5], { width: "0%", margin: 0, opacity: 0.5 });
//       }
//     };

//     // Initial layout setup
//     updateLayout();

//     // Attach the resize event listener
//     window.addEventListener("resize", updateLayout);

//     // Cleanup the event listener on unmount
//     return () => {
//       window.removeEventListener("resize", updateLayout);
//     };
//   }, []);
//   const getVisibleItems = () => {
//     return items.map((_, index) => {
//       const adjustedIndex = (index + currentIndex) % items.length;
//       return items[adjustedIndex];
//     });
//   };

//   const fstswiperRef = useRef(null);
//   const d1Ref = useRef(null);
//   const fallingImgRef = useRef(null);
//   const fallingImgRef2 = useRef(null);

//   useEffect(() => {
//     const fstswiper = fstswiperRef.current;
//     const d1 = d1Ref.current;
//     const fallingImg = fallingImgRef.current;
//     const fallingImg2 = fallingImgRef2.current;

//     // GSAP Animation
//     gsap.to(fstswiper, {
//       x: "-100vw", // Move completely off the left side of the screen
//       ease: "power2.out", // Smooth easing
//       scrollTrigger: {
//         trigger: d1, // Trigger when #d1 comes into view
//         start: "top bottom", // When the top of #d1 hits the bottom of the viewport
//         end: "bottom top", // When the bottom of #d1 hits the top of the viewport
//         scrub: 1, // Smooth scrubbing with a 1-second delay
//       },
//     });
//     gsap.to(fallingImg2, {
//       y: "20vh", // Move the element down by 1000px
//       duration: 1,
//       opacity: 0,
//       ease: "power2.out", // Smooth easing
//       scrollTrigger: {
//         trigger: d1, // Trigger when #d1 comes into view
//         start: "top bottom", // When the top of #d1 hits the bottom of the viewport
//         end: "top bottom",
//         // When the bottom of #d1 hits the top of the viewport
//         toggleActions: "play none reverse none", // Play animation on enter, reverse on leave
//       },
//     });

//     gsap.to(fallingImg, {
//       y: "20vh", // Move the element down by 1000px
//       duration: 1,
//       opacity: 0,
//       ease: "power2.out", // Smooth easing
//       scrollTrigger: {
//         trigger: d1, // Trigger when #d1 comes into view
//         start: "top bottom", // When the top of #d1 hits the bottom of the viewport
//         end: "top bottom",
//         // When the bottom of #d1 hits the top of the viewport
//         toggleActions: "play none reverse none", // Play animation on enter, reverse on leave
//       },
//     });
//   }, []);

//   // const logoRef = useRef(null);
//   // const headingRef1 = useRef(null);
//   // const btnRef1 = useRef(null);

//   // useEffect(() => {
//   //   const logoAnimate = logoRef.current;
//   //   const headingAnimate = headingRef1.current;
//   //   const btnAnimate = btnRef1.current;

//   //   // Set initial state
//   //   gsap.set([logoAnimate, headingAnimate, btnAnimate], { autoAlpha: 0 });

//   //   // Animation timeline
//   //   gsap.fromTo(
//   //     logoAnimate,
//   //     { y: "-500px", autoAlpha: 0 },
//   //     { y: 0, autoAlpha: 1, duration: 4, ease: "power2.inOut" }
//   //   );

//   //   gsap.fromTo(
//   //     headingAnimate,
//   //     { x: "-1000px", autoAlpha: 0 },
//   //     { x: 0, autoAlpha: 1, duration: 4, ease: "power2.inOut" }
//   //   );

//   //   gsap.fromTo(
//   //     btnAnimate,
//   //     { y: "1000px", autoAlpha: 0 },
//   //     { y: 0, autoAlpha: 1, duration: 4, ease: "power2.inOut" }
//   //   );
//   // }, []);

//   useEffect(() => {
//     // Set initial position slightly above
//     // gsap.set("#emoji-1",);
//     // gsap.set("#emoji-2", { y: "-50px" });

//     // Emoji 1 Scroll Animation (Moves Down)
//     gsap.to("#emoji-1", {
//       rotate: 360,
//       duration: 10,
//       delay: 3,
//       y: "200px", // Moves down
//       scrollTrigger: {
//         trigger: "#emoji-1",
//         start: "20% bottom",
//         // end: "top 20%",
//         scrub: true,
//       },
//     });

//     // Emoji 2 Scroll Animation (Moves Down)
//     gsap.to("#emoji-2", {
//       rotate: 300,
//       duration: 10,
//       delay: 3,
//       top: "80px", // Moves down
//       scrollTrigger: {
//         trigger: "#emoji-2",
//         start: "20% bottom",
//         // end: "top 20%",
//         scrub: true,
//       },
//     });
//     gsap.to("#emoji-3", {
//       rotate: 360,
//       duration: 10,
//       delay: 3,
//       scrollTrigger: {
//         trigger: "#emoji-2",
//         start: "50% bottom",
//         // end: "top 20%",
//         scrub: true,
//       },
//     });
//   }, []);
//   const trackRef = useRef(null);
//   const [currentIndex1, setCurrentIndex1] = useState(0);
//   const [isAnimating1, setIsAnimating1] = useState(false);
//   const [dimensions, setDimensions] = useState({
//     cardWidth: 520,
//     gap: 35,
//     visibleCards: 3,
//   });

//   // Original cards data
//   const originalCards = [
//     {
//       path: "/assets/images/conv.jpg",
//       header: t("crossPlatform"),
//       description: t("crossPlatoformSubtext"),
//       bgColor: "#6BD2D7",
//     },
//     {
//       path: "/assets/images/arabic.jpg",
//       header: t("highFidelityVenues"),
//       description: t("highFidelityVenuesSubtext"),
//       bgColor: "#97B3FF",
//     },
//     {
//       path: "/assets/images/venus.jpg",
//       header: t("supportsArabic"),
//       description: t("supportsArabicSubtext"),
//       bgColor: "#E7BCFB",
//     },
//     {
//       path: "/assets/images/conv.jpg",
//       header: t("spatialAudio"),
//       description: t("spatialAudioSubtext"),
//       bgColor: "#6BD2D7",
//     },
//     {
//       path: "/assets/images/chat.jpg",
//       header: t("crossPlatform"),
//       description: t("crossPlatoformSubtext"),
//       bgColor: "#97B3FF",
//     },
//     {
//       path: "/assets/images/venus.jpg",
//       header: t("highFidelityVenues"),
//       description: t("highFidelityVenuesSubtext"),
//       bgColor: "#E7BCFB",
//     },
//   ];

//   // Clone full set of cards on both ends for smoother transitions
//   const clonedCards = [...originalCards, ...originalCards, ...originalCards];
//   const animationDuration = 0.8;

//   // Update dimensions based on screen size
//   useEffect(() => {
//     const updateDimensions = () => {
//       const isMobile = window.innerWidth <= 768;
//       setDimensions({
//         cardWidth: isMobile ? 298 : 520,
//         gap: 35,
//         visibleCards: isMobile ? 1 : 3,
//       });
//     };

//     // Add resize listener
//     window.addEventListener("resize", updateDimensions);

//     // Clean up
//     return () => window.removeListener("resize", updateDimensions);
//   }, []);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     // Set initial position to show the middle set of cards
//     const initialOffset =
//       -originalCards.length * (dimensions.cardWidth + dimensions.gap);
//     gsap.set(track, { x: initialOffset });
//     setCurrentIndex1(originalCards.length); // Start at first card of middle set
//   }, [dimensions]);

//   const handleNext = () => {
//     if (isAnimating) return;
//     setIsAnimating1(true);
//     setCurrentIndex1((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (isAnimating) return;
//     setIsAnimating1(true);
//     setCurrentIndex1((prev) => prev - 1);
//   };

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const moveToPosition = -(
//       currentIndex1 *
//       (dimensions.cardWidth + dimensions.gap)
//     );

//     gsap.to(track, {
//       x: moveToPosition,
//       duration: animationDuration,
//       ease: "power2.inOut",
//       onComplete: () => {
//         if (currentIndex1 >= originalCards.length * 2) {
//           const resetPosition = -(
//             (currentIndex1 - originalCards.length) *
//             (dimensions.cardWidth + dimensions.gap)
//           );
//           gsap.set(track, { x: resetPosition });
//           setCurrentIndex1(currentIndex1 - originalCards.length);
//         } else if (currentIndex1 < originalCards.length) {
//           const resetPosition = -(
//             (currentIndex1 + originalCards.length) *
//             (dimensions.cardWidth + dimensions.gap)
//           );
//           gsap.set(track, { x: resetPosition });
//           setCurrentIndex1(currentIndex1 + originalCards.length);
//         }
//         setIsAnimating1(false);
//       },
//     });
//   }, [currentIndex1, dimensions]);
//   // useEffect(() => {
//   //   ScrollTrigger.create({
//   //     trigger: "#d2",
//   //     start: "top 10%",
//   //     end: "bottom bottom",
//   //     scrub: 1,
//   //     onUpdate: (self) => {

//   //       const progress = self.progress;

//   //       const interpolatedColor = gsap.utils.interpolate("#ffffff", "#000000", progress);

//   //       changeNavColor(interpolatedColor);
//   //     },

//   //   });

//   //   function changeNavColor(color) {
//   //     gsap.to(".nav-link", {
//   //       color: color,
//   //       borderColor: color,
//   //       duration: 0.2,
//   //       ease: "power1.out",
//   //       onUpdate: () => {
//   //         document.querySelectorAll(".nav-link").forEach((link) => {
//   //           link.style.setProperty("color", color, "important");
//   //           link.style.setProperty("border-color", color, "important");
//   //         });
//   //       },
//   //     });
//   //   }
//   // }, []);
//   // useEffect(() => {
//   //   ScrollTrigger.create({
//   //     trigger: "#venus",
//   //     start: "top 100%",
//   //     end: "bottom top",
//   //     scrub: 1,
//   //     onUpdate: (self) => {

//   //       const progress = self.progress;

//   //       const interpolatedColor = gsap.utils.interpolate("#000000", " #ffffff", progress);

//   //       changeNavColor(interpolatedColor);
//   //     },

//   //   });

//   //   function changeNavColor(color) {
//   //     gsap.to(".nav-link", {
//   //       color: color,
//   //       borderColor: color,
//   //       duration: 0.1,
//   //       ease: "power1.out",
//   //       onUpdate: () => {
//   //         document.querySelectorAll(".nav-link").forEach((link) => {
//   //           link.style.setProperty("color", color, "important");
//   //           link.style.setProperty("border-color", color, "important");
//   //         });
//   //       },
//   //     });
//   //   }
//   // }, []);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setTimeout(() => {
//         window.scrollTo({
//           top: 0,
//           left: 0, // Ensures horizontal scroll resets
//           behavior: "instant", // No animation to avoid flickering
//         });
//       }, 0);
//     }
//   }, []);

//   const trackDownload = () => {
//     if (typeof window !== "undefined") {
//       // Get stored UTM parameters (platform info)
//       const utm_source = sessionStorage.getItem("utm_source") || "unknown";
//       const utm_medium = sessionStorage.getItem("utm_medium") || "unknown";
//       const utm_campaign = sessionStorage.getItem("utm_campaign") || "unknown";

//       // Google Tag Manager Event (only push to dataLayer)
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({
//         event: "zoaverse_download",
//         event_category: "Download",
//         utm_source,
//         utm_medium,
//         utm_campaign,
//       });
//     }
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const trackRef2 = useRef(null);
//   const [currentIndex2, setCurrentIndex2] = useState(0);
//   const [isAnimating2, setIsAnimating2] = useState(false);

//   // Determine if RTL is active (you might get this from a prop or context)

//   const clonedCards2 = [...originalCards, ...originalCards, ...originalCards];

//   // Initialize the second carousel
//   useEffect(() => {
//     const track = trackRef2.current;
//     if (!track) return;

//     // Adjust initial position for RTL
//     const cardWidthWithGap = dimensions.cardWidth + dimensions.gap;
//     const initialOffset = isRTL
//       ? originalCards.length * cardWidthWithGap
//       : -originalCards.length * cardWidthWithGap;

//     gsap.set(track, { x: initialOffset });
//     setCurrentIndex2(originalCards.length); // Start at first card of middle set
//   }, [dimensions, isRTL]);

//   // Navigation functions for second carousel
//   const handleNext2 = () => {
//     if (isAnimating2) return;
//     setIsAnimating2(true);
//     setCurrentIndex2((prev) => prev + (isRTL ? -1 : 1));
//   };

//   const handleBack2 = () => {
//     if (isAnimating2) return;
//     setIsAnimating2(true);
//     setCurrentIndex2((prev) => prev + (isRTL ? 1 : -1));
//   };

//   // Animation effect for second carousel
//   useEffect(() => {
//     const track = trackRef2.current;
//     if (!track) return;

//     const cardWidthWithGap = dimensions.cardWidth + dimensions.gap;
//     const moveToPosition = isRTL
//       ? currentIndex2 * cardWidthWithGap
//       : -(currentIndex2 * cardWidthWithGap);

//     gsap.to(track, {
//       x: moveToPosition,
//       duration: animationDuration,
//       ease: "power2.inOut",
//       onComplete: () => {
//         if (currentIndex2 >= originalCards.length * 2) {
//           const resetPosition = isRTL
//             ? (currentIndex2 - originalCards.length) * cardWidthWithGap
//             : -((currentIndex2 - originalCards.length) * cardWidthWithGap);
//           gsap.set(track, { x: resetPosition });
//           setCurrentIndex2(currentIndex2 - originalCards.length);
//         } else if (currentIndex2 < originalCards.length) {
//           const resetPosition = isRTL
//             ? (currentIndex2 + originalCards.length) * cardWidthWithGap
//             : -((currentIndex2 + originalCards.length) * cardWidthWithGap);
//           gsap.set(track, { x: resetPosition });
//           setCurrentIndex2(currentIndex2 + originalCards.length);
//         }
//         setIsAnimating2(false);
//       },
//     });
//   }, [currentIndex2, dimensions, isRTL]);
//   // useEffect(()=>{
//   //   if (typeof window !== "undefined"){
//   //     showDiv2();
//   //   }

//   // },[])

//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   // Add this useEffect to simulate/track loading progress
//   useEffect(() => {
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.floor(Math.random() * 7) + 1;
//       if (progress > 100) progress = 100;

//       setLoadingProgress(progress);

//       if (progress === 100) {
//         clearInterval(interval);
//         setTimeout(() => {
//           setIsLoading(false);
//           showDiv2();
//         }, 30); // Small delay after reaching 100%
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0  w-full h-full backdrop-blur-lg z-40"></div>
//       )}
//       <div
//         lang={isRTL ? "ar" : "en"}
//         dir={isRTL ? "rtl" : "ltr"}
//         className="rtl:!font-almarai ltr:!font-montserrat overflow-hidden [&::-webkit-scrollbar]:hidden transition-all bg-black duration-500"
//         id="top-section"
//       >
//         {/* <section id="header" className="header container-fluid">
//           <nav className="navbar navbar-expand-lg bg-transparent !z-[99999999999]">
//             <div
//               id="hedblur"
//               style={{
//                 backgroundColor: "rgba(30, 30, 30, 0.8)",
//                 filter: "blur(10px)",
//                 width: "100vw",
//                 height: "150vh",
//                 zIndex: "-1",
//                 position: "absolute",
//                 display: "none",
//               }}
//             ></div>
//             <div className="container-fluid !z-[99999999999] ">
//               <a className="navbar-brand" href="#">
//                 {" "}
//                 <img
//                   className="logo_en"
//                   src={
//                     isRTL
//                       ? "assets/images/Logo_ar.svg"
//                       : "assets/images/logo.svg"
//                   }
//                   alt="logo_en"
//                 />{" "}
//               </a>
//               <div
//                 style={{
//                   backgroundColor: "#085dff",
//                   padding: "10px",
//                   borderRadius: "6px;",
//                 }}
//                 className="d-lg-none max-lg:hidden"
//               >
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//               </div>
//               <div
//                 className=" lg:navbar-collapse rounded-4  menubg d-lg-flex align-items-end"
//                 id="navbarSupportedContent"
//               >
//                 <div className="flex w-full max-lg:!hidden items-center justify-center">
//                   <ul
//                     className={`navbar-nav  gap-2.5 relative rtl:lg:left-36 ltr:lg:right-36 ltr:right-20 rtl:left-28`}
//                   >
//                     <li className="nav-item">
//                       <a
//                         className={`nav-link  active menubtn px-2 text-lg-center`}
//                         aria-current="page"
//                         onClick={() => scrollToDownload()}
//                       >
//                         {t("downloadText")}
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a
//                         className="nav-link active   menubtn px-2 text-lg-center"
//                         aria-current="page"
//                         onClick={() => scrollToFeatures()}
//                       >
//                         {t("features")}
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a
//                         className="nav-link active   menubtn px-2 text-lg-center"
//                         aria-current="page"
//                         onClick={() => scrollToAvatars()}
//                       >
//                         {t("avatars")}
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a
//                         className="nav-link active   menubtn px-2 text-lg-center"
//                         aria-current="page"
//                         onClick={() => scrollToSpaces()}
//                       >
//                         {t("spaces")}
//                       </a>
//                     </li>
//                   </ul>
//                   <button
//                     onClick={toggleLanguage}
//                     className="langbtn px-3 ps-3 mb-3 mb-lg-0"
//                   >
//                     <span> {i18n.language === "en" ? "عربي" : "English"}</span>
//                   </button>
//                 </div>
//                 <div className="lg:hidden w-full flex items-end justify-end">
//                   <div className="relative ">
//                     <button
//                       onClick={toggleMenu}
//                       className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-blue-600 focus:outline-none transition-all duration-300 z-50"
//                     >
//                       <span
//                         className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
//                           isOpen ? "transform rotate-45 translate-y-2" : ""
//                         }`}
//                       ></span>
//                       <span
//                         className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
//                           isOpen ? "opacity-0" : ""
//                         }`}
//                       ></span>
//                       <span
//                         className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
//                           isOpen ? "transform -rotate-45 -translate-y-2" : ""
//                         }`}
//                       ></span>
//                     </button>

//                     <div
//                       className={`absolute top-12 ltr:right-0 rtl:left-0 w-64 bg-blue-600 rounded-[30px] shadow-lg overflow-hidden transition-all duration-300 ${
//                         isOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <nav className="flex flex-col divide-y divide-white divide-opacity-40 !text-white">
//                         <a
//                           aria-current="page"
//                           onClick={() => scrollToDownload()}
//                           className="py-4 !no-underline px-6 hover:bg-blue-700 uppercase text-white text-[20px] font-normal transition-colors duration-200"
//                         >
//                           {t("downloadText")}
//                         </a>
//                         <a
//                           aria-current="page"
//                           onClick={() => scrollToFeatures()}
//                           className="py-4 px-6 !no-underline hover:bg-blue-700 uppercase transition-colors text-white text-[20px] font-normal duration-200"
//                         >
//                           {t("features")}
//                         </a>
//                         <a
//                           aria-current="page"
//                           onClick={() => scrollToAvatars()}
//                           className="py-4 px-6 !no-underline hover:bg-blue-700 uppercase transition-colors text-white text-[20px] font-normal duration-200"
//                         >
//                           {t("avatars")}
//                         </a>
//                         <a
//                           aria-current="page"
//                           onClick={() => scrollToSpaces()}
//                           className="py-4 px-6 !no-underline hover:bg-blue-700 uppercase transition-colors text-white text-[20px] font-normal duration-200"
//                         >
//                           {t("spaces")}
//                         </a>
//                         <a
//                           href="#arabic"
//                           onClick={toggleLanguage}
//                           className="py-4 px-6 !no-underline hover:bg-blue-700 uppercase transition-colors text-white text-[20px] font-normal duration-200"
//                         >
//                           <span>
//                             {" "}
//                             {i18n.language === "en" ? "عربي" : "English"}
//                           </span>
//                         </a>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </section> */}

//         <div
//           ref={cardRef}
//           className={` fixed ${
//             isRTL
//               ? "xl:left-[200px] lg:left-[100px]"
//               : "right-[100px] lg:right-[100px] xl:right-[200px]"
//           } xl:bottom-[140px] lg:bottom-[80px] bottom-[200px] max-lg:hidden  bg-[#C055F2] rounded-[40px] !z-[10] !w-[300px] xl:!w-[345px] `}
//         >
//           {/* <div className="flex flex-col gap-7 py-[18px]  xl:py-[24px] xl:px-[32px] px-[20px]">
//             <div className="flex flex-row justify-between  pb-6 border-b-[0.5px] border-opacity-15 border-white">
//               <div className="flex flex-col items-start xl:gap-2  text-white text-opacity-60">
//                 <div className="font-semibold xl:text-[40px] md:text-[20px] text-base lg:text-[28px] leading-[48.76px]">
//                   5000+
//                 </div>
//                 <div className="uppercase text-base font-medium leading-[19.5px]">
//                   {t("onlineUsers")}
//                 </div>
//               </div>
//               <div className="xl:w-full lg:w-[60px] self-center flex flex-row justify-end">
//                 <img src="assets/images/annonymous.svg" alt="" />
//               </div>
//             </div>
//             <div className="text-white text-opacity-20 ltr:text-start sm:text-sm text-xs xl:text-base rtl:text-right">
//               {t("onlineSubtext")}
//             </div>
//           </div> */}
//         </div>

//         <div className="container2 hidden ">
//           <div id="div1" className="box overlayhome ">
//             <div className="absolute bg-transparent inset-0 w-full h-full z-10 backdrop-blur-2xl"></div>
//             <div
//               className="main_div triganimation "
//               style={{
//                 backgroundImage: `url('/assets/images/bg2.jpg')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <div className="herosec flex items-center justify-center relative z-20 !w-full">
//                 <div id="logo-gsap">
//                   <img
//                     className="logo_en"
//                     src={
//                       isRTL
//                         ? "assets/images/Logo_ar.svg"
//                         : "assets/images/logo.svg"
//                     }
//                     alt="logo_en"
//                   />
//                 </div>

//                 <div
//                   id="ctn-preloader"
//                   className="ctn-preloader !items-center !flex !justify-center !w-full"
//                 >
//                   <div className="animation-preloader !items-center !flex flex-col !text-white !justify-center !w-full">
//                     <div className="txt-loading !w-full">
//                       {t("welcomeDescription")
//                         .split(" ")
//                         .map((item, ind) => (
//                           <span
//                             data-text-preloader={item}
//                             key={ind}
//                             className="letters-loading !text-transparent font-normal uppercase text-center md:text-[48px] lg:w-[75%] w-full  lg:!text-[64px] sm:!text-[32px] sm:px-5 px-0 !text-[20px] "
//                           >
//                             {item}
//                           </span>
//                         ))}
//                     </div>
//                     <div className="loading-counter flex flex-row gap-3 items-center text-center justify-center text-white my-3">
//                       <p className="!text-xl text-white  font-bold">
//                         {loadingProgress}%
//                       </p>
//                       <div className="flex items-center justify-center text-center self-center">
//                         {/* <p className="!text-center  !self-center  text-white">Loading...</p> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             id="div2"
//             className="p2 triganimation box box_parent "
//             style={{
//               backgroundImage: `url('/assets/images/homeback.png')`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             {/* <div id="div3">
//               <div
//                 id="videoDiv"
//                 className={`video-container  flex-column ${
//                   isRTL ? "rtl-video-card" : "gendiv"
//                 }`}
//               >
//                 <video
//                   id="roundvideo"
//                   className="roundvideo"
//                   autoPlay
//                   muted
//                   loop
//                   preload="yes"
//                   playsInline
//                 >
//                   <source src="assets/images/p2_video.mp4" type="video/mp4" />
//                 </video>
//                 <img
//                   id="roundpic"
//                   src="assets/images/videofront.png"
//                   className="roundpic"
//                   alt="gradient "
//                 />
//                 <div className="caption content container-fluid">
//                   <div className="row cardntext flex flex-row gap-16 items-center justify-between">
//                     <div
//                       id="textdiv"
//                       className="col-lg-6 text-start d-flex flex-column textdiv gap-1  "
//                     >
//                       <span className="p2h rtl:text-right  rtl:relative rtl:-top-10">
//                         {t("boundlessWorlds")}
//                       </span>
//                       <span className="p2span ps-lg-2 mt-2 rtl:text-right ">
//                         {t("boundlessWorldDesciption")}
//                       </span>
//                       <div
//                         className="md:w-[347px] uppercase self-start text-sm md:text-base text-white font-medium items-center justify-center flex flex-row gap-4 rounded-full mt-4 hover:border-white hover:border cursor-pointer md:h-[73px] md:px-6 px-4 py-4 md:py-8 bg-[#085DFF]"
//                         onClick={scrollToDownload}
//                       >
//                         <div>{t("jumpIntoTheVerse")}</div>
//                         <div>
//                           <img src="assets/images/apple.svg" alt="" />
//                         </div>
//                         <div>
//                           <img src="assets/images/windows.svg" alt="" />
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       id="usersCard"
//                       className={` lg:hidden bg-[#C055F2] rounded-[40px] !z-[10] !w-[250px] ml-2 mb-2 xl:!w-[345px] `}
//                     >
//                       <div className="flex flex-col gap-7 py-[18px]  xl:py-[24px] xl:px-[32px] px-[10px]">
//                         <div className="flex flex-row justify-between  pb-6 border-b-[0.5px] border-opacity-15 border-white">
//                           <div className="flex flex-col items-start xl:gap-2  text-white text-opacity-60">
//                             <div className="font-semibold xl:text-[40px] md:text-[20px] text-base lg:text-[28px] leading-[48.76px]">
//                               5000+
//                             </div>
//                             <div className="uppercase text-base font-medium leading-[19.5px]">
//                               {t("onlineUsers")}
//                             </div>
//                           </div>
//                           <div className="xl:w-full w-[50px] lg:w-[60px] self-center flex flex-row justify-end">
//                             <img src="assets/images/annonymous.svg" alt="" />
//                           </div>
//                         </div>
//                         <div className="text-white text-opacity-20 ltr:text-start sm:text-sm text-xs xl:text-base rtl:text-right">
//                           {t("onlineSubtext")}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                 <filter id="flt_tag">
//                   <feGaussianBlur
//                     in="SourceGraphic"
//                     stdDeviation="8"
//                     result="blur"
//                   />
//                   <feColorMatrix
//                     in="blur"
//                     mode="matrix"
//                     values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
//                     result="flt_tag"
//                   />
//                   <feComposite
//                     in="SourceGraphic"
//                     in2="flt_tag"
//                     operator="atop"
//                   />
//                 </filter>
//               </defs>
//             </svg>
//           </div>
//         </div>
//         <div style={{ direction: "ltr" }} className="max-md:!hidden">
//           <div id="sec2" className="container1   !z-[20] ">
//             <div className="swipersec hori-1">
//               <div id="pdiv2" className="main_div2">
//                 <div
//                   className="updiv bg-white rounded-5 row overflow-hidden downContainer"
//                   style={{
//                     // scrollSnapAlign: "start",
//                     width: "90%",
//                     padding: "3%",
//                   }}
//                   ref={firstSectionRef}
//                 >
//                   <div className="row flex md:flex-row flex-col">
//                     <div className="col-lg-5 order-lg-1 order-2 pt-2 pt-lg-0 down-main relative z-[5]">
//                       <div className="row gap-lg-4 gap-2 div-mob">
//                         <span ref={headingRef} className="p3h pt-3 pt-lg-0">
//                           {t("heading2")}
//                         </span>
//                         <span ref={descriptionRef} className="p3span pe-5">
//                           {t("desciption2")}
//                         </span>
//                       </div>

//                       <div ref={buttonsRef} className="row divpading">
//                         <a
//                           className=" bg-transparent border-0 download-btn"
//                           href="https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg"
//                           target="_blank"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             trackDownload();
//                             setTimeout(() => {
//                               window.location.href =
//                                 "https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg";
//                             }, 300);
//                           }}
//                         >
//                           <img
//                             src="assets/images/mac.png"
//                             className="w-[200px]"
//                             alt="Apple logo_en"
//                           />
//                         </a>
//                         <a
//                           className="bg-transparent border-0 download-btn"
//                           href="https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe"
//                           target="_blank"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             trackDownload();
//                             setTimeout(() => {
//                               window.location.href =
//                                 "https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe";
//                             }, 300);
//                           }}
//                         >
//                           <img
//                             src="assets/images/windows.png"
//                             className="w-[200px]"
//                             alt="Windows logo_en"
//                           />
//                         </a>
//                       </div>
//                     </div>

//                     <div
//                       ref={peopleRef}
//                       className="absolute !px-0 lg:ltr:left-[20%] lg:rtl:left-[20%]"
//                     >
//                       <img
//                         src="/assets/images/peoples.png"
//                         alt="People"
//                         className="absolute md:!min-w-max md:!h-[700px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="fstswiper hori-2  swipersec d-flex flex-column ">
//               <div className="swipersecw">
//                 <div className="row d-flex rtl:flex-row-reverse align-items-start justify-content-start">
//                   <div style={{ width: "5%" }}></div>
//                   <div
//                     id="horizntlswiper"
//                     className="col-8 relative top-10 text-start d-flex flex-column rtl:leading-[40px] pt-5 movtext"
//                   >
//                     <span className="slide3f1 lg:text-[28px] md:text-[24px] rtl:leading-[70px] sm:text-[20px] text-[18px] rtl:text-right">
//                       {t("whyChooseText")}
//                     </span>
//                     <span className="slide3h lg:text-[96px] md:text-[72px] sm:text-[64px] text-[48px] rtl:relative rtl:-top-5 rtl:text-right">
//                       {t("zoaverseText")}
//                     </span>
//                     <span className="slide3f2 rtl:text-right ">
//                       {t("zoaverseSubtext")}
//                     </span>
//                   </div>
//                 </div>

//                 <div
//                   className="pt-5 position-relative swiper3"
//                   id="fstswiper"
//                   ref={fstswiperRef}
//                 >
//                   <div className="carousel-container md:w-full w-[330px]">
//                     <div className="carousel-track" ref={trackRef}>
//                       {clonedCards.map((card, index) => (
//                         <div
//                           key={index}
//                           className={`card-new   text-white  h-max  flex flex-col gap-3 pb-3 p-1`}
//                           style={{ background: `${card.bgColor}` }}
//                         >
//                           <div className="">
//                             <img
//                               src={card.path}
//                               alt=""
//                               className=" rounded-[34px] w-full h-full"
//                             />
//                           </div>
//                           <div className="px-3 flex flex-col gap-4">
//                             <div className="font-semibold md:leading-[39px] sm:leading-[24px] leading-[20px] sm:text-[20px] text-[16px] md:text-[32px] rtl:text-right">
//                               {card.header}
//                             </div>
//                             <div className="font-normal md:leading-[17px] sm:leading-[14px] sm:text-sm text-xs leading-normal md:text-base rtl:text-right">
//                               {card.description}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="nav_buttons  rtl:left-[4%]  max-md:!w-[90px]  ">
//                     <button
//                       className={`carousel-btn max-md:!w-[32px] max-md:!h-[32px] swiperbtnnext btnclass swiper-button-next next-new ${
//                         isAnimating1 ? "disabled" : ""
//                       }`}
//                       style={{
//                         color: "black",
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                       }}
//                       onClick={handleNext}
//                       disabled={isAnimating1}
//                     ></button>
//                     <button
//                       className={`carousel-btn max-md:!w-[32px] max-md:!h-[32px] prev-new swiper-button-prev swiperbtnprev btnclass ${
//                         isAnimating1 ? "disabled" : ""
//                       }`}
//                       onClick={handleBack}
//                       style={{
//                         color: "black",
//                         borderRadius: "50%",
//                         width: "50px",
//                         height: "50px",
//                       }}
//                       disabled={isAnimating1}
//                     ></button>
//                   </div>
//                 </div>
//                 <div
//                   className="position-absolute  max-md:-bottom-0"
//                   id="falling-img"
//                   ref={fallingImgRef}
//                 >
//                   <img
//                     style={{ width: "100vw" }}
//                     src="./assets/images/swiperbackgr.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-10 px-10 h-full md:hidden">
//           <div
//             className=" bg-white rounded-5 row overflow-hidden h-[85dvh]"
//             id="mob-download"
//           >
//             <div className="row flex md:flex-row flex-col">
//               <div className="flex flex-col w-full h-full items-end justify-end gap-3 ltr:ml-3 rtl:mr-3 relative z-[5]">
//                 <div className="flex flex-col gap-2 relative bottom-10">
//                   <div ref={headingRef} className="p3h pt-3 pt-lg-0">
//                     {t("heading2")}
//                   </div>
//                   <div ref={descriptionRef} className="p3span ">
//                     {t("desciption2")}
//                   </div>
//                 </div>
//                 <div ref={buttonsRef} className="self-start relative bottom-10">
//                   <a
//                     className=" bg-transparent border-0 download-btn"
//                     href="https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg"
//                     target="_blank"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       trackDownload();
//                       // Add small delay to ensure tracking fires before download starts
//                       setTimeout(() => {
//                         window.location.href =
//                           "https://api.zoaverse.com/Download/?version=0.7.5&platform=mac&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.dmg";
//                       }, 300);
//                     }}
//                     // onClick={() =>
//                     //   (window.location.href =
//                     //     "https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/Zoa+Hub+0.2.1.1.exe")
//                     // }
//                   >
//                     <img
//                       src="assets/images/mac.png"
//                       className="w-[200px]"
//                       alt="Apple logo_en"
//                     />
//                   </a>
//                   <a
//                     className="bg-transparent border-0 download-btn"
//                     href="https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe"
//                     target="_blank"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       trackDownload();
//                       // Add small delay to ensure tracking fires before download starts
//                       setTimeout(() => {
//                         window.location.href =
//                           "https://api.zoaverse.com/Download/?version=0.7.5&platform=windows&downloadUrl=https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/ZoaLauncher-0.7.5.exe";
//                       }, 300);
//                     }}
//                     // onClick={() =>
//                     //   (window.location.href =
//                     //     "https://zoamainbucket.s3.eu-west-1.amazonaws.com/Data/Launcher/Zoa+Hub+0.2.1.1.exe")
//                     // }
//                   >
//                     <img
//                       src="assets/images/windows.png"
//                       className="w-[200px]"
//                       alt="Windows logo_en"
//                     />
//                   </a>
//                 </div>
//               </div>
//               <div
//                 ref={peopleRef}
//                 className="absolute !px-0 ltr:left-0 rtl:right-0"
//               >
//                 <img
//                   src="/assets/images/peoples.png"
//                   alt="People"
//                   className="absolute md:!min-w-max md:!h-[700px]"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className=" hori-2   d-flex flex-column " id="mob-features">
//             <div className="">
//               <div className="row d-flex rtl:flex-row-reverse align-items-start justify-content-start mb-10">
//                 <div style={{ width: "5%" }}></div>
//                 <div
//                   id="horizntlswiper"
//                   className="col-8 relative top-10 text-start d-flex flex-column pt-5 movtext"
//                 >
//                   <span className="slide3f1 lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] rtl:text-right">
//                     {t("whyChooseText")}
//                   </span>
//                   <span className="slide3h lg:text-[96px] md:text-[72px] sm:text-[64px] text-[48px] rtl:relative rtl:-top-5 rtl:text-right">
//                     {t("zoaverseText")}
//                   </span>
//                   <span className="slide3f2 rtl:text-right ">
//                     {t("zoaverseSubtext")}
//                   </span>
//                 </div>
//               </div>
//               <div className="second-carousel-section">
//                 <div className="pt-5 position-relative">
//                   <div className="md:w-full w-[330px]">
//                     <div className="carousel-track" ref={trackRef2}>
//                       {clonedCards2.map((card, index) => (
//                         <div
//                           key={index}
//                           className={`card-new text-white h-max flex flex-col gap-3 pb-3 p-1`}
//                           style={{ background: `${card.bgColor}` }}
//                         >
//                           <div className="">
//                             <img
//                               src={card.path}
//                               alt=""
//                               className="rounded-[34px] w-full h-full"
//                             />
//                           </div>
//                           <div className="px-3 flex flex-col gap-4">
//                             <div className="font-semibold md:leading-[39px] sm:leading-[24px] leading-[20px] sm:text-[20px] text-[16px] md:text-[32px] rtl:text-right">
//                               {card.header}
//                             </div>
//                             <div className="font-normal md:leading-[17px] sm:leading-[14px] sm:text-sm text-xs leading-normal md:text-base rtl:text-right">
//                               {card.description}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="nav_buttons rtl:left-[4%] max-md:!w-[90px]">
//                     <button
//                       className={`carousel-btn max-md:!w-[32px] max-md:!h-[32px] swiperbtnnext btnclass swiper-button-next next-new-2 ${
//                         isAnimating2 ? "disabled" : ""
//                       }`}
//                       style={{
//                         color: "black",
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                       }}
//                       onClick={handleNext2}
//                       disabled={isAnimating2}
//                     ></button>
//                     <button
//                       className={`carousel-btn max-md:!w-[32px] max-md:!h-[32px] prev-new-2 swiper-button-prev swiperbtnprev btnclass ${
//                         isAnimating2 ? "disabled" : ""
//                       }`}
//                       onClick={handleBack2}
//                       style={{
//                         color: "black",
//                         borderRadius: "50%",
//                         width: "50px",
//                         height: "50px",
//                       }}
//                       disabled={isAnimating2}
//                     ></button>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="position-absolute  max-md:-bottom-0"
//                 id="falling-img"
//                 ref={fallingImgRef2}
//               >
//                 <img
//                   style={{ width: "100vw" }}
//                   src="./assets/images/swiperbackgr.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           id="d1"
//           ref={d1Ref}
//           className="main_divlast  position-relative mt-52 d-flex align-items-center"
//         >
//           <div
//             className="pb-3 bg-white max-sm:h-max sm:!h-[1100px] d-flex text-center align-items-end justify-content-center"
//             style={{
//               width: "90%",
//               borderRadius: "40px",
//               background: "linear-gradient(180deg, #a6a5a5 0%, #f1f1f1 38.9%)",
//               marginTop: "10%",
//             }}
//             id="d2"
//           >
//             <div className="d-flex bg-div flex-column align-items-center justify-content-center">
//               <img
//                 className="avatarsdk-band img1  dynamicdisplay translate-y-[0px] xl:-translate-y-[600px]"
//                 src="assets/images/avatars.png"
//               />
//               <img
//                 className="avatarsdk-band img1 dynamicdisplay2  "
//                 src="assets/images/avatars.png"
//               />

//               <div className="div-3 t1">
//                 <p className="we-work-hard-play">{t("heading3")}</p>
//                 <p className="p text-black">{t("headingSubdescription")}</p>
//               </div>

//               <div className="group rtl:right-[5%] c1 d-lg-block  d-none ">
//                 <div className="overlap-group-2">
//                   <div className="rectangle"></div>
//                   <div className="rectangle-2"></div>
//                   <div className="div-2">
//                     <div className="text-wrapper">{t("personalized")}</div>
//                     <p className="p text-black">{t("personalizedText")}</p>
//                   </div>
//                   <div className="ellipse"></div>
//                   <img className="vector s1" src="assets/images/Vector.png" />
//                 </div>
//               </div>
//               <div className="group  d-block d-lg-none max-md:margin-[20px]">
//                 <div className="overlap-group-2">
//                   <div className="rectangle"></div>
//                   <div className="rectangle-2"></div>
//                   <div className="div-2">
//                     <div className="text-wrapper">{t("personalized")}</div>
//                     <p className="p">{t("personalizedText")}</p>
//                   </div>
//                   <div className="ellipse"></div>
//                   <img className="vector s1" src="assets/images/Vector.png" />
//                 </div>
//               </div>

//               <div className="ltr:overlap-group-wrapper rtl:overlap-group-wrapper-rtl c2 d-lg-block ltr:!right-[4%] ltr:absolute ltr:top-[60%] text-start d-flex flex-column pt-5 movtext] rtl:!absolute rtl:!left-[4%] rtl:!top-[64%] d-none r  ">
//                 <div className="overlap-group-2">
//                   <div className="rectangle-3"></div>
//                   <div className="rectangle-2c"></div>
//                   <div className="div-2">
//                     <div className="text-wrapper">{t("expressiveText")}</div>
//                     <p className="p4">{t("expressiveSubtext")}</p>
//                   </div>
//                   <div className="ellipse"></div>
//                   <img
//                     className="vector"
//                     src="assets/images/smile-circle-svgrepo-com 1.png"
//                   />
//                 </div>
//               </div>
//               <div className="ltr:overlap-group-wrapper rtl:overlap-group-wrapper-rtl d-block d-lg-none rtl:md:p-5 rtl:max-sm:p-5 rtl:lg:p-0  rtl:max-md:px-5 rtl:max-md:pt-5 ltr:max-md:m-[20px] ">
//                 <div className="overlap-group-2">
//                   <div className="rectangle-3"></div>
//                   <div className="rectangle-2c"></div>
//                   <div className="div-2">
//                     <div className="text-wrapper">{t("expressiveText")}</div>
//                     <p className="p">{t("expressiveSubtext")}</p>
//                   </div>
//                   <div className="ellipse"></div>
//                   <img
//                     className="vector"
//                     src="assets/images/smile-circle-svgrepo-com 1.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             className="ltr:md:left-[10%] ltr:left-2 rtl:right-2 rtl:md:right-[10%]  -top-[0px]  absolute w-[14%] md:w-[8%] e1 rotate-90"
//             id="emoji-1"
//             src="assets/images/Asset 5@4x 1.png"
//           />
//           <img
//             className=" e2 absolute bottom-40 ltr:left-[10%] rtl:right-[10%] max-md:bottom-10 rtl:max-md:right-5 max-md:size-20 ltr:max-md:left-5 "
//             src="assets/images/Asset 10@4x 1.png"
//           />

//           <img
//             id="emoji-2"
//             className=" absolute ltr:sm:left-[70%] rtl:right-[70%] !w-[20%] -top-[170px] -rotate-[110deg] lg:!w-[12%]  max-sm:ltr:!left-[78%] max-sm:ltr:!right-[78%]"
//             src="assets/images/Asset 1@4x 1.png"
//           />
//           <img
//             id="emoji-3"
//             className=" lg:h-[280px] md:h-[200px] md:w-[200px] w-[180px] lg:w-[280px] absolute ltr:left-[74%] rtl:right-[70%]  ltr:rotate-[-90deg] rtl:rotate-[90deg]"
//             src="assets/images/Asset 12@4x 1.png"
//           />
//         </div>
//         <div
//           className="w-full my-slider max-md:px-2 md:px-5 lg:!px-24 py-2 md:py-10 max-lg:h-[750px] lg:h-dvh self-center "
//           id="venus"
//         >
//           <div
//             ref={containerRef1}
//             className="relative max-lg:h-full lg:h-dvh flex items-center justify-start overflow-hidden"
//           >
//             <div
//               className="absolute flex items-center  w-full"
//               id="carousal-bottom"
//             >
//               {getVisibleItems().map((item, index) => {
//                 const isMiddleCard = index === Math.floor(items.length / 2) - 1;
//                 return (
//                   <div
//                     key={item.id}
//                     ref={(el) => (itemsRef.current[index] = el)}
//                     className={`lg:!h-[750px] max-lg:h-[512px] rounded-lg self-start !transition relative overflow-hidden ${item.bg}`}
//                     style={{
//                       minWidth: "0%",
//                     }}
//                   >
//                     <div
//                       className="rounded-[40px] absolute h-full w-full"
//                       style={{
//                         background:
//                           "linear-gradient(0deg, #085DFF 13.75%, rgba(8, 93, 255, 0) 39.24%)",
//                       }}
//                     />
//                     <div className="absolute h-full w-full">
//                       <div className="h-full text-white px-4 relative flex flex-col gap-2 w-max justify-end">
//                         <h3>{item.heading}</h3>
//                         <p
//                           className="max-sm:!text-wrap max-sm:!w-[400px]"
//                           ref={(el) => (subHeadingRef.current[index] = el)}
//                           style={{
//                             width: "500px",
//                             paddingRight: `${isRTL ? "0px" : "170px"}`,
//                             paddingLeft: `${isRTL ? "170px" : "0px"}`,
//                           }}
//                         >
//                           {item.subHeading}
//                         </p>
//                       </div>
//                     </div>
//                     <img
//                       src={item.imgSrc}
//                       alt=""
//                       className="object-cover h-full w-full rounded-[40px]"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             <div
//               className={`absolute max-lg:translate-y-[210px] lg:translate-y-[320px] h-[512px] self-center flex flex-row items-center justify-center  w-full ${
//                 isOpen ? "z-30" : "z-50"
//               }`}
//             >
//               <div className="w-[40%] "></div>
//               <div className=" w-full mx-[10px] flex flex-row gap-2 justify-end ltr:mr-10 rtl:ml-10">
//                 <button
//                   onClick={() => animateCarousel("prev")}
//                   className="  z-10 bg-white/80 hover:bg-white p-3 w-12 h-12 flex flex-row items-center justify-center rotate-180 rounded-full shadow-lg"
//                 >
//                   <img
//                     src={"assets/images/arrowIcon-1.svg"}
//                     alt=""
//                     className="rtl:rotate-180"
//                   />
//                 </button>
//                 <button
//                   onClick={() => animateCarousel("next")}
//                   className="  z-10 bg-white/80 hover:bg-white p-3 rounded-full w-12 h-12 flex flex-row items-center justify-center shadow-lg"
//                 >
//                   <img
//                     src={"assets/images/arrowIcon-1.svg"}
//                     alt=""
//                     className="rtl:rotate-180"
//                   />
//                 </button>
//               </div>
//               <div className="w-[40%] max-sm:hidden"></div>
//             </div>
//           </div>
//         </div>

//         <div className="main_divfooter  d-flex flex-column gap-3 gap-lg-0 !z-50">
//           <div className="f-size row">
//             <div className="d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-0">
//               <div className="col-lg-4 gap-lg-5 gap-2  d-flex flex-column justify-content-center  align-items-center  align-items-lg-start ">
//                 <img
//                   className="logo_en"
//                   src={
//                     isRTL
//                       ? "assets/images/Logo_ar.svg"
//                       : "assets/images/logo.svg"
//                   }
//                 />
//                 <div className="gap-3 d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center text-white">
//                   <a
//                     className="nav-link rtl:py-4  rtl:h-[30px] rtl:!flex rtl:!items-center rtl:!justify-center rtl:!text-center active menubtnf px-2 text-lg-center"
//                     aria-current="page"
//                     onClick={() => scrollToDownload()}
//                   >
//                     {t("downloadText")}
//                   </a>
//                   <a
//                     className="nav-link active menubtnf px-2 text-lg-center rtl:h-[30px] rtl:!flex rtl:!items-center rtl:!justify-center rtl:!text-center "
//                     aria-current="page"
//                     onClick={() => scrollToFeatures()}
//                   >
//                     {t("features")}
//                   </a>
//                   <a
//                     className="nav-link active menubtnf px-2 text-lg-center rtl:h-[30px] rtl:!flex rtl:!items-center rtl:!justify-center rtl:!text-center "
//                     aria-current="page"
//                     onClick={() => scrollToAvatars()}
//                   >
//                     {t("avatars")}
//                   </a>
//                   <a
//                     className="nav-link active menubtnf px-2 text-lg-center rtl:h-[30px] rtl:!flex rtl:!items-center rtl:!justify-center rtl:!text-center "
//                     aria-current="page"
//                     onClick={() => scrollToSpaces()}
//                   >
//                     {t("spaces")}
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-4 d-flex gap-4 flex-column align-items-center !flex !items-center !w-full  !self-end justify-content-center order-2 order-lg-1">
//                 <span className="text-white txtfs">{t("followUs")}</span>
//                 <div className="d-flex gap-3 align-items-center justify-content-center">
//                   <a
//                     className="d-none"
//                     href="https://x.com/zoa_verse_"
//                     target="_blank"
//                   >
//                     <img
//                       id="f1"
//                       src="./assets/images/fb.svg"
//                       className="bg-transparent  p-2 rounded-4   "
//                     />
//                     <img
//                       id="f2"
//                       src="./assets/images/fb2.svg"
//                       className="bg-white p-2  rounded-4 hidden"
//                     />
//                   </a>

//                   <a
//                     href="https://x.com/zoa_verse_"
//                     target="_blank"
//                     className=" hover:rounded-[14px] hover:bg-white "
//                   >
//                     <img
//                       id="x1"
//                       src="./assets/images/xicon.svg"
//                       className="bg-transparent  hover:invert  p-2 rounded-4 "
//                     />
//                     {/* <img
//                     id="x2"
//                     src="./assets/images/xiconb.svg"
//                     className="bg-white p-2  rounded-4 hidden"
//                   /> */}
//                   </a>

//                   <a
//                     href="https://www.instagram.com/zoa.verse/"
//                     target="_blank"
//                   >
//                     <img
//                       id="i1"
//                       src="./assets/images/insta.svg"
//                       className="bg-transparent  p-2 rounded-4 "
//                     />
//                     <img
//                       id="i2"
//                       src="./assets/images/insta2.svg"
//                       className="bg-white p-2  rounded-4 hidden"
//                     />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/company/zoaverse/"
//                     target="_blank"
//                   >
//                     <img
//                       id="l1"
//                       src="./assets/images/link.svg"
//                       className="bg-transparent  p-2 rounded-3 "
//                     />
//                     <img
//                       id="l2"
//                       src="./assets/images/link2.svg"
//                       className="bg-white p-2  rounded-3 hidden"
//                     />
//                   </a>

//                   <a href="https://www.youtube.com/@zoaverse" target="_blank">
//                     <img
//                       id="y1"
//                       src="./assets/images/utb.svg"
//                       className="bg-transparent  p-2 rounded-4 "
//                     />
//                     <img
//                       id="y2"
//                       src="./assets/images/utb2.svg"
//                       className="bg-white p-2  rounded-4 hidden"
//                     />
//                   </a>

//                   <a href="https://www.tiktok.com/@zoa.verse" target="_blank">
//                     <img
//                       id="t1"
//                       src="./assets/images/tiktok.svg"
//                       className="bg-transparent  p-2 rounded-4 "
//                     />
//                     <img
//                       id="t2"
//                       src="./assets/images/tiktok2.svg"
//                       className="bg-white p-2  rounded-4 hidden"
//                     />
//                   </a>
//                 </div>
//                 <span className="text-white emailtxt opacity-75 ">
//                   <a className="nav-link" href="mailto:zoa@zoaverse.com">
//                     zoa@zoaverse.com
//                   </a>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="row w-100 h-25">
//             <div className="container-fluid d-flex align-items-center justify-content-center">
//               <div className="bg-white rounded-top-5 d-flex  pt-lg-3 align-items-center  pe-4 flex-column flex-lg-row tpcwh">
//                 <div className="d-flex col-lg-4 text-center  flex-wrap  gap-lg-3 privacytxt flex-lg-row ps-lg-5  p-3 p-lg-0 justify-content-center  justify-content-lg-start gap-3 gap-lg-0   ">
//                   <span>
//                     <a
//                       href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/alshrwt-w-alahkam"
//                       target="_blank"
//                     >
//                       {" "}
//                       {t("termsOfUse")}
//                     </a>
//                   </span>
//                   <span>
//                     <a
//                       href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/syash-alkhswsyh"
//                       target="_blank"
//                     >
//                       {t("privacyPolicyText")}
//                     </a>
//                   </span>
//                   <span>
//                     <a
//                       className=""
//                       href="mailto:zoa@zoaverse.com"
//                       target="_blank"
//                     >
//                       {t("contact")}
//                     </a>
//                   </span>
//                 </div>
//                 <div className="col-4"></div>
//                 <div className="col-lg-4 d-flex align-items-end justify-content-end pt-2 pt-lg-0">
//                   <span className="copytxt">
//                     {" "}
//                     <span>{t("copyrightText")}</span> @ ZOAVERSE - 2025{" "}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
