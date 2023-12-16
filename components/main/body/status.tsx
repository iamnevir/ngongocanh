import { Text } from "@react-three/drei";
export default function Status(props: any) {
  const mobile = window.screen.width <= 768;
  return (
    <>
      <Text
        fontSize={1}
        letterSpacing={-0.025}
        color="black"
        position={[0, mobile ? 7 : 10, -10]}
      >
        {"FULLSTACK DEVELOPER & MOTION STUDIO"}
      </Text>
      <Text
        fontSize={mobile ? 5 : 8}
        letterSpacing={-0.025}
        font="/italic.ttf"
        characters="creathe"
        color="black"
        position={[0, mobile ? 4 : 5, -10]}
      >
        {"Creating the"}
      </Text>
      <Text
        fontSize={mobile ? 5 : 9}
        letterSpacing={-0.025}
        color="black"
        position={[0, mobile ? -1 : -3, -10]}
      >
        {"unexpected"}
      </Text>
    </>
  );
}
