"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import i18next from "@/i18n/client";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const initialLang =
    typeof window !== "undefined"
      ? window.__LANG__ || localStorage.getItem("language") || "ar"
      : "ar";

  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", lang);
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  const navItems = [
    { href: "#features", label: t("features") },
    { href: "#avatars", label: t("avatars") },
    { href: "#media", label: t("media") },
    { href: "#news", label: t("news") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // When at top → clear all actives
      if (window.scrollY < 100) {
        if (activeSection !== "") setActiveSection("");
        return;
      }

      let current = "";
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = item.href.replace("#", "");
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navItems]);

  if (!lang) return null;
  return (
    <section
      id="header"
      className="w-full px-6 sm:px-8 fixed top-0 left-0 z-[9999] bg-transparent"
    >
      <nav className="relative bg-transparent">
        {open && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-md z-[50] transition-opacity duration-500"></div>
        )}

        <div className="w-full flex items-center justify-between px-6 py-4 relative z-[60]">
          <div className="flex items-end gap-12">
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
                  lang === "ar"
                    ? "/assets/images/Logo_ar.svg"
                    : "/assets/images/logo.svg"
                }
                alt="Zoaverse logo"
                width={300}
                height={120}
                className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto cursor-pointer object-contain"
              />
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={`border-2 rounded-full px-4 py-2 text-lg tracking-wide transition cursor-pointer
                        ${
                          activeSection === id
                            ? "bg-white text-black border-white"
                            : "border-white text-white hover:bg-white hover:text-black"
                        }`}
                    >
                      {item.label.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right - language + hamburger */}
          <div
            className={`flex items-center gap-4 ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
            ref={menuRef}
          >
            <button
              onClick={toggleLanguage}
              className="hidden lg:block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
            >
              {lang === "ar" ? "English" : "العربية"}
            </button>
            {/* Mobile Menu */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className={`relative w-16 h-10 flex items-center justify-center rounded-full bg-blue-600 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 shadow-md ${
                  lang === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`relative w-6 h-6 flex items-center justify-center ${
                    lang === "ar" ? "scale-x-[-1]" : ""
                  }`}
                >
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
                <div className="absolute inset-0 rounded-full transition duration-300 opacity-0 hover:opacity-40 bg-blue-400 blur-md"></div>
              </button>

              {/* Mobile Dropdown */}
              <div
                className={`absolute ${
                  lang === "ar" ? "left-0" : "right-0"
                } mt-3 bg-blue-600 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open
                    ? "max-h-[500px] opacity-100 visible w-[250px]"
                    : "max-h-0 opacity-0 invisible w-[250px]"
                }`}
              >
                <nav className="flex flex-col divide-y divide-white divide-opacity-40 text-white text-center">
                  {navItems.map((item) => {
                    const id = item.href.replace("#", "");
                    return (
                      <button
                        key={item.href}
                        onClick={() => {
                          scrollToSection(id);
                          setOpen(false);
                        }}
                        className={`py-4 px-6 uppercase text-[16px] transition ${
                          activeSection === id
                            ? "bg-blue-700"
                            : "hover:bg-blue-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}

                  {/* Language Toggle */}
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setOpen(false);
                    }}
                    className="py-4 px-6 text-[16px] uppercase hover:bg-blue-700 transition"
                  >
                    {lang === "ar" ? "English" : "العربية"}
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
