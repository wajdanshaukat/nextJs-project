"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#avatars", label: "Avatars" },
    { href: "#media", label: "Media" },
    { href: "#news", label: "News" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="header"
      className="w-full px-6 sm:px-8 fixed top-0 left-0 z-[9999] bg-transparent"
    >
      <nav className="relative bg-transparent">
        {/* Background blur overlay */}
        {open && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-md z-[50] transition-opacity duration-500"></div>
        )}

        {/* Main Navbar */}
        <div className="w-full flex items-center justify-between px-2 py-4 relative z-[60]">
          {/* Left - logo + tabs */}
          <div className="flex items-end gap-8">
            <Link href="#" className="flex items-center">
              <Image
                src="/assets/images/logo.svg"
                alt="Zoaverse logo"
                width={300}
                height={120}
                className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="border-2 border-white rounded-full px-4 py-2 text-white text-lg tracking-wide hover:bg-white hover:text-black transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - language + hamburger */}
          <div className="flex items-center gap-4" ref={menuRef}>
            {/* Arabic Button (Desktop Only) */}
            <button className="hidden lg:block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 border border-white transition cursor-pointer">
              العربية
            </button>

            {/* Mobile Hamburger */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="relative w-16 h-10 flex items-center justify-center rounded-full bg-blue-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 shadow-md"
              >
                {/* Animated Icon Transition */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <TbMenuDeep
                    className={`absolute text-white w-7 h-7 transform transition-all duration-300 ease-in-out ${
                      open
                        ? "opacity-0 scale-0 rotate-90"
                        : "opacity-100 scale-100 rotate-0"
                    }`}
                  />
                  <IoClose
                    className={`absolute text-white w-7 h-7 transform transition-all duration-300 ease-in-out ${
                      open
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-0 -rotate-90"
                    }`}
                  />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full transition duration-300 opacity-0 hover:opacity-40 bg-blue-400 blur-md"></div>
              </button>

              {/* Mobile Dropdown (below hamburger) */}
              <div
                className={`absolute right-0 mt-3 bg-blue-600 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open
                    ? "max-h-[500px] opacity-100 visible w-[250px]"
                    : "max-h-0 opacity-0 invisible w-[250px]"
                }`}
              >
                <nav className="flex flex-col divide-y divide-white divide-opacity-40 text-white text-center">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        scrollToSection(item.href.replace("#", ""));
                        setOpen(false);
                      }}
                      className="py-4 px-6 uppercase text-[16px] hover:bg-blue-700 transition"
                    >
                      {item.label}
                    </button>
                  ))}

                  {/* Arabic button inside dropdown */}
                  <button
                    onClick={() => setOpen(false)}
                    className="py-4 px-6 text-[16px] uppercase hover:bg-blue-700 transition"
                  >
                    العربية
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Languages, Download } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { href: "#features", label: "Features" },
//     { href: "#avatars", label: "Avatars" },
//     { href: "#media", label: "Media" },
//     { href: "#news", label: "News" },
//   ];

//   return (
//     <header className="fixed top-0 inset-x-0 z-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b0b0ccc] backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0cb3]">
//           <div className="flex h-14 items-center justify-between px-4">
//             {/* Brand */}
//             <Link href="#" className="flex items-center gap-2 text-white">
//               <Image src="/file.svg" alt="Zoaverse" className="h-6 w-6" />
//               <span className="font-semibold tracking-wide">ZOAVERSE</span>
//             </Link>

//             {/* Desktop nav */}
//             <nav className="hidden md:flex items-center gap-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="text-xs uppercase tracking-wider text-white/80 hover:text-white border border-white/10 px-3 py-1.5 rounded-full"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>

//             {/* Actions */}
//             <div className="hidden md:flex items-center gap-2">
//               <button className="inline-flex items-center gap-1 text-xs text-white/90 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5">
//                 <Languages size={14} />
//                 العربية
//               </button>
//               <a
//                 href="#download"
//                 className="inline-flex items-center gap-1 text-xs font-semibold text-black bg-white px-3 py-1.5 rounded-full hover:bg-white/90"
//               >
//                 <Download size={14} /> Download App
//               </a>
//             </div>

//             {/* Mobile toggle */}
//             <button
//               className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white"
//               onClick={() => setOpen((v) => !v)}
//               aria-label="Toggle menu"
//             >
//               {open ? <X size={18} /> : <Menu size={18} />}
//             </button>
//           </div>

//           {/* Mobile menu */}
//           {open && (
//             <div className="md:hidden border-t border-white/10 px-4 pb-4">
//               <nav className="flex flex-col gap-2 py-3">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className="text-sm text-white/90 hover:text-white px-3 py-2 rounded-md hover:bg-white/5"
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//               </nav>
//               <div className="flex items-center gap-2">
//                 <button className="inline-flex items-center gap-2 text-sm text-white/90 border border-white/10 px-3 py-2 rounded-md hover:bg-white/5">
//                   <Languages size={16} /> العربية
//                 </button>
//                 <a
//                   href="#download"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white px-3 py-2 rounded-md hover:bg-white/90"
//                 >
//                   <Download size={16} /> Download
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
