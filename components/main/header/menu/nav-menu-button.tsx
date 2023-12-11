import { useNav } from "@/hooks/use-nav";
import { cn } from "@/lib/utlis";
import { motion } from "framer-motion";
import { RefObject, forwardRef } from "react";

const NavMenuButton = forwardRef(function Index(
  props: any,

  ref: any
) {
  const nav = useNav();
  return (
    <div
      ref={ref}
      className={cn(
        " mix-blend-difference hover:scale-[4]  absolute top-0 right-0  w-[40px] pointer-events-auto  h-[40px] cursor-pointer rounded-3xl overflow-hidden",
        nav.isOpen ? " right-5 top-5" : ""
      )}
    >
      <motion.div
        className=" relative w-full h-full "
        animate={{ rotate: nav.isOpen ? 90 : -90 }}
        transition={{ duration: 0.7, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={cn(
            "w-full h-full group button relative  duration-700 transition-colors"
          )}
          onClick={() => nav.toggle()}
        >
          <PerspectiveText isActive={nav.isOpen} />
        </div>
        <div
          className=" relative w-full  h-full group button"
          onClick={() => nav.toggle()}
        >
          <PerspectiveText isActive={nav.isOpen} />
        </div>
      </motion.div>
    </div>
  );
});

function PerspectiveText({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={cn(
        "justify-center  group-hover:rotate-180 group-hover:scale-[0.3] z-10 relative  duration-700 flex flex-col gap-1 items-center w-full h-full pointer-events-none"
      )}
    >
      <div
        className={cn(
          " duration-700",
          isActive
            ? "w-[5px] bg-rose-100 h-5 absolute rounded-[10px] left-[17px] top-[10px] rotate-45"
            : "w-1 bg-rose-100 h-1 rounded-full "
        )}
      />
      <div
        className={cn(
          " duration-700",
          isActive
            ? "w-[5px] bg-rose-100 h-5 absolute rounded-[10px] left-[17px] top-[10px] -rotate-45"
            : "w-1 bg-rose-100 h-1 rounded-full "
        )}
      />
    </div>
  );
}

export default NavMenuButton;
