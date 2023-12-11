import { useCursor } from "@/hooks/use-cursor";
import { motion } from "framer-motion";
import SoundButton from "./sound-button";
import { useEffect, useState } from "react";
import ReadMore from "./read-more";
const Footer = () => {
  const [count, setCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  const startCounting = () => {
    const intervalId = setInterval(() => {
      if (isIncreasing) {
        setCount((prevCount) => (prevCount < 23 ? prevCount + 1 : prevCount));
      } else {
        setCount((prevCount) => (prevCount > 2 ? prevCount - 1 : prevCount));
      }
    }, 20);

    // Set the intervalId for cleanup later
    return intervalId;
  };

  const handleMouseEnter = () => {
    setIsIncreasing(false);
  };

  const handleMouseLeave = () => {
    setIsIncreasing(true);
  };

  useEffect(() => {
    const intervalId = startCounting();

    // Clean up interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isIncreasing]);
  return (
    <div className="flex items-center px-5  absolute bottom-0 w-full justify-between">
      <div className=" flex items-center gap-2">
        <SoundButton />
        <ReadMore />
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" group hover:cursor-none flex items-center gap-1 w-14"
      >
        <span className=" group-hover:rotate-180 rotate-0 duration-300">©</span>
        20{count < 10 ? `0${count}` : count}
      </div>
    </div>
  );
};

export default Footer;
