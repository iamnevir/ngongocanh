"use client";
import TransitionPage from "@/components/transition-page";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Projects from "@/components/projects/projects";
const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 1);
    })();
  }, []);
  const projects = [
    {
      name: "Magic Keyboard",
      images: [],
      color: {
        "--gradient-color-1": "#ffc2fd",
        "--gradient-color-2": "#f4c3e9",
        "--gradient-color-3": "#d6aadf",
        "--gradient-color-4": "#f7cfec",
      },
    },
    {
      name: "Magic Keyboard",
      images: [],

      color: {
        "--gradient-color-1": "#c3e4ff",
        "--gradient-color-2": "#6ec3f4",
        "--gradient-color-3": "#eae2ff",
        "--gradient-color-4": "#b9beff",
      },
    },
  ];
  return (
    <div className="w-[100dvw] h-[100vdh] overflow-auto">
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage color="#FFE4E6" />}
      </AnimatePresence>
      <Projects />
    </div>
  );
};

export default ProjectPage;
