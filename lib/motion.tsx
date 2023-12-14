export const perspective = ({ delay }: { delay: number }) => ({
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 0,
    translateX: 50,
  },
  enter: (i: any) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: delay + i * 0.2,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: (i: any) => ({
    opacity: 0,
    rotateX: 90,
    translateY: 0,
    translateX: 50,
    transition: {
      duration: 1,
      delay: i * 0.3,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
});

export const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};
