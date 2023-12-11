import * as THREE from "three";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Environment, Html, Text } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { easing } from "maath";
import { cn, randomRange } from "@/lib/utlis";
import AnimateButton from "@/components/animate-button";
import { TypingText } from "../header/navigation/typing-text";
import { useSpring, a } from "@react-spring/three";
import Magnetic from "@/components/magnetic";
import { useCursor } from "@/hooks/use-cursor";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 4500);
    })();
  }, []);
  return (
    <>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <color attach="background" args={["#FFE4E6"]} />
        <ambientLight intensity={8} />
        <Suspense fallback={null}>
          <Status />
          <Birds />
          <Environment preset="city" />
          <Html as="div" fullscreen transform position={[0, -10, -10]}>
            <Magnetic>
              <div
                className={cn(
                  "flex z-0 items-center justify-center w-[400px] h-[140px] rounded-full",
                  isLoading ? "hidden" : ""
                )}
              >
                <AnimateButton
                  text="Fly with me"
                  className="w-[500px] h-[130px] bg-rose-50"
                />
              </div>
            </Magnetic>
          </Html>
        </Suspense>
        <Rig />
      </Canvas>
    </>
  );
}
function Rig() {
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

function Status(props: any) {
  const AnimatedText = a(Text);
  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, 0],
      color: "#ff6d6d",
    }),
    []
  );
  const handlePointerEnter = () => {
    api.start({
      scale: 1.05,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    });
  };

  return (
    <>
      <AnimatedText
        fontSize={1}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        scale={springs.scale}
        letterSpacing={-0.025}
        color="black"
        position={[0, 10, -10]}
      >
        {"FULLSTACK DEVELOPER & MOTION STUDIO"}
      </AnimatedText>
      <AnimatedText
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        scale={springs.scale}
        fontSize={8}
        letterSpacing={-0.025}
        font="/italic.ttf"
        characters="creathe"
        color="black"
        position={[0, 6, -10]}
      >
        {"Creating the"}
      </AnimatedText>
      <AnimatedText
        fontSize={9}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        scale={springs.scale}
        letterSpacing={-0.025}
        color="black"
        position={[0, -3, -10]}
      >
        {"unexpected"}
      </AnimatedText>
    </>
  );
}
