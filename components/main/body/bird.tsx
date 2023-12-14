import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame, extend } from "@react-three/fiber";
import { Effects, Environment, Html, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { easing } from "maath";
import { randomRange } from "@/lib/utlis";
import Status from "./status";
import Explore from "./explore";

function Bird({ speed, factor, url, ...props }: any) {
  const { nodes, materials, animations }: any = useLoader(GLTFLoader, url);
  const group = useRef<any>();
  const mesh = useRef<any>();
  const [start] = useState(() => Math.random() * 5000);
  const [mixer] = useState(() => new THREE.AnimationMixer(nodes));
  useEffect(
    () => void mixer.clipAction(animations[0], group.current).play(),
    []
  );

  useFrame((state, delta) => {
    mesh.current.position.y = Math.sin(start + state.clock.elapsedTime) * 5;
    mesh.current.rotation.x =
      Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10;
    mesh.current.rotation.y =
      (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2;
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) *
      Math.cos((delta * factor) / 2) *
      randomRange(0.1, 0.5);
    mixer.update(delta * speed);
  });

  return (
    <group ref={group} dispose={null}>
      <scene name="Scene" {...props}>
        <mesh
          ref={mesh}
          scale={1.3}
          name="Object_0"
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[Math.PI / randomRange(1, 2), 0, 0]}
          geometry={nodes.Object_0.geometry}
          material={materials.Material_0_COLOR_0}
        />
      </scene>
    </group>
  );
}

function Birds() {
  return new Array(50).fill(0).map((_, i) => {
    const x = randomRange(0, 70);
    const y = -10 + Math.random() * randomRange(10, 40);
    const z = -5 + Math.random() * randomRange(10, 40);
    let speed = randomRange(0.5, 2);
    let factor = randomRange(0.5, 2);

    return (
      <Bird
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={speed}
        factor={factor}
        url={`/Flamingo.glb`}
      />
    );
  });
}

export default function BirdCanvas() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <color attach="background" args={["#FFE4E6"]} />
        <ambientLight intensity={7} />
        <Suspense fallback={null}>
          <Status />

          <Birds />
          <Environment preset="city" />
          <Html as="div" fullscreen transform position={[0, -10, -10]}>
            <Explore
              delay={4}
              translateY={2}
              text="Fly with me"
              link="/projects"
            />
          </Html>
        </Suspense>
        <Rig />
        <Preload />
      </Canvas>
    </>
  );
}
export function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <></>;
}
