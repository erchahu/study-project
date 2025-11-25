import React, { useEffect, useMemo } from "react";
import { Canvas, Circle, Group, LinearGradient, Path, Rect, Skia, vec } from "@shopify/react-native-skia";
import { memo } from "react";
import { Dimensions } from "react-native";
import { Easing, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "purple", "blue", "cyan", "green", "yellow", "orange", "red"];

const HEIGHT = 300;
const RECT_WIDTH = width; // 固定矩形宽度

const RADIUS = 50;

const PercentCircle = () => {
  const percent = useSharedValue(0); // 从左侧开始

  const path = Skia.Path.Make();

  path.addCircle(100, 100, RADIUS);

  useEffect(() => {
    percent.value = withTiming(1, { duration: 5000 })
  }, [percent])

  const pathAnimation = useDerivedValue(() => {
    const path = Skia.Path.Make();
    path.addCircle(100, 100, RADIUS);

    if (percent.value <= 0.25) {
      path.trim(0.75, percent.value + 0.75, false)
    } else {
      path.trim(0, percent.value - 0.25, false)
      const path1 = Skia.Path.Make();
      path1.addCircle(100, 100, RADIUS);
      path1.trim(0.75, 1, false)
      path.addPath(path1);
    }

    // path.trim(0, percent.value, false) // 以右边为0基准

    return path;
  })

  // path.trim(0.75, 1, false)

  const circleCom = useMemo(() => (
    <Path 
      path={pathAnimation} 
      color={'#f00'} 
      style={'stroke'}
      strokeWidth={10} 
      strokeCap='round'
    />
  ), [])

  return (
    <Canvas style={{ width, height: HEIGHT, backgroundColor: '#e9c9c9' }}>
      <Circle cx={100} cy={100} r={RADIUS} color='#f0f0ee' style='stroke' strokeWidth={10} />
      {circleCom}
    </Canvas>
  );
}

export default memo(PercentCircle);