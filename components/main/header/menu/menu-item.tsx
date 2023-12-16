import { useCursor } from "@/hooks/use-cursor";
import { useEyes } from "@/hooks/use-eyes";
import { useNav } from "@/hooks/use-nav";
import { cn } from "@/lib/utlis";
import { motion } from "framer-motion";

function MenuItem({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  const nav = useNav();
  const cursor = useCursor();
  const eyes = useEyes();
  return (
    <motion.div
      onMouseEnter={() => {
        cursor.setClassName("bg-none");
        eyes.onOpen();
      }}
      onMouseLeave={() => {
        cursor.setClassName("");
        eyes.onClose();
      }}
      className={cn(
        "text3d group duration-500 relative cursor-pointer sm:text-8xl text-6xl font-sao",
        nav.isOpen ? "" : "translate-x-[500px]"
      )}
    >
      <div className=" font-medium sm:text-8xl text-6xl duration-300  group-hover:-translate-y-[100%]">
        {primary}
      </div>

      <div className="secondary origin-bottom flex items-center absolute font-italic top-0  text-black opacity-0 duration-300  group-hover:opacity-100">
        {secondary}
      </div>
    </motion.div>
  );
}
export default MenuItem;
