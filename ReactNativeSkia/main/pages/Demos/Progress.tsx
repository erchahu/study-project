import React, { useEffect } from "react";
import { Canvas, Group, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { memo } from "react";
import { Dimensions } from "react-native";
import { Easing, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];

const HEIGHT = 20;
const MARGIN = 100;
const RECT_WIDTH = width; // 固定矩形宽度

const Progress = () => {
  const translateX = useSharedValue(0); // 从左侧开始

  useEffect(() => {
    translateX.value = withRepeat(withTiming(width, { duration: 3000, easing: Easing.linear }), -1)
  }, [translateX]);

  const transform = useDerivedValue(() => [
    { translateX: translateX.value }
  ]);

  const transform2 = useDerivedValue(() => [
    { translateX: translateX.value - RECT_WIDTH }
  ]);

  return (
    <Canvas style={{ width, height: 300, backgroundColor: '#b3e275' }}>
      <Group transform={transform}>
        <Rect 
          x={0} 
          y={MARGIN} 
          width={RECT_WIDTH} 
          height={HEIGHT}
        >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(RECT_WIDTH, HEIGHT)}
            colors={COLORS}
          />
        </Rect>
      </Group>
      <Group transform={transform2}>
        <Rect 
          x={0} 
          y={MARGIN} 
          width={RECT_WIDTH} 
          height={HEIGHT}
        >
          <LinearGradient
            start={vec(0, 0)}
            end={vec(RECT_WIDTH, HEIGHT)}
            colors={COLORS}
          />
        </Rect>
      </Group>
    </Canvas>
  );
}

export default memo(Progress);