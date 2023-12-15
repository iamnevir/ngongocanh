import {
  ScrollScene,
  SmoothScrollbar,
  UseCanvas,
  useImageAsTexture,
  useScrollRig,
} from "@14islands/r3f-scroll-rig";
import {
  Html,
  MeshDistortMaterial,
  Scroll,
  ScrollControls,
  Text,
  useScroll,
  Image as ImageIml,
  MeshWobbleMaterial,
  useTexture,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import VideoDescription from "./video-description";
import { cn } from "@/lib/utlis";
import { Color } from "three";

const ScrollCanvas = ({ setWidth }: { setWidth: (v: number) => void }) => {
  return (
    <Canvas>
      <color attach="background" args={["#FFE4E6"]} />
      <Text fontSize={1} position={[0, 0, 0]} color="black">
        C.TAGLIAVINI
      </Text>

      <ScrollControls damping={0.5} distance={0.5} pages={4} horizontal>
        <Scroll html>
          <div className=" relative z-[1] overflow-hidden w-[500dvw] h-[100dvh] flex items-center px-10 space-x-24">
            <ScrollProgress setWidth={setWidth} />

            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/1.jpg" />
            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/2.jpg" />
            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/3.png" />
            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/4.jpg" />
            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/5.jpg" />
            <ImageCanvas src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/6.png" />
            <div className=" w-[700px] h-[60dvh]">
              <VideoDescription src="https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/video.mp4" />
            </div>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default ScrollCanvas;

function ScrollProgress({ setWidth }: { setWidth: (v: number) => void }) {
  const scroll = useScroll();

  useFrame(() => {
    setWidth(scroll.range(0, 1));
  });

  return <></>;
}

function ImageCanvas1({
  src,
  loading = "eager",
}: {
  src: string;
  loading?: "eager" | "lazy" | undefined;
}) {
  const texture = useTexture(src);
  return (
    <mesh position={[0, 0, 0]}>
      <ImageIml url={src} scale={5} />
      <MeshWobbleMaterial map={texture} factor={0.3} speed={1} />
    </mesh>
  );
}

function WebGLImage({ imgRef, ...props }: any) {
  // Load texture from the <img/> and suspend until its ready
  const texture = useImageAsTexture(imgRef);
  return (
    <mesh position={[0, 0, 5]}>
      <planeGeometry args={[1, 1, 16, 16]} />

      <MeshDistortMaterial
        transparent
        map={texture}
        radius={0.99}
        distort={0.2}
        speed={3}
      />
    </mesh>
  );
}

function ExampleComponent({
  src,
  loading = "eager",
  z,
}: {
  src: string;
  loading?: "eager" | "lazy" | undefined;
  z?: number;
}) {
  const el = useRef<any>();
  const img = useRef<any>();
  const { hasSmoothScrollbar } = useScrollRig();
  return (
    <>
      <div ref={el} className={cn(" w-[700px]  h-[60dvh]")}>
        <Image
          className=""
          ref={img}
          width={1440}
          height={880}
          loading={loading}
          src={src}
          alt="This will be loaded as a texture"
        />
      </div>
      {hasSmoothScrollbar && (
        <UseCanvas>
          <ScrollScene track={el} debug={false}>
            {(props) => (
              <Suspense fallback={null}>
                <WebGLImage imgRef={img} {...props} />
              </Suspense>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  );
}

function ImageCanvas({
  src,
  loading = "eager",
}: {
  src: string;
  loading?: "eager" | "lazy" | undefined;
}) {
  return (
    <>
      <div className={cn(" w-[700px]  h-[60dvh]")}>
        <Image
          className=""
          width={1440}
          height={880}
          loading={loading}
          src={src}
          alt=""
        />
      </div>
    </>
  );
}
