import type { Metadata } from "next";
import Content from "./_modules";

const TITLE = "Projects - Aprameya Pattnaik";
const DESC =
  "Explore my projects, where creativity meets problem-solving. Discover innovative designs and functional solutions built with care and attention to detail.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: "https://aprameya-portfolio.com/projects",
  },
  openGraph: {
    url: "https://aprameya-portfolio.com/projects",
    title: TITLE,
    description: DESC,
    images: [
      {
        url: "https://aprameya-portfolio.com/images/og-image.webp",
        width: 1200,
        height: 640,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://aprameya-portfolio.com/projects",
    title: TITLE,
    description: DESC,
    images: "https://aprameya-portfolio.com/images/og-image.webp",
  },
};

const page = () => {
  return <Content />;
};

export default page;
