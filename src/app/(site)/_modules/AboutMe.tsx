import { BtnLink, Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, swivelVariants, zoomIn } from "@/utils/motion";

const AboutMe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      id="about"
      className=" scroll-mt-[6rem] relative"
    >
      <motion.div
        variants={zoomIn(0.2, 0.6)}
        className="absolute bottom-[12rem] left-[-17rem]"
      >
        <BoxAccent className="aspect-square w-[155px]" />
      </motion.div>

      <div className="flex items-center max-w-[516px] w-full text-32 font-medium">
        <h1>
          <Link href="/#about" title="About" scroll>
            <span className="text-accent">#</span>about
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="flex flex-col-reverse gap-8 lg:flex-row items-center justify-between">
        <motion.div
          variants={swivelVariants}
          className="flex items-start flex-col space-y-4 lg:max-w-[515px] text-gray"
        >
          <p>Hey, I&apos;m Aprameya — a final-year CSE student who sees coding as more than logic; it&apos;s a vibe.</p>
          <p>
          I love solving complex problems and turning them into clean, intuitive digital experiences. Whether it&apos;s crafting smooth UIs with React or building structured backends with Spring Boot and FastAPI, I aim for solutions that are both smart and satisfying to use.
          </p>
          <p>
          I often blend traditional coding with AI agents and prompt-driven workflows to build faster, design better, and explore creative edge cases. From AI-powered fitness apps to hospital management systems, I build with purpose and precision.
          </p>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            className="flex"
          >
            <BtnLink href="/about" title="Read more ->" />
          </motion.div>
        </motion.div>

        <div>
          <div className="relative hidden lg:block">
            <Img
              src="/images/about-me.png"
              alt="hacker"
              width="339"
              height="507"
              className="p-12 pb-0 lg:p-0"
            />

            <Img
              src="/images/accent-grid-1.png"
              alt="hacker"
              width="84"
              height="84"
              className="absolute top-8 left-0"
            />

            <Img
              src="/images/accent-grid-2.png"
              alt="hacker"
              width="104"
              height="56"
              className="absolute top-1/2 -translate-y-1/2 right-0"
            />

            <Img
              src="/images/accent-grid-3.png"
              alt="hacker"
              width="80"
              height="103"
              className="absolute top-1/2 bottom-[5rem] right-[-9rem]"
            />
          </div>

          <div className="w-full h-[1px] bg-accent max-w-[271px] mx-auto"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
