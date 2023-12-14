import { useState } from "react";
import MenuModal from "./overview-modal";
import { motion } from "framer-motion";
import { mountAnim, opacity, slideLeft } from "./anim";
import OverviewItem from "./overview-item";
import Rounded from "../rounded-button";
const Overview = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const projects = [
    {
      title: "C2 Montreal",
      description: "To Send a FAX",
      src: "https://utfs.io/f/a15eb69c-09ec-4e9f-bcb3-0c23268c36f5-6e42xm.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      description: "To Send a FAX",
      src: "https://utfs.io/f/3eb8b75e-c769-4e87-ba01-a405d2a21993-6e43p1.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      description: "To Learn Everything",
      src: "https://utfs.io/f/13098031-14c2-4e18-a291-8fd567f216a3-s2fjrj.vercel.app.jpeg",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      description: "To See Everything",
      src: "https://utfs.io/f/bbf3c143-33f4-4720-8289-5eba070a7188-5p88gi.vercel.app.jpeg",
      color: "#706D63",
    },
  ];
  return (
    <div className=" w-full h-full">
      <MenuModal modal={modal} projects={projects} />
      <div className=" py-10 ml-20 text-3xl">Overview</div>
      <motion.div
        className=" flex relative h-full w-full flex-col"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        {projects.map((el, index) => (
          <div
            key={index}
            className=""
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
          >
            <OverviewItem data={el} />
          </div>
        ))}
      </motion.div>
      <div className=" mx-auto w-[200px] h-[150px] -mt-44">
        <Rounded backgroundColor="#c3e4ff">View More</Rounded>
      </div>
    </div>
  );
};

export default Overview;
