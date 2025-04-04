"use client";
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer, { SOCIALS } from "./Footer";
import Icon from "@/components/elements/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import LandingPageLoader from "@/app/(site)/_modules/LandingPageLoader";

interface Props {
  children: ReactNode;
}
const LayoutMain = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 1800);
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <LandingPageLoader />}</AnimatePresence>
      {!loading && (
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="hidden  h-[311px] max-h-[90vh] xl:flex flex-col items-center  fixed top-0 left-[2rem] z-10 bg-primary px-4"
          >
            <motion.div
              variants={fadeIn("down", "spring", 0.4, 0.5)}
              className="flex-1 w-[1px] h-full bg-gray mb-4"
            ></motion.div>
            <div className="flex flex-col items-center gap-6 px-4">
              {SOCIALS.map((x, i) => (
                <motion.a
                  variants={fadeIn("right", "spring", 0.4 + i * 0.2, 0.5)}
                  key={i}
                  href={x.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    src={x.icon}
                    alt={x.name}
                    width="24"
                    height="24"
                    className="hover:scale-110 transition-all ease-out"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <Header />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default LayoutMain;
