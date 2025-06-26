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
          <p>Hi, I&apos;m Aprameya Pattnaik. My journey in tech started with curiosity—taking apart gadgets as a kid, then building my first website in high school. That spark grew into a passion for creating things that make life easier, smarter, and a little more fun.</p>
          <p>
            I&apos;m a final-year Computer Science Engineering student, but my learning goes far beyond the classroom. I&apos;ve built everything from AI-powered fitness apps to full-stack hospital management systems, always focusing on how technology can solve real problems. I love blending frontend creativity (React, Next.js) with robust backend logic (Spring Boot, FastAPI, MySQL), and I&apos;m always exploring new tools—especially in AI and automation.
          </p>
          <p>
            What drives me isn&apos;t just code—it&apos;s the impact. I believe great software is about empathy: understanding users, anticipating needs, and delivering experiences that feel effortless. I thrive in collaborative teams, value clean code, and enjoy mentoring or learning from others. Certifications in cybersecurity and cloud (AWS, Google) have helped me see the bigger picture of building secure, scalable systems.
          </p>
          <p>
            Beyond code, I&apos;m a night owl who loves late-night problem-solving, cricket matches, and long drives. I find inspiration in music, mountains, and the quiet moments when ideas click. My goal? To keep learning, keep building, and use tech to make a positive difference—one project at a time.
          </p>
        </motion.div>

        <div>
          <div className="relative hidden lg:block">
            <Img
              src="/images/accent-grid-1.png"
              alt="accent grid"
              width="420"
              height="420"
              className="absolute inset-0 w-full h-full object-contain opacity-30 blur-sm z-0"
            />
            <Img
              src="/images/about-me.png"
              alt="Aprameya Pattnaik"
              width="420"
              height="630"
              className="p-0 lg:p-0 relative z-10"
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
