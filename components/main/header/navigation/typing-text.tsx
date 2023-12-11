import { motion } from "framer-motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.div
    style={{ transformStyle: "preserve-3d" }}
    whileHover="show"
    initial="hidden"
    className={` relative cursor-pointer group  ${textStyles}`}
  >
    <motion.div className="px-3 py-1 group-hover:opacity-0 flex duration-500 pointer-events-none">
      {title}
    </motion.div>
    <motion.div className="  group-hover:shadow-md pointer-events-none shadow-black px-3 py-1 opacity-0 group-hover:opacity-100 rounded-full duration-700 group-hover:bg-rose-100 border-transparent flex items-center origin-bottom absolute  font-italic top-0">
      {Array.from(title).map((letter, index) => (
        <motion.div
          variants={{
            hidden: {
              translateY: 10,
            },
            show: {
              translateY: 0,
              transition: {
                type: "spring",
                duration: 1,
                delay: 0.05 * index,
              },
            },
          }}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
