type Direction = "left" | "right" | "up" | "down";
type Type = "spring" | "keyframes" | "tween" | "inertia";

export const fadeIn = (
  direction: Direction,
  type: Type,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: {
        delay: delay,
      },
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeInOut",
        stiffness: type === "spring" ? 100 : undefined,
        damping: type === "spring" ? 8 : undefined,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

export const swivelVariants = {
  hidden: {
    transform: "perspective(550px) rotateY(-25deg) rotateX(-15deg)",
    zIndex: 10,
    opacity: 0,
  },
  show: {
    transform: "perspective(550px) rotateY(0deg) rotateX(0deg)",
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};
