import { Canvas, Circle, Path, processTransform3d, Skia, useClock, usePathInterpolation, usePathValue, vec } from "@shopify/react-native-skia"
import React, { memo, useEffect } from "react"
import { Dimensions } from "react-native"
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get('screen');

/**
 * ==========
 * usePathInterpolation
 * ==========
 */
const angryPath = Skia.Path.MakeFromSVGString("M 16 25 C 32 27 43 28 49 28 C 54 28 62 28 73 26 C 66 54 60 70 55 74 C 51 77 40 75 27 55 C 25 50 21 40 27 55 Z")!;
const normalPath = Skia.Path.MakeFromSVGString("M 21 31 C 31 32 39 32 43 33 C 67 35 80 36 81 38 C 84 42 74 57 66 60 C 62 61 46 59 32 50 C 24 44 20 37 21 31 Z")!;
const goodPath = Skia.Path.MakeFromSVGString("M 21 45 C 21 37 24 29 29 25 C 34 20 38 18 45 18 C 58 18 69 30 69 45 C 69 60 58 72 45 72 C 32 72 21 60 21 45 Z")!;


/**
 * ==========
 * usePathValue
 * ==========
 */
const rrct = Skia.Path.Make();
rrct.addRRect(Skia.RRectXY(Skia.XYWHRect(0, 0, 100, 100), 10, 10));

const AnimationsDemo3 = () => {

  /**
   * ==========
   * usePathInterpolation
   * ==========
   */
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 1000 });
  }, [progress]);

  const path = usePathInterpolation(progress, [0, 0.5, 1], [angryPath, normalPath, goodPath]);

  /**
   * ==========
   * usePathValue
   * ==========
   */
  const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan().onChange((event) => {
    rotateY.value -= event.changeX / 300;
  });

  const clip = usePathValue((path) => {
    "worklet";
    path.transform(
      processTransform3d([
        { translate: [50, 50] },
        { perspective: 300 },
        { rotateY: rotateY.value },
        { translate: [-50, -50] },
      ])
    );
  }, rrct);

  /**
   * ==========
   * useClock
   * ==========
   */
  const t = useClock();

  const transform = useDerivedValue(() => {
    const scale = (2 / (3 - Math.cos(2 * t.value))) * 200;
    return [
      { translateX: scale * Math.cos(t.value) },
      { translateY: scale * (Math.sin(2 * t.value) / 2) },
    ];
  });


  return (
    <>
      {/* 
        * ==========
        * usePathInterpolation
        * ==========
      */}
      <Canvas style={{ width, height: 300, backgroundColor: '#ed85c9' }}>
        <Path path={path} style="stroke" strokeWidth={5} strokeCap="round" strokeJoin="round" />
      </Canvas>

      {/* 
        * ==========
        * usePathValue
        * ==========
      */}
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Canvas style={{ width, height: 300, backgroundColor: '#bced85' }}>
            <Path path={clip} />
          </Canvas>
        </GestureDetector>
      </GestureHandlerRootView>
      
      {/* 
        * ==========
        * usePathValue
        * ==========
      */}
      <Canvas style={{ width, height: 300, backgroundColor: '#85edeb' }}>
        <Circle c={vec(0, 0)} r={50} color="yellow" transform={transform} />
      </Canvas>
    </>
  )

}

export default memo(AnimationsDemo3)
