import {
  Canvas,
  Group,
  Skia,
  Skottie,
  useClock,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const SkottieDemo = () => {
  
  const aniJson = require('.././../../../assets/images/1.json')
  const animation = Skia.Skottie.Make(JSON.stringify(aniJson));

  const aniJson2 = require('.././../../../assets/images/2.json')
  const animation2 = Skia.Skottie.Make(JSON.stringify(aniJson2));

  const clock = useClock();
  const frame = useDerivedValue(() => {
    const fps = animation.fps();
    const duration = animation.duration();
    const currentFrame =
      Math.floor((clock.value / 1000) * fps) % (duration * fps);
    return currentFrame;
  });

  const clock2 = useClock();
  const frame2 = useDerivedValue(() => {
    const fps = animation2.fps();
    const duration = animation2.duration();
    const currentFrame =
      Math.floor((clock2.value / 1000) * fps) % (duration * fps);
    return currentFrame;
  });

  const colorProps = animation.getColorProps();
  if (colorProps.length > 0) {
    // Change the first color property
    animation.setColor(colorProps[0].key, Skia.Color("rgb(5, 35, 104)"));
  }

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#daf1a7' }}>
        <Group transform={[{ scale: 0.5 }]}>
          <Skottie animation={animation} frame={80} />
        </Group>
      </Canvas>
      <Canvas style={{ flex: 1, height: 300, backgroundColor: '#daf1a7' }}>
        <Group transform={[{ scale: 0.5 }]}>
          <Skottie animation={animation} frame={frame} />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#daf1a7' }}>
        <Group transform={[{ scale: 0.5 }]}>
          <Skottie animation={animation2} frame={frame2} />
        </Group>
      </Canvas>
    </>
  );
};

export default memo(SkottieDemo);
