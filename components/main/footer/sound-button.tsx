import { randomRange } from "@/lib/utlis";
import Lottie from "lottie-react";
import sound from "@/public/sound.json";
import { useCursor } from "@/hooks/use-cursor";
import { ElementRef, useRef, useState } from "react";
import Magnetic from "../../magnetic";
const SoundButton = () => {
  const cursor = useCursor();
  const [play, setPlay] = useState(false);
  const ref = useRef<ElementRef<"audio">>(null);
  return (
    <>
      <Magnetic>
        <div
          onMouseEnter={() => cursor.setClassName("border-none")}
          onMouseLeave={() => cursor.setClassName("")}
          onClick={() => {
            {
              if (play) {
                ref.current?.pause();
                setPlay(false);
              } else {
                ref.current?.play();
                setPlay(true);
              }
            }
          }}
          className=" w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center cursor-pointer"
        >
          <Lottie color="white" loop={play} animationData={sound} />
        </div>
      </Magnetic>
      <audio ref={ref} loop={play} className=" hidden">
        <source
          src="https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/f6737377-bce2-4315-87cc-63d2933b0db6.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default SoundButton;
