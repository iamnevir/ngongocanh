import { useState } from "react";
import MenuModal from "./overview-modal";
import { motion } from "framer-motion";
import { opacity } from "./anim";
import OverviewItem from "./overview-item";
import { useCursor } from "@/hooks/use-cursor";
import { useRouter } from "next/navigation";
const Overview = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const cursor = useCursor();
  const router = useRouter();
  const projects = [
    {
      name: "C. Tagliavini",
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
      name: "Dan. Wills",
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
      name: "Dita Eyewear",
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
      name: "Gemmy Would",
      images: [
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/1.jpg",
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/2.jpg",
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/3.jpg",
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/4.jpg",
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/5.jpg",
        "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/6.jpg",
      ],
    },
  ];

  return (
    <div className=" w-[100dvw] h-full py-20 overflow-hidden ">
      <MenuModal modal={modal} projects={projects} />

      <motion.div
        className=" flex relative h-full w-full flex-col"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        {projects.map((el, index) => (
          <div
            key={index}
            onClick={() => router.push(`projects/magic-keyboard`)}
            className=""
            onMouseEnter={() => {
              setModal({ active: true, index });
              cursor.setClassName("border-none");
            }}
            onMouseLeave={() => {
              setModal({ active: false, index });
              cursor.setClassName("");
            }}
          >
            <OverviewItem data={el} index={index} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Overview;
