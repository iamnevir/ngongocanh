import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  Image as ImageImpl,
  Html,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import Overview from "./overview";

const projects = [
  {
    name: "C.Tagliavini",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/c-tagliavini/6.jpg",
    ],
  },
  {
    name: "dan.wills",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dan-wills/6.jpg",
    ],
  },
  {
    name: "dita.eyewear",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/5.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/6.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/dita-eyewear/7.jpg",
    ],
  },
  {
    name: "gemmy-would",
    images: [
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/1.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/2.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/3.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/4.jpg",
      "https://design-embraced.nyc3.digitaloceanspaces.com/gemmy-would/5.jpg",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <Overview />
    </>
  );
}
