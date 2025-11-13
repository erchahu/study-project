import { Canvas, Circle, Path } from "@shopify/react-native-skia";
import { memo } from "react";

const SmileFace = () => {
  return (
    <Canvas style={{ flex: 1, backgroundColor: '#defbf7' }}>
      <Circle cx={100} cy={100} r={80} color={'red'}></Circle>
      <Circle cx={60} cy={80} r={10} color={'yellow'}></Circle>
      <Circle cx={140} cy={80} r={10} color={'yellow'}></Circle>
      <Path
        path="M 60 140 C 80 160 120 160 140 140 Z"
        strokeWidth={2}
        color="yellow"
        style='stroke'
      />
    </Canvas>
  )
}

export default memo(SmileFace)