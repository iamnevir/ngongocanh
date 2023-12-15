import Video from "next-video";
const VideoDescription = ({ src }: { src: string }) => {
  return (
    <Video
      autoPlay
      controls={false}
      width={700}
      height={400}
      muted
      loop
      src={src}
    />
  );
};

export default VideoDescription;
