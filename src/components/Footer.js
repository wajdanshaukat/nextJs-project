"use client";
import Image from "next/image";

const scrollToSection = (id) => {
  const element = document.getElementById(id.toLowerCase());
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative z-50 px-6 lg:px-10">
      {/* Top Section */}
      <div className="mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-start gap-8 py-10">
        {/* Left: Logo + Links */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3 order-1">
          <Image
            src="/assets/images/logo.svg"
            alt="Zoaverse"
            width={160}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["Features", "Avatars", "Media", "News"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="border-2 border-white text-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Social (after Newsletter on mobile) */}
        <div className="flex flex-col items-center gap-5 w-full md:w-1/3 order-3 md:order-2">
          <h3 className="text-lg font-medium">Follow us</h3>
          <div className="flex items-center gap-4">
            {[
              {
                light: "fb.svg",
                dark: "fb2.svg",
                href: "#",
              },
              {
                light: "xicon.svg",
                dark: "xiconb.svg",
                href: "https://x.com/zoa_verse_",
              },
              {
                light: "insta.svg",
                dark: "insta2.svg",
                href: "https://www.instagram.com/zoa.verse/",
              },
              {
                light: "link.svg",
                dark: "link2.svg",
                href: "https://www.linkedin.com/company/zoaverse/",
              },
              {
                light: "utb.svg",
                dark: "utb2.svg",
                href: "https://www.youtube.com/@zoaverse",
              },
              {
                light: "tiktok.svg",
                dark: "tiktok2.svg",
                href: "https://www.tiktok.com/@zoa.verse",
              },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 flex items-center justify-center rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
              >
                {/* Light icon */}
                <Image
                  src={`/assets/images/${icon.light}`}
                  alt="icon"
                  width={24}
                  height={24}
                  className="transition-opacity duration-300 hover:opacity-0"
                />
                {/* Dark icon */}
                <Image
                  src={`/assets/images/${icon.dark}`}
                  alt="icon-black"
                  width={24}
                  height={24}
                  className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </a>
            ))}
          </div>
          <a
            href="mailto:zoa@zoaverse.com"
            className="text-sm opacity-70 hover:opacity-100 transition"
          >
            zoa@zoaverse.com
          </a>
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-1/3 order-2 md:order-3">
          <h3 className="text-lg font-medium">Newsletter</h3>

          <input
            type="email"
            placeholder="Email address"
            className="w-full max-w-sm bg-[#E4E4E4] text-black placeholder:text-black/60 rounded-full py-2.5 px-5 outline-none"
          />

          <button className="w-full max-w-sm bg-[#1465FF] text-white text-sm font-semibold rounded-full flex items-center justify-between px-6 py-2.5 hover:bg-blue-600 transition">
            <span>SUBSCRIBE</span>
            <Image
              src="/assets/images/arrowLeft.svg"
              alt="arrowLeft"
              width={20}
              height={5}
              className="object-contain"
            />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#E4E4E4] text-black rounded-t-[1.75rem]">
        <div className="mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center py-6 text-xs font-medium">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/alshrwt-w-alahkam"
              target="_blank"
              className="hover:underline"
            >
              TERMS OF USE
            </a>
            <a
              href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/syash-alkhswsyh"
              target="_blank"
              className="hover:underline"
            >
              PRIVACY POLICY
            </a>
            <a
              href="mailto:zoa@zoaverse.com"
              className="hover:underline"
              target="_blank"
            >
              CONTACT US
            </a>
          </div>
          <span className="mt-2 md:mt-0 opacity-70 text-center md:text-right">
            COPYRIGHT BY @ ZOAVERSE - 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
