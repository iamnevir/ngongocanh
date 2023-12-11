import { perspective, slideIn } from "@/lib/motion";
import { motion, useAnimate } from "framer-motion";
import { useRef, useState } from "react";
import { useCursor } from "@/hooks/use-cursor";
import { cn } from "@/lib/utlis";
import Magnetic from "../../../magnetic";
import { TypingText } from "./typing-text";
const NavigationItem = ({
  title,
  href,
  i,
}: {
  title: string;
  href: string;
  i: number;
}) => {
  const cursor = useCursor();
  return (
    <Magnetic>
      <motion.div
        variants={perspective}
        custom={1}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" h-10"
        onMouseEnter={() => cursor.setClassName("border-none")}
        onMouseLeave={() => cursor.setClassName("")}
      >
        <TypingText title={title} textStyles="" />
      </motion.div>
    </Magnetic>
  );
};

export default NavigationItem;
