"use client";
import AboutMe from "./AboutMe";
// import MyGoals from "./MyGoals";
import React from "react";
import { motion } from "framer-motion";
import { swivelVariants } from "@/utils/motion";

const MyJourney = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    id="my-journey"
    className="scroll-mt-[6rem]"
  >
    <div className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8">
      <h1>
        <span className="text-accent">#</span>my-journey
      </h1>
      <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
    </div>
    <motion.div
      variants={swivelVariants}
      className="flex flex-col gap-6 text-gray"
    >
      <div className="space-y-4">
        <p>
          My tech journey began when I saw my first lines of HTML render into something real. That spark turned into curiosity, and curiosity turned into commitment.
        </p>
        <p>
          In college, I went from basic scripting to building full-stack applications that solve actual problems. One of my first major projects — a hospital management system — taught me the importance of clean architecture and user empathy. From there, I&apos;ve built AI-based fitness apps, e-commerce platforms, and developer tools — each one pushing me to think deeper, design smarter, and code cleaner.
        </p>
        <p>
          More recently, I&apos;ve been drawn to the intersection of GenAI and development. I enjoy using AI agents to brainstorm, prototype, and even refactor code — like pairing with a teammate who never runs out of ideas. It&apos;s not just about building faster — it&apos;s about building better.
        </p>
      </div>
    </motion.div>
  </motion.section>
);

const BeyondCode = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    id="beyond-code"
    className="scroll-mt-[6rem]"
  >
    <div className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8">
      <h1>
        <span className="text-accent">#</span>beyond-code
      </h1>
      <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
    </div>
    <motion.div
      variants={swivelVariants}
      className="flex flex-col gap-6 text-gray"
    >
      <div className="space-y-4">
        <p>
          Outside of coding, I&apos;m someone who finds calm in motion and focus in solitude. Cricket is my game of choice — not just for the action, but for the strategy, rhythm, and team spirit it shares with good software development.
        </p>
        <p>
          I&apos;m also a night thinker. My clearest ideas often come when the world is asleep and the terminal is lit. Long drives help me reset, especially through the mountains — they give me the space to think differently about problems. And music? It&apos;s always on — from debugging sessions to design sprints.
        </p>
        <p>
          As an introvert, I enjoy depth over noise. I prefer focused work, meaningful conversations, and time spent refining things that matter. It&apos;s made me a more patient, thoughtful developer — someone who can sit with complexity until it becomes clarity.
        </p>
      </div>
    </motion.div>
  </motion.section>
);

const WhatDrivesMe = () => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    id="what-drives-me"
    className="scroll-mt-[6rem]"
  >
    <div className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8">
      <h1>
        <span className="text-accent">#</span>what-drives-me
      </h1>
      <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
    </div>
    <motion.div
      variants={swivelVariants}
      className="flex flex-col gap-6 text-gray"
    >
      <div className="space-y-4">
        <p>
          I believe good technology should simplify, not overwhelm. Every project I take on starts with a question: What real-world problem are we solving here — and how can we do it better?
        </p>
        <p>
          That mindset has shaped the way I approach learning, too. Whether I&apos;m picking up a new framework, exploring system design, or experimenting with GenAI, I&apos;m always learning with intent. I stay curious, because the best developers are never really done growing.
        </p>
        <p>
          I&apos;m also a big believer in collaboration. The best ideas often come from teams that listen, challenge, and build together. I value environments where every voice adds something — where clean code, open minds, and real impact come together.
        </p>
      </div>
    </motion.div>
  </motion.section>
);

const Content = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container pt-4 pb-12 flex flex-col space-y-24">
        <AboutMe />
        <MyJourney />
        <BeyondCode />
        <WhatDrivesMe />
        {/* <Suspense>
          <MyGoals />
        </Suspense> */}
      </div>
    </div>
  );
};

export default Content;
