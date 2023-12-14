import { Text } from "@react-three/drei";
export default function Status(props: any) {
  return (
    <>
      <Text
        fontSize={1}
        letterSpacing={-0.025}
        color="black"
        position={[0, 10, -10]}
      >
        {"FULLSTACK DEVELOPER & MOTION STUDIO"}
      </Text>
      <Text
        fontSize={8}
        letterSpacing={-0.025}
        font="/italic.ttf"
        characters="creathe"
        color="black"
        position={[0, 6, -10]}
      >
        {"Creating the"}
      </Text>
      <Text
        fontSize={9}
        letterSpacing={-0.025}
        color="black"
        position={[0, -3, -10]}
      >
        {"unexpected"}
      </Text>
    </>
  );
}
