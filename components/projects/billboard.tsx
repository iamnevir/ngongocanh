import Image from "next/image";
import Explore from "../main/body/explore";

const Billboard = () => {
  return (
    <div className=" relative w-[100dvw]">
      <Image
        src="/butterfly.svg"
        width={200}
        height={200}
        alt=""
        className=" absolute top-[20dvh] right-[10dvw]"
      />
      <span className="absolute left-0 w-full flex items-center justify-center uppercase top-10">
        Magic Keyboard & Us
      </span>
      <div className=" absolute left-[10dvw] top-[15dvh] text-8xl flex flex-col gap-2">
        <span className=" font-italic">Projects/</span>
        <span className=" uppercase">Magic Keyboard</span>
      </div>
      <div className=" absolute right-[15dvw] top-[45dvh] text-8xl">
        <span className="">Website</span>
        <br />
        <span className=" font-italic">Ecommerce</span>
      </div>
      <div className=" absolute top-[85dvh] w-full justify-between">
        <div className=" absolute left-[10dvw] flex flex-col items-start gap-3">
          <span className=" uppercase text-sm">Project Overview</span>
          <span className=" w-[450px] text-3xl font-medium">
            Website bán bàn phím cho thương hiệu Magic Keyboard, một công ty
            hàng đầu trong ngành công nghiệp bàn phím cơ thế giới.
          </span>
        </div>
        <div className=" absolute right-[40dvw] text-xl flex flex-col gap-2 items-start">
          <span className=" uppercase text-sm"> Tech Stack</span>
          <div className=" flex flex-col gap-0 ">
            <span>NextJs</span>
            <span>Next UI</span>
            <span>3D Development</span>
            <span>Convex Database</span>
            <span>Framer Motion</span>
            <span>Web Design (clone)</span>
          </div>
          <div className="ml-10">
            <Explore
              translateY={1}
              fontSize="text-lg gap-1"
              iconSize={20}
              delay={0.5}
              text="View Project"
              className=" w-[80px] h-[40px] bg-[#c3e4ff]"
              link="magickeyboard.vercel.app"
            />
          </div>
        </div>
        <div className=" absolute right-[20dvw] text-xl flex flex-col gap-2 items-start">
          <span className="flex flex-col uppercase text-sm">
            Date
            <span className=" text-base">Winter,2023</span>
          </span>
          <span className="flex flex-col uppercase text-sm">
            Client
            <span className=" text-base">Magic Keyboard</span>
          </span>
          <span className="flex flex-col uppercase text-sm">
            Location
            <span className=" text-base">Viet Nam</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
