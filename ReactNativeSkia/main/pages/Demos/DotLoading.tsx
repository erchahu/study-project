import React, { useEffect } from 'react';
import { Canvas, Circle, Group } from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

const HEIGHT = 100;

const DEFAULT_Y = 60;

const COLOR="#e26f84"

const DotLoading = () => {
  const trans = useSharedValue(DEFAULT_Y);
  const trans1 = useSharedValue(DEFAULT_Y);
  const trans2 = useSharedValue(DEFAULT_Y);

  useEffect(() => {
    const waveAnimation = withRepeat(
      withSequence(
        withTiming(DEFAULT_Y - 20, { duration: 500, easing: Easing.linear }),
        withTiming(DEFAULT_Y, { duration: 500, easing: Easing.linear }),
        withTiming(DEFAULT_Y + 20, { duration: 500, easing: Easing.linear }),
        withTiming(DEFAULT_Y, { duration: 500, easing: Easing.linear }),
        withTiming(DEFAULT_Y, { duration: 2000, easing: Easing.linear }),
      ),
      -1
    )

    trans.value = waveAnimation;

    trans1.value = withRepeat(withSequence(
      withTiming(DEFAULT_Y, { duration: 500 }), // 延迟500ms
      waveAnimation
    ), -1);

    trans2.value = withRepeat(withSequence(
      withTiming(DEFAULT_Y, { duration: 1000 }), // 延迟1000ms
      waveAnimation
    ), -1);
  }, [trans, trans1, trans2]);

  return (
    <Canvas style={{ width, height: HEIGHT, backgroundColor: '#e9c9c9' }}>
      <Group>
        <Circle cx={100} cy={trans} r={10} color={COLOR} />
        <Circle cx={140} cy={trans1} r={10} color={COLOR}/>
        <Circle cx={180} cy={trans2} r={10} color={COLOR}/>
      </Group>
    </Canvas>
  );
};

export default memo(DotLoading);

// import React, { useEffect } from 'react';
// import { Canvas, Circle, Group } from '@shopify/react-native-skia';
// import { memo } from 'react';
// import { Dimensions } from 'react-native';
// import {
//   Easing,
//   useSharedValue,
//   withDelay,
//   withRepeat,
//   withSequence,
//   withTiming,
// } from 'react-native-reanimated';

// const { width } = Dimensions.get('screen');
// const HEIGHT = 300;
// const DEFAULT_Y = 100;

// const DotLoading = () => {
//   const trans = useSharedValue(DEFAULT_Y);
//   const trans1 = useSharedValue(DEFAULT_Y);
//   const trans2 = useSharedValue(DEFAULT_Y);

//   useEffect(() => {
//     // 完整的波浪动画周期
//     const waveCycle = withSequence(
//       withTiming(80, { duration: 500, easing: Easing.linear }),
//       withTiming(100, { duration: 500, easing: Easing.linear }),
//       withTiming(120, { duration: 500, easing: Easing.linear }),
//       withTiming(100, { duration: 500, easing: Easing.linear }),
//       withTiming(100, { duration: 1000 }), // 休息
//     );

//     // 应用动画，每个点延迟500ms开始
//     trans.value = withRepeat(waveCycle, -1);
//     trans1.value = withRepeat(withDelay(500, waveCycle), -1);
//     trans2.value = withRepeat(withDelay(1000, waveCycle), -1);

//   }, [trans, trans1, trans2]);

//   return (
//     <Canvas style={{ width, height: HEIGHT, backgroundColor: '#e9c9c9' }}>
//       <Group>
//         <Circle cx={100} cy={trans} r={10} color="blue" />
//         <Circle cx={140} cy={trans1} r={10} color="red" />
//         <Circle cx={180} cy={trans2} r={10} color="green" />
//       </Group>
//     </Canvas>
//   );
// };

// export default memo(DotLoading);
