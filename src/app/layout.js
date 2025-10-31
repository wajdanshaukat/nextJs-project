import { Geist, Geist_Mono, Almarai, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import i18next from "@/i18n/client";
import { fallbackLng } from "@/i18n/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Zoaverse — Jump into the Verse",
  description:
    "Experience virtual spaces, avatars, media and events inside Zoaverse.",
};

export default function RootLayout({ children }) {
  const savedLang =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || i18next.language || "en"
      : "en";

  const dir = savedLang === "ar" ? "rtl" : "ltr";
  const font = savedLang === "ar" ? almarai.variable : montserrat.variable;

  return (
    <html lang={savedLang} dir={dir}>
       <head>
        {/* ✅ Run before hydration to prevent flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var lang = localStorage.getItem('language') || '${fallbackLng}';
                  document.documentElement.lang = lang;
                  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font} antialiased bg-[#070708] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
