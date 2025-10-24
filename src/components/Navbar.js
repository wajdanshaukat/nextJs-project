"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#download", label: "Download" },
    { href: "#features", label: "Features" },
    { href: "#avatars", label: "Avatars" },
    { href: "#spaces", label: "Spaces" },
  ];

  return (
    <section
      id="header"
      className="w-full px-12 fixed top-0 left-0 z-[99999999999] bg-transparent"
    >
      <nav className="bg-transparent !z-[99999999999]">
        {/* Background blur */}
        <div
          id="hedblur"
          className="absolute inset-0 w-full h-[150vh] bg-[rgba(30,30,30,0.8)] backdrop-blur-md hidden"
          style={{ zIndex: "-1" }}
        ></div>

        {/* Main Navbar */}
        <div className="w-full flex items-center justify-between px-6 py-4">
          {/* Left side - logo + tabs */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="#" className="flex items-center">
              <Image
                className="h-10 w-auto"
                src="/assets/images/logo.svg"
                alt="Zoaverse logo"
                width={140}
                height={70}
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <a
                    href={item.href}
                    className="nav-link px-2 text-white text-lg tracking-wide hover:text-blue-400 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - language + mobile toggle */}
          <div className="flex items-center gap-4">
            <button className="langbtn px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              <Languages size={16} className="inline mr-1" /> العربية
            </button>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-blue-600 focus:outline-none transition-all duration-300"
              >
                {open ? (
                  <X size={20} color="white" />
                ) : (
                  <Menu size={20} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-16 left-0 w-full bg-blue-600 rounded-b-3xl shadow-lg overflow-hidden transition-all duration-300 ${
            open ? "max-h-max opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col divide-y divide-white divide-opacity-40 text-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 px-6 uppercase text-[18px] hover:bg-blue-700 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lang"
              className="py-4 px-6 uppercase text-[18px] hover:bg-blue-700 transition"
            >
              العربية
            </a>
          </nav>
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
