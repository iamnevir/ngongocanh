import Magnetic from "@/components/magnetic";
import NeonButton from "@/components/neon-button";
import { useCursor } from "@/hooks/use-cursor";

const ReadMore = () => {
  const cursor = useCursor();
  return (
    <div
      className=""
      onMouseEnter={() => cursor.setClassName("border-none")}
      onMouseLeave={() => cursor.setClassName("")}
    >
      <Magnetic>
        <NeonButton />
      </Magnetic>
    </div>
  );
};

export default ReadMore;
