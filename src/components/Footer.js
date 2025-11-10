"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const [activeSocial, setActiveSocial] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setActiveSocial(null);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset on language switch
  useEffect(() => {
    setActiveSocial(null);
  }, [i18n.language]);

  const footerLinks = [
    { label: t("features"), id: "features" },
    { label: t("avatars"), id: "avatars" },
    { label: t("media"), id: "media" },
    { label: t("news"), id: "news" },
  ];

  const socialLinks = [
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
  ];

  return (
    <footer className="w-full bg-black text-white relative z-50 px-6 md:px-8 lg:px-14">
      {/* Top Section */}
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8 py-10">
        {/* Left: Logo + Links */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:max-w-sm md:w-1/3 order-1">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center focus:outline-none"
          >
            <Image
              src={
                i18n.language === "ar"
                  ? "/assets/images/Logo_ar.svg"
                  : "/assets/images/logo.svg"
              }
              alt="Zoaverse"
              width={210}
              height={80}
              className="object-contain cursor-pointer"
            />
          </button>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start xl:mt-8">
            {footerLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="border-2 border-white text-white text-md px-2 py-1.75 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
              >
                {item.label.toLocaleUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Social */}
        <div className="flex flex-col items-center gap-5 w-full md:w-1/3 order-3 md:order-2">
          <h3 className="text-[32px] font-medium">{t("followUs")}</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((icon, i) => {
              const isActiveMobile = isMobile && activeSocial === i;

              return (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`icon-wrapper relative p-2 flex items-center justify-center rounded-full transition-colors duration-300
                    ${
                      isActiveMobile
                        ? "bg-white active-mobile"
                        : "bg-transparent"
                    }
                  `}
                  onClick={() => {
                    if (isMobile) setActiveSocial(i);
                  }}
                >
                  <Image
                    src={`/assets/images/${icon.light}`}
                    alt="icon"
                    width={24}
                    height={24}
                    className={`icon-light transition-opacity duration-300 ${
                      isActiveMobile ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <Image
                    src={`/assets/images/${icon.dark}`}
                    alt="icon-black"
                    width={24}
                    height={24}
                    className={`icon-dark absolute transition-opacity duration-300 ${
                      isActiveMobile ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>
          <a
            href="mailto:zoa@zoaverse.com"
            className="text-sm opacity-70 hover:opacity-100 transition"
          >
            zoa@zoaverse.com
          </a>
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-4 items-center md:items-start w-full md:max-w-sm md:w-1/3 order-2 md:order-3">
          <h3 className="text-[32px] font-medium">{t("newsletter")}</h3>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={t("emailPlaceholder")}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className={`w-full max-w-sm bg-[#E4E4E4] text-black placeholder:text-black/60 rounded-full py-2.5 px-5 outline-none ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          />
          <button
            className="w-full max-w-sm bg-[#1465FF] text-white text-sm font-semibold rounded-full flex items-center justify-between cursor-pointer px-6 py-2.5 hover:bg-blue-600 transition"
            onClick={() => {
              setEmail("");
            }}
          >
            <span>{t("subscribe")}</span>
            <Image
              src="/assets/images/arrowLeft.svg"
              alt="arrowLeft"
              width={20}
              height={5}
              className={`${
                i18n.language === "ar" ? "rotate-180" : ""
              } object-contain`}
            />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#E4E4E4] text-black rounded-t-[1.75rem]">
        <div className="mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center py-6 text-xs font-medium">
          <div className="flex flex-wrap text-sm gap-4 justify-center md:justify-start">
            <a
              href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/alshrwt-w-alahkam"
              target="_blank"
              className="hover:underline"
            >
              {t("termsOfUse")}
            </a>
            <a
              href="https://zoaverse.gitbook.io/docs/alshrwt-w-alkhswsyh/syash-alkhswsyh"
              target="_blank"
              className="hover:underline"
            >
              {t("privacyPolicy")}
            </a>
            <a
              href="mailto:zoa@zoaverse.com"
              className="hover:underline"
              target="_blank"
            >
              {t("contactUs")}
            </a>
          </div>
          <span className="mt-2 md:mt-0 text-sm opacity-70 text-center md:text-right">
            {t("copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
