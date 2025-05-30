import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.johnallendechavez.com"),

  title: "John Allen de Chavez",
  description: "Front-End Developer",
  alternates: {
    canonical: "https://www.johnallendechavez.com",
  },
  openGraph: {
    url: "https://www.johnallendechavez.com",
    title: "John Allen de Chavez",
    description: "Front-End Developer",
    images: [
      {
        url: "https://www.johnallendechavez.com/images/og-image.webp",
        width: 1200,
        height: 640,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.johnallendechavez.com",
    title: "John Allen de Chavez",
    description: "Front-End Developer",
    images: "https://www.johnallendechavez.com/images/og-image.webp",
  },

  authors: [
    {
      name: "John Allen de Chavez",
    },
  ],
  keywords: [
    "Portfolio",
    "ReactJS",
    "NextJS",
    "Web Developer",
    "Software Engineer",
    "John Allen de Chavez",
  ],
  icons: {
    icon: "/icons/favicon/android-icon-192x192.png",
    shortcut: "/icons/favicon/android-icon-192x192.png",
    apple: "/icons/favicon/android-icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://www.cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="johnallend9"
          data-description="Support me on Buy me a coffee!"
          data-message="Insufficient coffee"
          data-color="#C778DD"
          data-position="Right"
          data-x_margin="24"
          data-y_margin="24"
          defer
        ></script>
      </head>
      <body className={`${firaCode.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>

      <GoogleAnalytics gaId="G-BHL50EQXC8" />
    </html>
  );
}
