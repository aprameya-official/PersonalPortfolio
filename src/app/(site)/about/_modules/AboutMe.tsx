import { Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { swivelVariants, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutMe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative"
    >
      <motion.div
        variants={zoomIn(0.2, 0.6)}
        className="absolute bottom-[12rem] left-[-17rem]"
      >
        <BoxAccent className="aspect-square w-[155px]" />
      </motion.div>

      <div className="flex items-center max-w-[516px] w-full text-32 font-medium">
        <h1>
          <Link href="/about" title="About" scroll>
            <span className="text-accent">/</span>about
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="scroll-mt-[6rem] flex flex-col-reverse gap-8 lg:flex-row items-center justify-between">
        <motion.div
          variants={swivelVariants}
          className="flex items-start flex-col space-y-4 lg:max-w-[515px] text-gray"
        >
          <p>Hello, I&apos;m John Allen,</p>
          <p>
            A front-end developer from the Philippines with a passion for
            crafting sleek, responsive websites from the ground up. I transform
            ideas into modern, intuitive web experiences that engage users and
            enhance brand presence.
          </p>
          <p>
            With a track record of helping clients build a robust online
            identity, I stay ahead of industry trends and am constantly
            exploring new technologies and frameworks to ensure every project is
            impactful and up-to-date.
          </p>
        </motion.div>

        <div>
          <div className="relative hidden lg:block">
            <Img
              src="/images/about-me-1.png"
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
