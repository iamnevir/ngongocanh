"use client";
import StickyCursor from "@/components/cursor";
import Footer from "@/components/main/footer/footer";
import Logo from "@/components/main/header/logo/logo";
import NavMenu from "@/components/main/header/menu/nav-menu";
import Navigation from "@/components/main/header/navigation/navigation";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { ElementRef, useEffect, useRef, useState } from "react";
import BirdCanvas from "@/components/main/body/bird";
import { useTransition } from "@/hooks/use-transition-page";
import TransitionPage from "../transition-page";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <div className=" flex items-center bg-rose-100 w-[100dvw] sm:h-[100vdh] h-full overflow-clip">
        {/* <FuzzyOverlay /> */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <BirdCanvas />
      </div>
    </>
  );
}
