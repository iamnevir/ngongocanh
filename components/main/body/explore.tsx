"use client";
import AnimateButton from "@/components/animate-button";
import Magnetic from "@/components/magnetic";
import { useCursor } from "@/hooks/use-cursor";
import { useTransition } from "@/hooks/use-transition-page";
import { cn } from "@/lib/utlis";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Explore = ({
  link,
  text,
  className,
  delay,
  fontSize,
  iconSize,
  translateY,
}: {
  link: string;
  text: string;
  className?: string;
  delay: number;
  fontSize?: string;
  iconSize?: number;
  translateY: number;
}) => {
  const cursor = useCursor();
  return (
    <Magnetic>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              type: "spring",
              delay,
            },
          },
        }}
        onMouseEnter={() => cursor.setClassName("border-none")}
        onMouseLeave={() => cursor.setClassName("")}
        className={cn(
          "flex z-0 items-center justify-center w-[400px] duration-500 h-[140px] rounded-full",
          className
        )}
      >
        <Link href={link}>
          <AnimateButton
            translateY={translateY}
            text={text}
            iconSize={iconSize}
            fontSize={fontSize}
            className={cn("w-[500px] h-[130px] bg-rose-50", className)}
          />
        </Link>
      </motion.div>
    </Magnetic>
  );
};

export default Explore;
