import "./globals.css";
import { fallbackLng } from "@/i18n/settings";
import ClientWrapper from "./ClientWrapper";

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
