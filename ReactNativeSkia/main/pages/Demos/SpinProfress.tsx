import React, { useEffect } from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { memo } from "react";
import { Dimensions } from "react-native";
import { Easing, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const PRIMAARY_COLOR = "red";
const SIZE = 30;
const RADIUS = 30 / 4;

const HEIGHT = 300;

const SpinProfress = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(2 * Math.PI, { duration: 3000, easing: Easing.linear }), -1)
  }, [rotation]);

  const transform = useDerivedValue(() => [
    { rotate: rotation.value }
  ])

  return (
    <Canvas style={{ width, height: HEIGHT }}>
      <Group transform={transform} origin={{ x: 3 * SIZE / 2, y: 3 * SIZE / 2 }}>
        <Circle cx={SIZE + SIZE / 2} cy={SIZE} r={RADIUS} color={PRIMAARY_COLOR} opacity={0.3} />
        <Circle cx={SIZE} cy={SIZE + SIZE / 2} r={RADIUS} color={PRIMAARY_COLOR} opacity={0.5} />
        <Circle cx={SIZE * 2} cy={SIZE + SIZE / 2} r={RADIUS} color={PRIMAARY_COLOR} opacity={0.7} />
        <Circle cx={SIZE + SIZE / 2} cy={SIZE * 2} r={RADIUS} color={PRIMAARY_COLOR} opacity={0.9} />
      </Group>
    </Canvas>
  );
}

export default memo(SpinProfress);