"use client";
import Link from "next/link";
import TagSphere from "./CubeWithTexts";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-[6rem]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.4)}
        className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8"
      >
        <h1>
          <Link href="/#skills" scroll>
            <span className="text-accent">#</span>skills
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </motion.div>

      <motion.div
        variants={zoomIn(0.2, 0.6)}
        className="flex flex-col-reverse lg:flex-row items-center"
      >
        <TagSphere className="lg:col-start-2 aspect-square z-10 hidden md:block" />

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.4)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start self-start flex-1 w-full"
        >
          <div className="border border-gray">
            <div className="border-b border-gray px-2">Programming Languages</div>
            <div className="px-2 text-gray">
              <p>JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, Java</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Front-End</div>
              <div className="px-2 text-gray">
                <p>ReactJS, NextJS, Tailwind CSS, Framer Motion</p>
              </div>
            </div>

            <div className="border border-gray">
              <div className="border-b border-gray px-2">Back-End</div>
              <div className="px-2 text-gray">
                <p>FastAPI, Spring Boot, REST APIs, Fast APIs, Supabase Auth</p>
              </div>
            </div>
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Operating Systems</div>
              <div className="px-2 text-gray">
                <p>Linux, Windows, MacOS, AWS EC2</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Databases</div>
              <div className="px-2 text-gray">
                <p>MySQL, Supabase (Postgres-based)</p>
              </div>
            </div>

            <div className="border border-gray">
              <div className="border-b border-gray px-2">Tools</div>
              <div className="px-2 text-gray">
                <p>Git & GitHub, VM-Ware, VSCode, Figma, MySqlWorkbench, Google Cloud Platform</p>
              </div>
            </div>
           
            <div className="border border-gray">
              <div className="border-b border-gray px-2">Certifications</div>
              <div className="px-2 text-gray">
                <p>Google Cybersecurity Professional, AWS Cloud Knowledge Badge, Python and SQL, Full Stack Web Development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
