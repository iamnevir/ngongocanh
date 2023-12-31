"use client";
import TransitionPage from "@/components/transition-page";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Overview from "./overview";

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

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 1);
    })();
  }, []);
  return (
    <>
      <div className="w-[100dvw] h-[100dvh] justify-center flex overflow-hidden bg-rose-100">
        <AnimatePresence mode="wait">
          {isLoading && <TransitionPage color="#F7A6BB" />}
        </AnimatePresence>
        <Overview />
      </div>
    </>
  );
}
