import {
  BlendColor,
  Canvas,
  Circle,
  ColorMatrix,
  Group,
  Image,
  Lerp,
  LinearToSRGBGamma,
  SRGBToLinearGamma,
  useImage,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const ColorsFilters = () => {
  const image = useImage(require('../../../../assets/images/1.jpeg'));

  const r = 128;


  const blackAndWhite = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
  ];
  const purple = [
    1, -0.2, 0, 0, 0, 0, 1, 0, -0.1, 0, 0, 1.2, 1, 0.1, 0, 0, 0, 1.7, 1, 0,
  ];
  return (
    <>
      <Canvas style={{ width, height: 256 }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <ColorMatrix
            matrix={[
              -0.568, 0.19, 0.88, 0, 0, 0.69, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0.889,
            ]}
          />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <ColorMatrix
            matrix={[
              -0.568, 0.19, 0.88, 0, 0, 0.69, 0.535, -0.003, 0, 0, 0.015,
              1.69, -0.703, 0, 0, 0, 0, 0, 1, 0.889,
            ]}
          />
          <BlendColor color="#ff0ff0" mode="multiply" />
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="multiply" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="clear" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="color" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="colorBurn" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="colorDodge" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="darken" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="difference" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <BlendColor color="pink" mode="modulate" />
          <Circle cx={r} cy={r} r={r} color="yellow" />
          <Circle cx={2 * r} cy={r} r={r} color="green" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <Lerp t={0.5}>
            <ColorMatrix matrix={purple} />
            <ColorMatrix matrix={blackAndWhite} />
          </Lerp>
        </Image>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Circle cx={r} cy={r} r={r} color="lightblue" />
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <LinearToSRGBGamma>
            <BlendColor color="lightblue" mode="srcIn" />
          </LinearToSRGBGamma>
          <Circle cx={r} cy={r} r={r} />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Group>
          <SRGBToLinearGamma>
            <BlendColor color="lightblue" mode="srcIn" />
          </SRGBToLinearGamma>
          <Circle cx={r} cy={r} r={r} />
        </Group>
      </Canvas>
    </>
  );
};

export default memo(ColorsFilters);
