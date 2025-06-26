import { motion } from "framer-motion";
import { BtnLink, Img } from "@/components/elements";
import BoxAccent from "@/components/modules/BoxAccent";
import { fadeIn, swivelVariants, zoomIn } from "@/utils/motion";

const Landing = ({ show = true }) => {
  return (
    <section id="home" className="scroll-mt-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.2 }}
        style={{
          minHeight: "calc(100svh - 5rem)",
        }}
        className="flex flex-col justify-center min-h-[calc(100vh-5rem)] py-8 relative"
      >
        <motion.div
          variants={zoomIn(0.4, 0.6)}
          className="absolute bottom-[10rem] right-[-14rem]"
        >
          <BoxAccent className="aspect-square  w-[91px] " />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.5)}
            className="flex-1 flex flex-col items-center lg:items-end w-full"
          >
            {/* Centered photo and badge bar as a single column, matching widths */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-[90%] max-w-[457px] flex flex-col items-center">
                {/* Accent-1.png at top left, behind the photo */}
                <motion.div
                  variants={fadeIn("down", "tween", 0.4, 0.3)}
                  className="absolute top-1 left-0 z-0 opacity-80"
                >
                  <Img
                    src="/images/accent-1.png"
                    width="160"
                    height="160"
                    alt="accent"
                  />
                </motion.div>
                {/* Photo above accent with sliding animation from left */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="relative z-10 flex items-center justify-center w-full"
                >
                  <Img
                    src="/images/landing-1.png"
                    width="100%"
                    height="auto"
                    alt="hacker"
                    className="object-contain w-full h-auto rounded-2xl shadow-lg"
                  />
                </motion.div>
                {/* Custom SVG grid of small squares as background, fully spread */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 w-full h-full">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    {Array.from({ length: 12 }).map((_, row) => (
                      Array.from({ length: 12 }).map((_, col) => (
                        <rect
                          key={`sq-${row}-${col}`}
                          x={col * (100 / 12) + 2}
                          y={row * (100 / 12) + 2}
                          width="5"
                          height="4"
                          rx="1"
                          className="dark:fill-white/20 fill-black/20"
                        />
                      ))
                    ))}
                  </svg>
                </div>
              </div>
              {/* Badge bar below the photo, perfectly aligned */}
              <motion.div
                variants={fadeIn("up", "spring", 0.2, 0.7)}
                className="flex items-center gap-2 px-2 py-1 border border-gray-400 dark:border-gray-200 w-[90%] max-w-[457px] mt-2 lg:mt-4"
                style={{ alignSelf: 'center' }}
              >
                <span className="inline-flex items-center justify-center rounded-full h-7 w-7 bg-yellow-400 dark:bg-yellow-500 shadow-lg border-2 border-yellow-600 dark:border-yellow-400">
                  <Img
                    src="/icons/myicon.png"
                    alt="Aprameya Pattnaik Logo"
                    width="25"
                    height="25"
                    className="object-contain"
                  />
                </span>
                <p className="text-gray-900 dark:text-gray-100">Looking for a Full Time Opportunity</p>
                <button className="ml-2 p-1 rounded bg-secondary dark:bg-secondary-dark border border-accent hover:bg-accent transition-colors" aria-label="Hotspot">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.5-3.75a6 6 0 0 1 9 0m-12-3a10.5 10.5 0 0 1 15 0" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right-side text block, sliding in from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="flex flex-col space-y-6 items-center lg:items-start flex-1 text-center lg:text-left w-[90%] max-w-[457px] mx-auto lg:min-h-[420px] justify-center"
          >
            <motion.h1
              variants={fadeIn("down", "spring", 0.2, 0.4)}
              className="font-semibold"
            >
              <span className="text-3xl md:text-5xl font-bold block">I&apos;m Aprameya Pattnaik,</span>
              <span className="text-accent text-xl md:text-2xl block break-words">Full Stack Developer|| WebSecurity Curious|| GEN-AI Enthusiast</span>
            </motion.h1>
            <motion.p variants={swivelVariants} className="text-gray-900 dark:text-gray-100">
            I build full-stack applications that merge smooth interfaces with resilient systems. Backed by a passion for clean UX, secure cloud development, and AI-enhanced coding, I focus on delivering software that&apos;s as thoughtful as it is technical.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.4)}
              className="flex"
            >
              <BtnLink title="Contact me!" href="/#contacts" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.3)}
          className="flex flex-col items-center max-w-[712px] w-full mx-auto text-center"
        >
          <div className="border border-gray-400 dark:border-gray-200 p-4 lg:p-6 w-full relative">
            <Img
              src="/icons/quote.svg"
              alt="quote"
              width="41"
              height="28"
              className=" absolute top-[-1.2rem] bg-primary p-2 left-2"
            />
            <p className="text-24">
              echo &quot;Synced with VS Code | AI Copilot active | Status: Connected [
                <span className='inline-block align-middle ml-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5 inline text-accent hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors'>
                    {/* Animated WiFi signal bars */}
                    <g className="wifi-signal">
                      {/* Signal bar 1 - weakest */}
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M2 12a10 10 0 0 1 20 0' 
                        className="signal-bar-1"
                        style={{
                          animation: 'signalWave 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '0s'
                        }}
                      />
                      {/* Signal bar 2 */}
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M4 12a8 8 0 0 1 16 0' 
                        className="signal-bar-2"
                        style={{
                          animation: 'signalWave 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '0.4s'
                        }}
                      />
                      {/* Signal bar 3 */}
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M6 12a6 6 0 0 1 12 0' 
                        className="signal-bar-3"
                        style={{
                          animation: 'signalWave 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '0.8s'
                        }}
                      />
                      {/* Signal bar 4 */}
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M8 12a4 4 0 0 1 8 0' 
                        className="signal-bar-4"
                        style={{
                          animation: 'signalWave 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '1.2s'
                        }}
                      />
                      {/* Signal bar 5 */}
                      <path 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        d='M10 12a2 2 0 0 1 4 0' 
                        className="signal-bar-5"
                        style={{
                          animation: 'signalWave 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '1.6s'
                        }}
                      />
                      {/* Signal bar 6 - strongest (center dot) */}
                      <circle 
                        cx='12' 
                        cy='12' 
                        r='1.5' 
                        stroke='currentColor' 
                        strokeWidth='2' 
                        fill='currentColor'
                        className="signal-bar-6"
                        style={{
                          animation: 'signalDotPop 3.5s cubic-bezier(0.77,0,0.18,1) infinite',
                          animationDelay: '2s'
                        }}
                      />
                    </g>
                  </svg>
                </span>
              ]"
            </p>
          </div>
          <div className="border border-t-0 border-gray-400 dark:border-gray-200 p-3 lg:p-4 self-end relative">
            <p>-Aprameya Pattnaik</p>
            <Img
              src="/icons/quote.svg"
              alt="quote"
              width="41"
              height="28"
              className=" absolute top-[-1.2rem] bg-primary p-2 right-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;
