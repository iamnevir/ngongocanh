"use client";
import StickyCursor from "@/components/cursor";
import Footer from "@/components/main/footer/footer";
import Logo from "@/components/main/header/logo/logo";
import NavMenu from "@/components/main/header/menu/nav-menu";
import Navigation from "@/components/main/header/navigation/navigation";
import Preloader from "@/components/preloader";
import { TypingText } from "@/components/main/header/navigation/typing-text";
import { useCursor } from "@/hooks/use-cursor";
import { AnimatePresence } from "framer-motion";
import { ElementRef, useEffect, useRef, useState } from "react";
import BirdCanvas from "@/components/main/body/bird";

export default function Home() {
  const stickyElement = useRef<ElementRef<"div">>(null);
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
      <div className=" flex items-center bg-rose-100 w-[100dvw] h-[100vdh] overflow-clip">
        <BirdCanvas />
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navigation />
        <Logo />
        <NavMenu ref={stickyElement} />
        <StickyCursor stickyElement={stickyElement} />
        <Footer />
      </div>
    </>
  );
}
