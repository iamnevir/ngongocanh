import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

export default function OverviewItem({ data, index }: any) {
  const { name, images } = data;
  const outer = useRef<any>(null);
  const inner = useRef<any>(null);
  const mobile = window.screen.width < 768;
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
        if (!mobile) {
          manageMouseEnter(e);
        }
      }}
      onMouseLeave={(e) => {
        if (!mobile) {
          manageMouseLeave(e);
        }
      }}
      className="w-full sm:text-[6dvw] text-5xl font-medium font-sao text-black group flex items-center justify-between cursor-pointer origin-top"
      style={{ perspective: "80vw" }}
    >
      <div className=" w-full border-b border-black justify-center flex items-center">
        <span className=" sm:group-hover:scale-50 duration-500">
          <span className=" font-italic text-[2dvw]">{`0${index + 1}.`}</span>

          {name}
        </span>
      </div>
      {!mobile && (
        <div
          ref={outer}
          className=" flex absolute  w-full h-full overflow-hidden pointer-events-none top-[100%]"
          style={{ willChange: "top", top: "-100%" }}
        >
          <div
            ref={inner}
            className=" bg-transparent group-hover:bg-gradient-to-r  from-rose-300 to-purple-300 absolute whitespace-nowrap h-full flex"
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
                      src={images[0]}
                      fill
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className=" text-black">{name}</p>
                  <div className="h-[6vw] w-[16vw] relative overflow-hidden rounded-[3vw] mx-[1vw] flex">
                    <Image
                      src={images[1]}
                      fill
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className=" text-black">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
