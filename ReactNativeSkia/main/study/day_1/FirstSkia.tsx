import { Canvas, Circle } from "@shopify/react-native-skia";

export const FirstSkia = () => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Circle cx={0} cy={0} r={40} color="red" />
    </Canvas>
  );
};