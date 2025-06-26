import { Img } from "@/components/elements";
import { motion } from "framer-motion";

const LandingPageLoader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex flex-col items-center justify-center min-h-screen bg-primary"
      style={{ minHeight: "100svh" }}
    >
      <span className="flex flex-col items-center w-full relative" style={{ marginTop: 0 }}>
        {/* Animated hanging rope */}
        <motion.span
          initial={{ height: 0 }}
          animate={{ height: '5rem' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-1 block absolute left-1/2 -translate-x-1/2"
          style={{
            top: 0,
            backgroundImage:
              'repeating-linear-gradient(135deg, #bfa76a 0 2px, transparent 2px 4px), repeating-linear-gradient(-135deg, #bfa76a 0 2px, transparent 2px 4px), linear-gradient(#e2c275, #bfa76a)',
            backgroundSize: '6px 6px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundColor: '#e2c275',
            borderRadius: '2px',
            boxShadow: '0 0 2px #bfa76a',
          }}
        />
        {/* Animated swinging logo with modern style */}
        <motion.span
          initial={{ y: -120, rotate: -30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: [
              -30, 18, -14, 10, -7, 4, -2, 0, 2, -1, 0
            ],
          }}
          transition={{
            y: { type: 'spring', stiffness: 80, damping: 10, duration: 0.9 },
            rotate: {
              delay: 0.7,
              duration: 2.2,
              times: [0, 0.18, 0.32, 0.45, 0.57, 0.68, 0.78, 0.86, 0.92, 0.97, 1],
              ease: 'easeInOut',
            },
            opacity: { duration: 0.5 },
          }}
          className="inline-flex items-center justify-center rounded-full h-28 w-28 bg-transparent border-2 border-white/30 dark:border-white/20 backdrop-blur-xl shadow-2xl z-20 animate-float"
          style={{ 
            willChange: 'transform', 
            marginTop: '5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 24px 4px #fff3cd22, inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse border-2 border-white/20 dark:border-white/10" style={{ filter: 'blur(2.5px)' }} />
          <Img
            src="/icons/myicon.png"
            alt="Aprameya Pattnaik"
            height="112"
            width="112"
            className="object-contain drop-shadow-lg"
          />
        </motion.span>
      </span>
      <div className="text-center pt-4 pb-24">
        <h1 className="font-semibold text-primary dark:text-primary">Aprameya Pattnaik</h1>
        <p className="text-xs text-accent">Full-Stack Developer | Cybersecurity & GEN-AI Enthusiast</p>
      </div>
    </motion.div>
  );
};

export default LandingPageLoader;
