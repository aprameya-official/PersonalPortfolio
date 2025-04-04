"use client";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {
  return (
    <div className=" overflow-x-clip">
      <div className="container">
        <Landing />
        <div className="flex flex-col space-y-24">
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
