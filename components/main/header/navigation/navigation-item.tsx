import { perspective, slideIn } from "@/lib/motion";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCursor } from "@/hooks/use-cursor";
import { cn } from "@/lib/utlis";
import Magnetic from "../../../magnetic";
import { TypingText } from "./typing-text";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/use-scroll";
const NavigationItem = ({
  title,
  href,
  i,
}: {
  title: string;
  href: string;
  i: number;
}) => {
  const pathname = usePathname();
  const cursor = useCursor();
  const show = useScroll();
  return (
    <Magnetic>
      <motion.div
        variants={perspective({ delay: pathname === "/" ? 5 : 0.6 })}
        custom={1}
        initial="initial"
        whileInView={!show.isScroll ? "enter" : "exit"}
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
