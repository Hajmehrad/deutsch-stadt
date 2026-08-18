import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { SkipLink } from "@/components/shared/SkipLink";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Deutsch Stadt — Learn German A1 by Walking Through a City",
  description:
    "A virtual German town where every building is a lesson. Learn CEFR A1 German through exploration, not menus.",
  keywords: ["learn german", "german a1", "cefr a1", "german course", "deutsch lernen"],
  openGraph: {
    title: "Deutsch Stadt",
    description: "Learn German A1 by walking through a virtual city.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>
          <SkipLink />
          <div id="main-content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
