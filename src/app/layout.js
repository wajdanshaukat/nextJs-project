import { Geist, Geist_Mono, Almarai, Montserrat } from "next/font/google";
import "./globals.css";
import { fallbackLng } from "@/i18n/settings";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var lang = localStorage.getItem('language') || '${fallbackLng}';
                  document.documentElement.lang = lang;
                  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                  // Store on window before React runs
                  window.__LANG__ = lang;
                } catch (e) { window.__LANG__ = '${fallbackLng}'; }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${montserrat.variable}
          ${almarai.variable}
          antialiased bg-[#070708] text-white
          transition-all duration-500
          rtl:font-almarai ltr:font-montserrat
        `}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
