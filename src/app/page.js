import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MediaCarousel from "@/components/MediaCarousel";
import EventsSection from "@/components/EventsSection";
import EcosystemSection from "@/components/EcosystemSection";
import Image from "next/image";


export default function Page() {
  return (
    <>
      <div className="relative bg-[#0b0b0c] text-white overflow-hidden">
        <HeroSection />
        <div
          className="absolute left-0 w-full z-[1] pointer-events-none"
          style={{
            top: "60%", // adjust this value depending on HeroSection height
            transform: "translateY(-50%)", // centers overlap area
            animation: "fall 5s infinite linear",
          }}
        >
          <Image
            src="/assets/images/Frame-48.png"
            alt="falling background"
            className="w-full opacity-70 h-[460px]"
            width={1080}
            height={460}
          />
        </div>
        <GallerySection />
      </div>
      <AboutSection />
      <MediaCarousel />
      <EventsSection />
      {/* <EcosystemSection /> */}
    </>
  );
}


// "use client";
// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import useGsap from "@/hooks/useGsap";
// import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";

// export default function EventsSection() {
//   useGsap();
//   const rootRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRefs = useRef([]);

//   const events = [
//     {
//       id: 1,
//       title: "Event Name",
//       date: "Monday",
//       time: "12:00 PM",
//       fullDate: "24 May 2024",
//       timezone: "KSA Time",
//       description: "Zoaverse provides a wide selection of customizable venues that makes..",
//       image: "/assets/images/event-1.png",
//     },
//     {
//       id: 2,
//       title: "Gaming Tournament",
//       date: "Wednesday",
//       time: "7:00 PM",
//       fullDate: "17 May 2025",
//       timezone: "KSA Time",
//       description: "Compete with players from around the world in our exclusive gaming tournament.",
//       image: "/assets/images/event-2.png",
//     },
//     {
//       id: 3,
//       title: "Virtual Workshop",
//       date: "Friday",
//       time: "2:00 PM",
//       fullDate: "19 May 2025",
//       timezone: "KSA Time",
//       description: "Join our interactive workshop to learn new skills and connect with like-minded individuals.",
//       image: "/assets/images/event-3.png",
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % events.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [events.length]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       gsap.from(slideRefs.current, {
//         y: 40,
//         autoAlpha: 0,
//         stagger: 0.15,
//         duration: 0.6,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });
//     }, rootRef);

//     return () => ctx.revert();
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
//   };

//   return (
//     <section ref={rootRef} className="relative bg-black py-24 overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-8">
//         {/* Main Content Container with Light Grey Background */}
//         <div className="bg-gray-200 rounded-3xl p-8 lg:p-12">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left Content Area */}
//             <div className="space-y-6">
//               {/* Title */}
//               <div className="space-y-2">
//                 <h2 className="text-2xl lg:text-3xl font-normal uppercase text-gray-700 tracking-wide">
//                   HAPPENING
//                 </h2>
//                 <h2 className="text-4xl lg:text-6xl font-bold uppercase text-gray-800 tracking-wide">
//                   NOW
//                 </h2>
//               </div>
              
//               {/* Description */}
//               <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-md">
//                 Stay connected to live events unfolding inside Zoaverse. From conferences and workshops to concerts and community meetups, there's always something exciting to join.
//               </p>
              
//               {/* Navigation Controls - Right Aligned */}
//               <div className="flex gap-3 justify-end">
//                 <button
//                   onClick={prevSlide}
//                   className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 transition-colors"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Event Cards Area */}
//             <div className="relative">
//               <div className="flex gap-4 overflow-hidden">
//                 {events.map((event, index) => (
//                   <div
//                     key={event.id}
//                     ref={(el) => (slideRefs.current[index] = el)}
//                     className={`relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden transition-all duration-500 ${
//                       index === currentSlide 
//                         ? 'opacity-100 scale-100' 
//                         : 'opacity-30 scale-95'
//                     }`}
//                   >
//                     {/* Event Image */}
//                     <div
//                       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                       style={{
//                         backgroundImage: `url(${event.image})`,
//                       }}
//                     >
//                       {/* Gradient Overlay - Only on active card */}
//                       {index === currentSlide && (
//                         <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-blue-900/40 to-transparent"></div>
//                       )}
                      
//                       {/* Event Details Overlay - Only on active card */}
//                       {index === currentSlide && (
//                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                           <h3 className="text-xl font-bold mb-3">
//                             {event.title}
//                           </h3>
                          
//                           <div className="flex items-center justify-between mb-2">
//                             <div className="flex items-center gap-2">
//                               <Calendar size={14} />
//                               <span className="text-sm">{event.date}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Clock size={14} />
//                               <span className="text-sm">{event.time}</span>
//                             </div>
//                           </div>
                          
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="text-sm text-white/80">{event.fullDate}</span>
//                             <span className="text-sm text-white/80">{event.timezone}</span>
//                           </div>
                          
//                           <p className="text-sm text-white/90 leading-relaxed">
//                             {event.description}
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }