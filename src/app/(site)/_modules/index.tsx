"use client";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";
import FunFacts from "../about/_modules/FunFacts";

const Education = () => (
  <section id="education" className="scroll-mt-[6rem]">
    <div className="flex items-center max-w-[391px] w-full text-32 font-medium pb-8">
      <h1>
        <span className="text-accent">#</span>education
      </h1>
      <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
    </div>
    <div className="flex flex-col gap-4 text-gray">
      <div>
        <strong>Siksha &apos;o&apos; Anusandhan University (ITER), Bhubaneshwar, Odisha</strong> <span className="text-xs">2021 - 2025</span><br/>
        Bachelor of Technology in Computer Science and Engineering (CGPA-7.41)
      </div>
      <div>
        <strong>SBD International School, Bhadrak, Odisha</strong> <span className="text-xs">2019 - 2021</span><br/>
        Senior Secondary Education (Secured-75.67%)
      </div>
      <div>
        <strong>St Xavier&apos;s High School, Bhadrak, Odisha</strong> <span className="text-xs">2018 - 2019</span><br/>
        Secondary Education (Secured-84%)
      </div>
    </div>
  </section>
);

const Content = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="container">
        <Landing />
        <div className="flex flex-col space-y-24">
          <Projects />
          <Skills />
          <AboutMe />
          <FunFacts />
          <Education />
          <Contacts />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
