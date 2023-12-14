import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "./magnetic";

export default function Rounded({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: any) {
  const circle = useRef<any>(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className=" rounded-full border group border-black cursor-pointer relative flex items-center justify-center px-16 py-6"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        <p className=" relative z-[1] whitespace-nowrap duration-500 group-hover:text-white text-black">
          {children}
        </p>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className=" w-full h-[150%] absolute rounded-full top-[100%]"
        ></div>
      </div>
    </Magnetic>
  );
}
