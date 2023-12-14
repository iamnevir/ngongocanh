"use client";
import Explore from "@/components/main/body/explore";
import Billboard from "@/components/projects/billboard";
import Overview from "@/components/projects/overview";
import TransitionPage from "@/components/transition-page";
import { useScroll } from "@/hooks/use-scroll";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Gradient } from "whatamesh";
import Lenis from "@studio-freight/lenis";
const ProjectPage = () => {
  const gradient = new Gradient();
  const [isLoading, setIsLoading] = useState(true);
  const scroll = useScroll();

  const ref = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 1);
    })();
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    gradient.initGradient("#gradient-canvas");
    requestAnimationFrame(raf);
  }, []);

  const color = {
    "--gradient-color-1": "#c3e4ff",
    "--gradient-color-2": "#6ec3f4",
    "--gradient-color-3": "#eae2ff",
    "--gradient-color-4": "#b9beff",
  };

  const handleScroll = () => {
    scroll.setScroll(ref.current?.scrollTop !== 0);
  };

  return (
    <>
      <div
        ref={ref}
        onScroll={handleScroll}
        className=" overflow-hidden w-full h-full"
      >
        <AnimatePresence mode="wait">
          {isLoading && <TransitionPage color="#c3e4ff" />}
        </AnimatePresence>

        <canvas
          //@ts-ignore
          style={color}
          className=" h-[125dvh]"
          id="gradient-canvas"
          data-transition-in
        />
        <Billboard />
        <div className=" w-full h-[100dvh] ">
          <Overview />
        </div>
        <div className=" w-full h-[100dvh] "></div>
      </div>
    </>
  );
};

export default ProjectPage;
