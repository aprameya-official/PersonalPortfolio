import { Img } from "@/components/elements";
import { motion } from "framer-motion";

const LandingPageLoader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ minHeight: "100svh" }}
    >
      <Img
        src="/icons/johnallendechavez.svg"
        alt="John Allen de Chavez"
        height="80"
        width="80"
        className="object-contain"
      />
      <div className="text-center pt-4 pb-24">
        <h1 className=" font-semibold">John Allen de Chavez</h1>
        <p className="text-xs text-gray">Front-End Developer</p>
      </div>
    </motion.div>
  );
};

export default LandingPageLoader;
