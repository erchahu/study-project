import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  DisplacementMap,
  Fill,
  Group,
  Image,
  Morphology,
  Offset,
  Paint,
  RoundedRect,
  RuntimeShader,
  Shadow,
  Skia,
  Text,
  Turbulence,
  useFont,
  useImage,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const ImageFilterDemo = () => {
  const image = useImage(require('../../../../assets/images/3.jpeg'));
  const font = useFont(require('../../../../assets/fonts/bkai00mp-2.ttf'), 30)
  if (!image || !font) {
    return null;
  }


  const source = Skia.RuntimeEffect.Make(`
  uniform shader image;

  half4 main(float2 xy) {
    return image.eval(xy).rbga;
  }
  `)!;

const pd = PixelRatio.get();
const source1 = Skia.RuntimeEffect.Make(`
uniform shader image;

half4 main(float2 xy) {

  return image.eval(xy).rbga;
}
`)!;

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#863939' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Blur blur={6} mode="clamp">
            <ColorMatrix
              matrix={[
                -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
                1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
              ]}
            />
          </Blur>
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Fill color="#fdd7ee" />
        <RoundedRect
          x={32}
          y={32}
          width={192}
          height={192}
          r={32}
          color="#59c3f4"
        >
          <Shadow dx={12} dy={12} blur={25} color="#a8f7a4" />
          <Shadow dx={-12} dy={-12} blur={25} color="#f78f10" />
        </RoundedRect>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Fill color="#fafdd7" />
        <RoundedRect
          x={32}
          y={32}
          width={192}
          height={192}
          r={32}
          color="#59c3f4"
        >
          <Shadow dx={12} dy={12} blur={25} color="#a8f7a4" inner />
          <Shadow dx={-12} dy={-12} blur={25} color="#f78f10" inner />
        </RoundedRect>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Blur blur={6} mode="clamp" />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Blur blur={6} />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Blur blur={6} mode={'mirror'} />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Blur blur={6} mode={'repeat'} />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <DisplacementMap channelX="g" channelY="a" scale={20}>
            <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
          </DisplacementMap>
        </Image>
      </Canvas>
      <Canvas style={{ width: 256, height: 256 }}>
        <Fill color="lightblue" />
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <Offset x={64} y={64} />
        </Image>
      </Canvas>
      <Canvas style={{ width: 256, height: 256 }}>
        <Text text="Hello World" x={32} y={32} font={font} />
        <Text text="Hello World" x={32} y={64} font={font}>
          <Morphology radius={0.9} />
        </Text>
        <Text text="Hello World" x={32} y={96} font={font}>
          <Morphology radius={0.3} operator="erode" />
        </Text>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Group>
          <RuntimeShader source={source} />
          <Circle cx={128} cy={128} r={128} color="lightblue" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#867639' }}>
        <Group transform={[{ scale: 1 / pd }]}>
          <Group
            layer={
              <Paint>
                <RuntimeShader source={source1} />
              </Paint>
            }
            transform={[{ scale: pd }]}
          >
            <Fill color="#b7c9e2" />
            <Text
              text="Hello World"
              x={16}
              y={32}
              color="#e38ede"
              font={font}
            />
          </Group>
        </Group>
      </Canvas>
    </>
  );
};

export default memo(ImageFilterDemo);
