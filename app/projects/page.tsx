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

  return (
    <div className="w-[100dvw] h-[100vdh] overflow-hidden bg-rose-100">
      <AnimatePresence mode="wait">
        {isLoading && <TransitionPage color="#F7A6BB" />}
      </AnimatePresence>
      <Projects />
    </div>
  );
};

export default ProjectPage;
