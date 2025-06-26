"use client";
import { BtnLink, Img } from "@/components/elements";
import { fadeIn, swivelVariants } from "@/utils/motion";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100svh",
      }}
      className="flex flex-col items-center justify-center  min-h-screen py-8 px-4"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        className="flex flex-col space-y-8 max-w-md text-center"
      >
        <motion.div
          variants={swivelVariants}
          className="w-full rounded-3xl  overflow-hidden aspect-square"
        >
          <Img
            alt="Aprameya Pattnaik"
            src="/images/zambales.jpg"
            height="1410"
            width="1360"
            className=" object-contain"
          />
        </motion.div>
        <div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            className="text-36 font-semibold"
          >
            Error 404
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.4, 0.6)}>
            The journey&apos;s real, but this page isn&apos;t.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 0.6)}
          className="w-full flex"
        >
          <BtnLink href="/" title="Home" className="w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
