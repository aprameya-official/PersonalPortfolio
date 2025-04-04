import { BtnLink, Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";

const Project = () => {
  return (
    <section id="projects" className="scroll-mt-[6rem] relative">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
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
          variants={zoomIn(0.4, 0.6)}
          className="absolute  bottom-[6rem] right-[-17rem]"
        >
          <BoxAccent className=" aspect-square w-[155px] " />
        </motion.div>

        <div className="flex items-center justify-between pb-12 gap-8">
          <div className="flex items-center max-w-[700px] w-full text-32 font-medium">
            <h1>
              <Link href="/#projects" scroll>
                <span className="text-accent">#</span>projects
              </Link>
            </h1>
            <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
          </div>
          <Link
            className=" whitespace-nowrap"
            href={"/projects"}
          >{`View all ~~>`}</Link>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6">
          {PROJECTS.slice(0, 3).map((x, i) => (
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
      </motion.div>
    </section>
  );
};

export default Project;
