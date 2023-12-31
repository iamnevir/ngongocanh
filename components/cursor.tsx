"use client";
import { useEffect, useState, useRef, RefObject } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utlis";
import { useNav } from "@/hooks/use-nav";
import { useCursor } from "@/hooks/use-cursor";
export default function StickyCursor({
  stickyElement,
}: {
  stickyElement: any;
}) {
  const mobile = window.screen.width <= 768;
  const cu = useCursor();
  const nav = useNav();
  const cursor = useRef<any>(null);
  const cursorSize = cu.isHovered ? 50 : 30;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance: any) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    //center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (cu.isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y };

      //rotate
      rotate(distance);

      //stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = (e: any) => {
    cu.setIsHovered(true);
  };

  const manageMouseLeave = (e: any) => {
    cu.setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  useEffect(() => {
    stickyElement.current?.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current?.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement.current?.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current?.removeEventListener(
        "mouseleave",
        manageMouseLeave
      );
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [cu.isHovered]);

  const template = ({ rotate, scaleX, scaleY }: any) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  if (mobile) {
    return null;
  }
  return (
    <motion.div
      transformTemplate={template}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cu.isHovered ? cu.width : 30,
        height: cu.isHovered ? cu.height : 30,
      }}
      className={cn(
        " fixed w-10 h-10  rounded-full border  border-black pointer-events-none z-[99999]",
        cu.className === ""
          ? cu.isHovered
            ? !nav.isOpen
              ? "border border-black"
              : " bg-white"
            : nav.isOpen
            ? "bg-white"
            : " bg-transparent"
          : cu.className,
        cu.isMenu ? " mix-blend-difference" : ""
      )}
      ref={cursor}
    />
  );
}
