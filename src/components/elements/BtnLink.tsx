import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface Props {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
}

const BtnLink = ({ href, title, target, rel = "", className }: Props) => {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={[
        "border border-accent hover:bg-accent hover:bg-opacity-20 font-medium py-1 px-4 text-white",
        className,
      ].join(" ")}
    >
      {title}
    </Link>
  );
};

export default BtnLink;
