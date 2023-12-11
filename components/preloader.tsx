"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
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
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 2.3 },
    },
  };
  const load = (duration: number, delay: number) => ({
    initial: {
      width: "0%",
    },
    enter: {
      width: "100%",
      transition: { duration, delay },
    },
  });
  return (
    <motion.div
      variants={{
        initial: {
          top: 0,
        },
        exit: {
          top: "-100vh",
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 2 },
        },
      }}
      initial="initial"
      exit="exit"
      className=" h-[100dvh] w-[100dvw] flex justify-center items-center fixed z-[99999] bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            className=" flex text-white text-5xl text-center absolute z-[99999]"
            variants={{
              initial: {
                scale: 1,
                rotate: 0,
              },
              enter: {
                rotate: 140,
                translateX: 1000,
                translateY: 1000,
                scale: 20,
                transition: { duration: 1.2, delay: 3.5 },
              },
            }}
            initial="initial"
            animate="enter"
          >
            <motion.div
              className=" flex items-center justify-center "
              variants={{
                initial: {
                  opacity: 0,
                },
                enter: {
                  opacity: 1,
                  transition: { duration: 1.2, delay: 0.2 },
                },
              }}
              initial="initial"
              animate="enter"
            >
              <motion.div
                variants={{
                  initial: {
                    rotate: 0,
                  },
                  enter: {
                    rotate: -70,
                    translateX: 47,
                    transition: { duration: 0.8, delay: 2.5 },
                  },
                }}
                className=" h-10 w-[200px] border border-white border-r-0 flex"
              >
                <motion.div
                  variants={load(1.2, 0.2)}
                  className=" block h-full bg-white"
                />
              </motion.div>
              <motion.div
                variants={{
                  initial: {
                    rotate: 0,
                  },
                  enter: {
                    rotate: 70,
                    translateX: -47,
                    transition: { duration: 0.8, delay: 2.5 },
                  },
                }}
                className=" flex h-10 w-[200px] border border-white border-l-0"
              >
                <motion.div
                  variants={load(1, 1.3)}
                  className=" block h-full bg-white"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <svg className=" absolute top-0 w-full h-[calc(100%+300px)] ">
            <motion.path
              className="fill-[#141516]"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
