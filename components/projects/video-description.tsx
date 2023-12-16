import Video from "next-video";
const VideoDescription = ({ src }: { src: string }) => {
  const mobile = window.screen.width < 768;
  return (
    <Video
      autoPlay
      controls={false}
      width={mobile ? 320 : 700}
      height={mobile ? 195 : 400}
      muted
      loop
      src={src}
    />
  );
};

export default VideoDescription;
