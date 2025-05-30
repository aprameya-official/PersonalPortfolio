import React from "react";
import Content from "./_modules";
import type { Metadata } from "next";

const TITLE = "About - John Allen de Chavez";
const DESC =
  "Learn more about me, my journey as a front-end developer, and my passion for creating user-friendly and functional web experiences. Discover the skills and values that drive my work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://www.johnallendechavez.com/about",
  },
  openGraph: {
    url: "https://www.johnallendechavez.com/about",
    title: TITLE,
    description: DESC,
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
    site: "https://www.johnallendechavez.com/about",
    title: TITLE,
    description: DESC,
    images: "https://www.johnallendechavez.com/images/og-image.webp",
  },
};

const Page = () => {
  return <Content />;
};

export default Page;
