import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MY_FUN_FACTS = [
  "I like pizza and pasta",
  "I often bike alone",
  "I am nature lover",
  "I am the breadwinner",
  "I am introvert",
  "I love motorcycle",
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
