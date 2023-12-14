"use client";
import { forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavMenuButton from "./nav-menu-button";
import Magnetic from "../../../magnetic";
import { cn } from "@/lib/utlis";
import { useNav } from "@/hooks/use-nav";
import { useCursor } from "@/hooks/use-cursor";
import { perspective } from "@/lib/motion";
import MenuItem from "./menu-item";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEyes } from "@/hooks/use-eyes";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.7, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "40px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.7,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const NavMenu = forwardRef(function Index(props: any, ref: any) {
  const nav = useNav();
  const cursor = useCursor();
  const maxRotate = 45;
  const pathname = usePathname();
  const links = [
    {
      title: "Index",
      href: "/",
    },
    {
      title: "Projects",
      href: "/",
    },

    {
      title: "Contact",
      href: "/",
    },
  ];
  const eyes = useEyes();
  const plane = useRef<any>(null);
  const eye = useRef<any>(null);

  const manageMouseMove = (e: any) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    eye.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const contactLink = ["iamnevir@gmail.com", "(+84) 374 168 741"];
  const socialLink = [
    { title: "github", url: "https://github.com/iamnevir" },
    { title: "facebook", url: "https://www.facebook.com/iamnanhdz" },
    { title: "Instagram", url: "https://www.instagram.com/it.nevir" },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/anh-ng%C3%B4-ng%E1%BB%8Dc-7a858026a/",
    },
  ];
  return (
    <>
      <motion.div
        variants={perspective({ delay: pathname === "/" ? 5 : 0.6 })}
        custom={1}
        initial="initial"
        animate="enter"
        exit="exit"
        className={cn(" fixed right-8 top-5 ")}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        onMouseEnter={() => {
          cursor.setWidth(50);
          cursor.setHeight(50);
        }}
      >
        <Magnetic isActive={nav.isOpen}>
          <motion.div
            className={cn(
              "  rounded-3xl shadow-md   flex items-end flex-col bg-[#FFFFFF]"
            )}
            variants={menu}
            animate={nav.isOpen ? "open" : "closed"}
            initial="closed"
          >
            <div
              className={cn(
                " w-[130px] h-full -left-10 top-0 absolute duration-500",
                nav.isOpen ? "" : "translate-x-40",
                eyes.className
              )}
            >
              <Image
                ref={eye}
                src={eyes.isOpen ? "/eyes-love.png" : "/eyes.png"}
                alt="eye"
                width={150}
                height={100}
              />
            </div>
            <div className={cn(" relative  p-10 pointer-events-none ")}>
              <NavMenuButton ref={ref} />
            </div>
            <motion.div
              ref={plane}
              className={cn(
                "  px-20 pt-0 gap-5 transition-all  flex flex-col justify-start items-start",
                nav.isOpen ? "" : "hidden"
              )}
            >
              {links.map((item, index) => (
                <div key={index} className=" hover:translate-x-10 duration-500">
                  <MenuItem primary={item.title} secondary={item.title} />
                </div>
              ))}
            </motion.div>
            <div
              className={cn(
                " flex items-end justify-between duration-300 p-16 w-full",
                nav.isOpen ? "" : " translate-x-[500px]"
              )}
            >
              <div className="flex flex-col items-start">
                {contactLink.map((item, index) => (
                  <LinkItem key={index} text={item} />
                ))}
              </div>
              <div className="flex flex-col items-start uppercase text-sm">
                {socialLink.map((item, index) => (
                  <LinkItem key={index} text={item.title} url={item.url} />
                ))}
              </div>
            </div>
          </motion.div>
        </Magnetic>
      </motion.div>
    </>
  );
});
const LinkItem = ({ text, url }: { text: string; url?: string }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(url ? url : "")}
      className="flex items-center group gap-0 cursor-pointer"
    >
      <div className=" opacity-0 group-hover:opacity-100 duration-700">
        ⮡&nbsp;
      </div>
      <div className=" -translate-x-3  group-hover:translate-x-0 duration-700">
        {text}
      </div>
    </div>
  );
};

export default NavMenu;
