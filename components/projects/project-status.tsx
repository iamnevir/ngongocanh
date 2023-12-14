import { Html, Text } from "@react-three/drei";
import Explore from "../main/body/explore";
export default function ProjectStatus({
  name,
  description,
  link,
  index,
}: {
  name: string;
  description: string;
  link: string;
  index: number;
}) {
  return (
    <>
      <Text
        fontSize={0.5}
        color="black"
        letterSpacing={-0.025}
        position={[3, 1, 3]}
      >
        {name}
      </Text>
      <Text
        fontSize={0.2}
        letterSpacing={-0.025}
        color="black"
        position={[3, 0, 2]}
      >
        {description}
      </Text>
      <Html position={[3 * index * 2, -0.3, 3]} scale={0.1}>
        <div className=" scale-50">
          <Explore delay={1} translateY={1.8} text="View Project" link={link} />
        </div>
      </Html>
    </>
  );
}
