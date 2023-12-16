"use client";
import TransitionPage from "@/components/transition-page";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Gradient } from "whatamesh";
import ScrollCanvas from "@/components/projects/scroll-canvas";

const projects = [
  {
    name: "C.Tagliavini",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/6.jpg",
    ],
  },
  {
    name: "dan.wills",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/6.jpg",
    ],
  },
  {
    name: "dita.eyewear",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/6.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/7.jpg",
    ],
  },
  {
    name: "gemmy-would",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/5.jpg",
    ],
  },
];

const Project = () => {
  const gradient = new Gradient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 1);
    })();

    // gradient.initGradient("#gradient-canvas");
  }, []);

  const color = {
    "--gradient-color-1": "#c3e4ff",
    "--gradient-color-2": "#6ec3f4",
    "--gradient-color-3": "#eae2ff",
    "--gradient-color-4": "#b9beff",
  };
  const [width, setWidth] = useState(0);
  return (
    <div className=" justify-center overflow-hidden flex h-full sm:h-max">
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage color="#F7A6BB" />}
      </AnimatePresence>
      {/* <canvas
            //@ts-ignore
            style={color}
            className=" h-[100dvh] w-full"
            id="gradient-canvas"
            data-transition-in
          /> */}
      <ScrollCanvas setWidth={setWidth} />

      <div className="absolute bottom-6 w-[150px] overflow-hidden rounded-full z-50 bg-black/10 h-[5px]">
        <div
          style={{ width: `${width * 100}%` }}
          className=" rounded-full z-50 bg-black h-[5px]"
        ></div>
      </div>
    </div>
  );
};

export default Project;
