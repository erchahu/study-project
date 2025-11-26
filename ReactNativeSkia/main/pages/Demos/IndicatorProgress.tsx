import React, { useEffect } from "react";
import { Canvas, Group, Path, Skia } from "@shopify/react-native-skia";
import { memo } from "react";
import { Dimensions, View } from "react-native";
import { Easing, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const HEIGHT = 200;

const IndicatorProgress = () => {
  const rotation = useSharedValue(0);

  const transform = useDerivedValue(() => [
    { rotate: rotation.value }
  ]);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(2 * Math.PI, { duration: 3000, easing: Easing.linear }), -1)
  }, [rotation]);

  const path = Skia.Path.Make();
  path.addCircle(100, 100, 50);
  path.trim(0.75, 1, false);

  const rotation2 = useSharedValue(0);

  const transform2 = useDerivedValue(() => [
    { rotate: rotation2.value }
  ]);
  
  const trim2 = useDerivedValue(() => {
    const path2 = Skia.Path.Make();
    path2.addCircle(100, 100, 50);

    // if (rotation2.value < 2 * Math.PI) {
    //   path2.trim(0, 0.25, false);
    // } else if (rotation2.value < 4 * Math.PI) {
    //   path2.trim(0, 0.5, false);
    // } else if (rotation2.value < 6 * Math.PI) {
    //   path2.trim(0, 0.75, false);
    // }

    const progress = rotation2.value / (6 * Math.PI);
    let trimEnd = 0.25;

    if (progress > 0.5) {
      trimEnd = 0.25 + (0.75 - progress * 0.75);
    } else {
      trimEnd = 0.25 + progress * 0.75;
    }

    path2.trim(0, trimEnd, false);

    return path2;
  });

  useEffect(() => {// 转三圈
    rotation2.value = withRepeat(withTiming(6 * Math.PI, { duration: 3000, easing: Easing.linear }), -1)
  }, [rotation2]);

  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Canvas style={{ width: width / 2, height: HEIGHT }}>
        <Group transform={transform} origin={{ x: 100, y: 100 }}>
          <Path path={path} style='stroke' strokeCap='round' strokeJoin='round' strokeWidth={8} color='#f99000' />
        </Group>
      </Canvas>
      <Canvas style={{ width: width / 2, height: HEIGHT }}>
        <Group transform={transform2} origin={{ x: 100, y: 100 }}>
          <Path path={trim2} style='stroke' strokeCap='round' strokeJoin='round' strokeWidth={8} color='#f99000' />
        </Group>
      </Canvas>
    </View>
  );
}

export default memo(IndicatorProgress);