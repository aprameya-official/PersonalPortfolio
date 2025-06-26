import Link from "next/link";
import { LINK_LIST } from "./Header";

const NavDesktop = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center">
        {LINK_LIST.map((x, i) => (
          <li key={i}>
            <Link
              href={x.linkTo}
              className={[
                "px-4 py-6 block transition-all duration-300",
                activeSection === x.linkTo.replace("/#", "")
                  ? "text-accent font-bold scale-150 drop-shadow-lg z-10"
                  : "text-gray-500 dark:text-gray-300 scale-100",
                "hover:text-accent",
              ].join(" ")}
            >
              <span className="text-accent">#</span>
              {x.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
