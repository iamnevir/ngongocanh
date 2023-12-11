import { ElementRef, useEffect, useRef } from "react";

const SoundButton = ({ isPlay, url }: { isPlay: boolean; url: string }) => {
  const ref = useRef<ElementRef<"audio">>(null);
  useEffect(() => {
    if (isPlay) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlay]);
  return (
    <audio ref={ref}>
      <source src={url} type="audio/mpeg" />
    </audio>
  );
};

export default SoundButton;
