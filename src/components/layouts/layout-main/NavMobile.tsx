import { useState } from "react";
import { LINK_LIST } from "./Header";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NavMobile = ({ activeSection }: { activeSection: string }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { push } = useRouter();

  const handleMobileNavigate = async (path?: string) => {
    if (path) {
      document.body.style.overflowY = "scroll";
      push(path);
      setIsOpenNav(false);
    } else {
      if (isOpenNav) {
        setIsOpenNav(false);
        document.body.style.overflowY = "scroll";
      } else {
        setIsOpenNav(true);
        document.body.style.overflowY = "hidden";
      }
    }
  };

  return (
    <nav className=" lg:hidden relative">
      <button
        onClick={() => handleMobileNavigate()}
        type="button"
        className=" bg-space-cadet p-2 rounded z-50"
      >
        <div className="rounded  h-6 w-6 flex items-center justify-center">
          <span
            aria-hidden="true"
            className={[
              "block absolute h-[1.5px] rounded w-[24px] transform-gpu transition duration-500 ease-in-out bg-white",
              isOpenNav ? "-rotate-45" : "-translate-y-2",
            ].join(" ")}
          ></span>
          <span
            aria-hidden="true"
            className={[
              "block absolute  h-[1.5px] rounded w-[24px] transform-gpu transition duration-500 ease-in-out bg-white",
              isOpenNav ? "opacity-0" : "",
            ].join(" ")}
          ></span>
          <span
            aria-hidden="true"
            className={[
              "block absolute  h-[1.5px] rounded w-[24px] transform-gpu  transition duration-500 ease-in-out bg-white",
              isOpenNav ? "rotate-45" : "translate-y-2",
            ].join(" ")}
          ></span>
        </div>
      </button>
      <motion.div
        animate={{
          x: isOpenNav ? "0%" : "100%",
          opacity: isOpenNav ? 1 : 0.5,
        }}
        initial={{
          opacity: 0.5,
          x: "100%",
        }}
        transition={{
          duration: 0.3,
          easings: "easeOut",
        }}
        className="flex flex-col justify-center bg-primary fixed inset-0 top-[5rem] z-[50]"
      >
        <ul>
          {LINK_LIST.map((x, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => handleMobileNavigate(x.linkTo)}
                className={[
                  "px-4 py-6 block hover:text-white text-center w-full",
                  activeSection === x.linkTo.replace("/#", "")
                    ? "text-white"
                    : "text-gray",
                ].join(" ")}
              >
                <span className="text-accent">#</span>
                {x.title}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavMobile;
