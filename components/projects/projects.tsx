import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, Html } from "@react-three/drei";
import { ScrollControls, Scroll, useScroll } from "@/components/scroll-control";
import ProjectStatus from "./project-status";
import Explore from "../main/body/explore";
function Image(props: any) {
  const group = useRef<any>();
  const ref = useRef<any>();
  const data = useScroll();
  const [hover, set] = useState(false);
  useFrame((state: any, delta: any) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
    if (!hover) {
      ref.current.material.grayscale = THREE.MathUtils.damp(
        ref.current.material.grayscale,
        Math.max(0, 1 - data.delta * 1000),
        10,
        delta
      );
    }
  });
  return (
    <group ref={group}>
      <ImageImpl
        onPointerEnter={() => {
          set(true);
          ref.current.material.grayscale = 0;
        }}
        onPointerLeave={() => set(false)}
        ref={ref}
        {...props}
      />
    </group>
  );
}

function Page({
  urls,
  position,
  project,
}: {
  urls: string[];
  position: Vector3;
  project?: any;
}) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  const m = 0.4;
  return (
    <group position={position}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
      <Image
        position={[width * w * 2, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[3]}
      />
      <ProjectStatus
        name={project.name}
        description={project.description}
        link={project.link}
        index={project.index}
      />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  const project = [
    {
      name: "Magic Keyboard",
      description: "Ecommerce Website",
      link: "/projects/magic-keyboard",
      index: 0.6,
    },
    {
      name: "Notion",
      description: "Notion clone",
      link: "/projects/notion",
      index: 2,
    },
    {
      name: "Snapgram",
      description: "Social Website",
      link: "/projects/snapgram",
      index: 3,
    },
  ];
  return (
    <>
      <Page
        position={[width * 0, 0, 0]}
        urls={[
          "https://utfs.io/f/a15eb69c-09ec-4e9f-bcb3-0c23268c36f5-6e42xm.png",
          "https://utfs.io/f/13098031-14c2-4e18-a291-8fd567f216a3-s2fjrj.vercel.app.jpeg",
          "https://utfs.io/f/bbf3c143-33f4-4720-8289-5eba070a7188-5p88gi.vercel.app.jpeg",
          "https://uploadthing.com/f/3eb8b75e-c769-4e87-ba01-a405d2a21993-6e43p1.png",
        ]}
        project={project[0]}
      />
      <Page
        position={[width * 1.4, 0, 0]}
        urls={[
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/1180ee44-17ad-4a42-96cc-17a032c2e519.jpg",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/66bed05a-3ac4-4877-91f3-bbcb72ab76fc.jpg",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/0b48342f-fd20-4cd5-bfed-29956114b5eb.webp",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/0b48342f-fd20-4cd5-bfed-29956114b5eb.webp",
        ]}
        project={project[1]}
      />
      <Page
        position={[width * 2.4, 0, 0]}
        urls={[
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/1180ee44-17ad-4a42-96cc-17a032c2e519.jpg",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/66bed05a-3ac4-4877-91f3-bbcb72ab76fc.jpg",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/0b48342f-fd20-4cd5-bfed-29956114b5eb.webp",
          "https://files.edgestore.dev/eqbzivk0rbhgn1q7/publicFiles/_public/0b48342f-fd20-4cd5-bfed-29956114b5eb.webp",
        ]}
        project={project[2]}
      />
    </>
  );
}

export default function Projects() {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <color attach="background" args={["#FFE4E6"]} />
        <Suspense fallback={null}>
          <ScrollControls
            infinite
            horizontal
            damping={4}
            pages={4}
            distance={1}
          >
            <Scroll>
              <Pages />
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </>
  );
}
