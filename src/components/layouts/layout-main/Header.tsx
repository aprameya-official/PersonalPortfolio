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

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

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
    <header className="flex items-center justify-between container sticky top-0 bg-primary z-50 h-[5rem]">
      <Link href="/" scroll>
        <Img
          src="/icons/johnallendechavez.svg"
          alt="John Allen de Chavez"
          height="36"
          width="36"
          className="object-contain"
        />
      </Link>
      <NavDesktop activeSection={activeSection} />
      <NavMobile activeSection={activeSection} />
    </header>
  );
};

export default Header;
