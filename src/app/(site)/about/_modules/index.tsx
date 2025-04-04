"use client";
import AboutMe from "./AboutMe";
import MyGoals from "./MyGoals";
import FunFacts from "./FunFacts";
import { Suspense } from "react";

const Content = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container pt-4 pb-12 flex flex-col space-y-24">
        <AboutMe />
        <FunFacts />
        <Suspense>
          <MyGoals />
        </Suspense>
      </div>
    </div>
  );
};

export default Content;
