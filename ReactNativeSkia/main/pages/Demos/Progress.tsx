import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { memo } from "react";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"]

const Progress = () => {

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#b3e275' }}>
        <Rect x={0} y={100} width={width} height={20}>
          <LinearGradient
            start={vec(0, 100)}
            end={vec(width, 120)}
            colors={colors}
          />
        </Rect>
      </Canvas>
    </>
  )

}

export default memo(Progress)