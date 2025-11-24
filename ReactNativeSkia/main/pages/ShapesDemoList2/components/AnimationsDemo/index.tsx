import { Canvas, Circle, Fill, Group, interpolateColors, LinearGradient, vec } from "@shopify/react-native-skia"
import { memo, useEffect } from "react"
import { Dimensions, useWindowDimensions } from "react-native"
import { useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get('screen');

const AnimationsDemo = () => {

  const size = 256;
  const r = useSharedValue(0);
  const c = useDerivedValue(() => size - r.value);
  useEffect(() => {
    r.value = withRepeat(withTiming(size * 0.33, { duration: 1000 }), -1);
  }, [r, size]);

  const RA = 300;
  const radius = useSharedValue(0);
  const terminal = useDerivedValue(() => RA - radius.value);
  useEffect(() => {
    radius.value = withRepeat(withTiming(RA * 0.33, { duration: 1000 }), 3)
  }, [radius])

  const startColors = [
    "rgba(34, 193, 195, 0.4)",
    "rgba(34,193,195,0.4)",
    "rgba(63,94,251,1)",
    "rgba(253,29,29,0.4)",
  ];
  const endColors = [
    "rgba(0,212,255,0.4)",
    "rgba(253,187,45,0.4)",
    "rgba(252,70,107,1)",
    "rgba(252,176,69,0.4)",
  ];

  const { width: dw, height: dh } = useWindowDimensions();
  const colorsIndex = useSharedValue(0);
  useEffect(() => {
    colorsIndex.value = withRepeat(
      withTiming(startColors.length - 1, {
        duration: 4000,
      }),
      -1,
      true
    );
  }, [colorsIndex, startColors.length]);
  const gradientColors = useDerivedValue(() => {
    return [
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], startColors),
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], endColors),
    ];
  });
  
  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#b495a9' }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={c} cy={r} r={r} color="magenta" />
          <Circle
            cx={size/2}
            cy={c}
            r={r}
            color="yellow"
          />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#ed85c9' }}>
        <Circle cx={radius} cy={radius} r={radius} color="#09f971a4" />
        <Circle cx={terminal} cy={radius} r={radius} color="#5109f9a3" />
        <Circle cx={RA / 2} cy={terminal} r={radius} color="#cdf909a3" />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#8ced85' }}>
        <Fill>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(dw, dh)}
            colors={gradientColors}
          />
        </Fill>
      </Canvas>
    </>
  )

}

export default memo(AnimationsDemo)
