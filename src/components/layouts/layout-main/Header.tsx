import { Img } from "@/components/elements";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export const LINK_LIST = [
  {
    title: "home",
    linkTo: "/#home",
  },
  {
    title: "projects",
    linkTo: "/#projects",
  },
  {
    title: "skills",
    linkTo: "/#skills",
  },
  {
    title: "about",
    linkTo: "/#about",
  },
  {
    title: "contacts",
    linkTo: "/#contacts",
  },
];

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-400">
    <circle cx="12" cy="12" r="5" />
    <g stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-accent">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        setIsDark(false);
      } else {
        html.classList.add("dark");
        setIsDark(true);
      }
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.6, // Adjust this value as needed
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="flex flex-row items-center justify-between container sticky top-0 z-50 h-[5rem] bg-white/60 dark:bg-[#102a27]/60 backdrop-blur-xl">
      <Link href="/" scroll>
        <span className="flex flex-col items-center relative" style={{ marginTop: 0 }}>
          {/* Professional logo, no circle container */}
          <Img
            src="/icons/myicon.png"
            alt="Aprameya Pattnaik Logo"
            height="96"
            width="96"
            className="object-contain drop-shadow-lg h-16 w-16 md:h-20 md:w-20 my-auto"
          />
        </span>
      </Link>
      <NavDesktop activeSection={activeSection} />
      <NavMobile activeSection={activeSection} />
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded border border-accent bg-transparent hover:bg-accent/80 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/60 scale-100 hover:scale-105 shadow-sm"
        aria-label="Toggle theme"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;
