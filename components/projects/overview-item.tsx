import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function OverviewItem({ data }: any) {
  const { title, description, src } = data;
  const outer = useRef<any>(null);
  const inner = useRef<any>(null);

  const manageMouseEnter = (e: any) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e: any) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    <div
      onMouseEnter={(e) => {
        manageMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e);
      }}
      className="w-full text-[5vw]  text-black group flex items-center justify-between cursor-pointer origin-top"
      style={{ perspective: "80vw" }}
    >
      <div className=" px-40 border-b  border-black w-full justify-between flex items-center">
        <span className="group-hover:text-slate-500 translate-x-0 group-hover:-translate-x-5 duration-500">
          {title}
        </span>
        <span className=" text-[2vw] group-hover:text-slate-500 translate-x-0 group-hover:translate-x-5 duration-500">
          {" "}
          {description}
        </span>
      </div>

      <div
        ref={outer}
        className=" flex absolute  w-full h-full overflow-hidden pointer-events-none top-[100%]"
        style={{ willChange: "top", top: "-100%" }}
      >
        <div
          ref={inner}
          className=" bg-transparent group-hover:bg-gradient-to-r  from-sky-300 to-indigo-300 absolute whitespace-nowrap h-full flex"
          style={{ willChange: "top" }}
        >
          {[...Array(2)].map((_, index) => {
            return (
              <div
                key={index}
                className="flex sliderInfinity items-center  duration-300 relative opacity-0 group-hover:opacity-100"
              >
                <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
                  <Image
                    src={src}
                    fill
                    alt="image"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className=" text-black">{description}</p>
                <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
                  <Image
                    src={src}
                    fill
                    alt="image"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className=" text-black">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
