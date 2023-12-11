import { cn } from "@/lib/utlis";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/use-mouse-position";
import { useCursor } from "@/hooks/use-cursor";

const Logo = () => {
  const { x, y } = useMousePosition();
  const cursor = useCursor();
  return (
    <motion.div
      onMouseEnter={() => cursor.setClassName("border-none")}
      onMouseLeave={() => cursor.setClassName("")}
      variants={{
        initial: {
          opacity: 0,
          rotateX: 90,
          translateY: 0,
          translateX: -50,
        },
        enter: (i: any) => ({
          opacity: 1,
          rotateX: 0,
          translateY: 0,
          translateX: 0,
          transition: {
            duration: 0.65,
            delay: 5.2,
            ease: [0.215, 0.61, 0.355, 1],
            opacity: { duration: 0.35 },
          },
        }),
      }}
      initial="initial"
      animate="enter"
      className=" fixed left-7 top-5 flex items-center gap-1 font-medium cursor-pointer  text-black rounded-[10px]"
    >
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - 60 / 1.15}px ${y - 60 / 1.15}px`,
          WebkitMaskSize: `${60}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className={cn(
          " w-full h-full flex items-center gap-1 justify-center  text-2xl mask rounded-[10px] font-sao"
        )}
      >
        ngo ngoc anh
      </motion.div>

      <div
        className={cn(
          " w-full h-full flex items-center gap-1 whitespace-nowrap  text-[28px]"
        )}
      >
        nevir <span className="font-sao text-3xl mb-[3px]">studio</span>
        <div className=" flex items-center justify-center text-[8px] w-3 h-3  border mb-4 border-black rounded-full bg-transparent">
          R
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;
