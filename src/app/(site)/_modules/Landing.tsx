import { motion } from "framer-motion";
import { BtnLink, Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { fadeIn, swivelVariants, zoomIn } from "@/utils/motion";

const Landing = () => {
  return (
    <section id="home" className="scroll-mt-[5rem]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        style={{
          minHeight: "calc(100svh - 5rem)",
        }}
        className="flex flex-col justify-center min-h-[calc(100vh-5rem)] py-8 relative"
      >
        <motion.div
          variants={zoomIn(0.4, 0.6)}
          className="absolute bottom-[10rem] right-[-14rem]"
        >
          <BoxAccent className="aspect-square  w-[91px] " />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="flex flex-col space-y-6 items-center lg:items-start flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("down", "spring", 0.2, 0.4)}
              className="text-36 font-semibold"
            >
              I&apos;m John Allen,{" "}
              <span className="text-accent">Front-End Developer</span>
            </motion.h1>
            <motion.p variants={swivelVariants} className="text-gray">
              I&apos;m passionate about turning designs into reality, focusing
              on writing clean code and creating smooth, enjoyable user
              experiences. Let&apos;s team up and elevate the web together! ✨💻
              #FrontEndDev #CodeCrafting
            </motion.p>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.4)}
              className="flex"
            >
              <BtnLink title="Contact me!" href="/#contacts" />
            </motion.div>
          </div>
          <div>
            <div className="relative">
              <motion.div
                variants={fadeIn("down", "tween", 0.4, 0.3)}
                className="absolute top-24 left-[-1rem] -z-10"
              >
                <Img
                  src="/images/accent-1.png"
                  width="156"
                  height="156"
                  alt="accent"
                />
              </motion.div>

              <motion.div
                variants={fadeIn("left", "tween", 0.4, 0.4)}
                className="absolute bottom-16 right-4"
              >
                <Img
                  src="/images/accent-grid-1.png"
                  width="84"
                  height="84"
                  alt="accent"
                />
              </motion.div>
              <motion.div variants={fadeIn("down", "tween", 0.2, 0.4)}>
                <Img
                  src="/images/landing-1.png"
                  width="457"
                  height="386"
                  alt="hacker"
                  className="z-10"
                />
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.4)}
              className="flex items-center gap-2 px-2 py-1 border border-gray"
            >
              <div className=" bg-accent h-4 w-4"></div>
              <p className="text-gray">Looking for a Part Time Job</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.3)}
          className="flex flex-col items-center max-w-[712px] w-full mx-auto text-center"
        >
          <div className="border border-gray p-4 lg:p-6 w-full relative">
            <Img
              src="/icons/quote.svg"
              alt="quote"
              width="41"
              height="28"
              className=" absolute top-[-1.2rem] bg-primary p-2 left-2"
            />
            <p className="text-24">Talk is cheap. Show me the code.</p>
          </div>
          <div className="border border-t-0 border-gray p-3 lg:p-4 self-end relative">
            <p>- Linus Torvalds</p>
            <Img
              src="/icons/quote.svg"
              alt="quote"
              width="41"
              height="28"
              className=" absolute top-[-1.2rem] bg-primary p-2 right-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;
