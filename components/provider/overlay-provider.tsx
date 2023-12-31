"use client";
import { ElementRef, useEffect, useRef } from "react";
import StickyCursor from "../cursor";
import Footer from "../main/footer/footer";
import Logo from "../main/header/logo/logo";
import NavMenu from "../main/header/menu/nav-menu";
import Navigation from "../main/header/navigation/navigation";

const OverlayProvider = ({ children }: { children: React.ReactNode }) => {
  const stickyElement = useRef<ElementRef<"div">>(null);

  return (
    <div className=" w-full h-full relative">
      {children}
      <Logo />
      <Navigation />
      <NavMenu ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <Footer />
    </div>
  );
};

export default OverlayProvider;
