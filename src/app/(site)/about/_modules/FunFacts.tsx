import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MY_FUN_FACTS = [
  "debug better after a coffee",
  "love to play cricket",
  "vibe-code at 2AM when the world is quiet",
  "prefer mountains over beaches",
  "am an introvert",
  "prefer long drives",
  "daydream about building at FAANG",
  "find peace in clean UI and dark mode",
  "trust GPT more than people sometimes"
];
const FunFacts = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      id="my-fun-facts"
      className="scroll-mt-[6rem]"
    >
      <div className="flex items-center max-w-[317px] w-full text-32 font-medium pb-8">
        <h1>
          <Link href="/about#my-fun-facts" scroll>
            <span className="text-accent">#</span>my-fun-facts
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="flex flex-wrap gap-4">
        {MY_FUN_FACTS.map((x, i) => (
          <motion.div
            variants={fadeIn("up", "spring", 0.2 + i * 0.2, 0.3)}
            key={i}
            className="border border-gray text-gray px-4"
          >
            {x}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FunFacts;
