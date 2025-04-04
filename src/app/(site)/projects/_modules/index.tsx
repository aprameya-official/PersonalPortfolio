"use client";
import { BtnLink, Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { PROJECTS } from "@/constants/projects";
import { zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Content = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="overflow-x-hidden"
    >
      <div className="container pt-4 pb-12 relative">
        <motion.div
          variants={zoomIn(0.2, 0.6)}
          className="absolute top-1/4 right-[-14rem]"
        >
          <BoxAccent className="w-[155px] aspect-square" />
        </motion.div>
        <motion.div
          variants={zoomIn(0.2, 0.6)}
          className=" absolute top-4 left-[-14rem]"
        >
          <Img
            src="/images/accent-grid-1.png"
            alt="grid"
            width="84"
            height="84"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.2, 0.6)}
          className="absolute  top-1/2 left-[-14rem]"
        >
          <Img
            src="/images/accent-grid-3.png"
            alt="grid"
            width="80"
            height="103"
          />
        </motion.div>
        <motion.div
          variants={zoomIn(0.2, 0.6)}
          className=" absolute  bottom-1/4 right-[-14rem]"
        >
          <Img
            src="/images/accent-grid-3.png"
            alt="grid"
            width="80"
            height="103"
          />
        </motion.div>

        <div className="flex items-center max-w-[516px] w-full text-32 font-medium mb-12">
          <h1>
            <Link href="/projects" title="About" scroll>
              <span className="text-accent">/</span>projects
            </Link>
          </h1>
          <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {PROJECTS.map((x, i) => (
            <div key={i} className="border border-gray">
              <Img
                src={x.img_src}
                width="331"
                height="202"
                alt="project"
                className=" object-cover object-center w-full"
              />
              <p className="border-y border-gray px-4">{x.contribution}</p>
              <div className="p-4">
                <p className="text-24 font-medium">{x.title}</p>
                <p className="text-gray mb-4">{x.desc}</p>
                <BtnLink href={x.link} target="_blank" title="Live <~>" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Content;
