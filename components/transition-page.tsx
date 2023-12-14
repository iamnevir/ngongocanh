import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const TransitionPage = ({ color }: { color: string }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
    },
  };
  return (
    <motion.div
      variants={{
        initial: {
          top: 0,
        },
        exit: {
          top: "-100vh",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 },
        },
      }}
      initial="initial"
      exit="exit"
      className=" h-[100dvh] w-[100dvw] flex justify-center items-center fixed z-[99999] "
      style={{ backgroundColor: color }}
    >
      {dimension.width > 0 && (
        <svg className=" absolute top-0 w-full h-[calc(100%+300px)] ">
          <motion.path
            style={{ fill: color }}
            variants={curve}
            initial="initial"
            exit="exit"
          />
        </svg>
      )}
    </motion.div>
  );
};

export default TransitionPage;
