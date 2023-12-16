"use client";
import AnimateButton from "@/components/animate-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Error = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full mt-[20vh] items-center flex flex-col">
      <Image src="/eyes.png" width={200} height={100} alt="" />
      <div className=" text-[3vw] font-bold">Oách🤣!! Nhầm rồii</div>
      <AnimateButton
        onClick={() => router.back()}
        translateY={2}
        text="Go Back"
      />
    </div>
  );
};

export default Error;
