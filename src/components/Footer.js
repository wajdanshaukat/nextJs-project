"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C0C] flex flex-col items-center text-white relative z-50">
      {/* Top Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8 px-6 py-10">
        {/* Left: Logo + Links */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3">
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
                className="border border-white/50 text-white text-sm px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Social */}
        <div className="flex flex-col items-center gap-5 w-full md:w-1/3">
          <h3 className="text-lg font-medium">Follow us</h3>
          <div className="flex items-center gap-4 opacity-80">
            {[
              "fb.svg",
              "xicon.svg",
              "insta.svg",
              "link.svg",
              "utb.svg",
              "tiktok.svg",
            ].map((icon, i) => (
              <a key={i} href="#" className="hover:opacity-100 transition">
                <Image
                  src={`/assets/images/${icon}`}
                  alt="icon"
                  width={28}
                  height={28}
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
        <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-1/3">
          <h3 className="text-lg font-medium">Newsletter</h3>

          {/* Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full max-w-sm bg-[#E4E4E4] text-black placeholder:text-black/60 rounded-full py-2.5 px-5 outline-none"
          />

          {/* Subscribe Button */}
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
      <div className="w-full max-w-7xl bg-[#E4E4E4] text-black rounded-t-[1rem] flex flex-col md:flex-row justify-between items-center px-6 py-4 text-xs font-medium">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#" className="hover:underline">
            TERMS OF USE
          </a>
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:underline">
            CONTACT US
          </a>
        </div>
        <span className="mt-2 md:mt-0 opacity-70 text-center md:text-right">
          COPYRIGHT BY @ ZOAVERSE - 2025
        </span>
      </div>
    </footer>
  );
}
