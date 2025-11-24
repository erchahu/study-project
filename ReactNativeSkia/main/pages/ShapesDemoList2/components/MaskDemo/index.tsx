import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  Rect,
  useImage,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const MaskDemo = () => {
  const image = useImage(require('../../../../assets/images/1.jpeg'));
  
  return (
    <>
      <Canvas style={{ width, height: 256 }}>
        <Mask
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} opacity={0.7}/>
            </Group>
          }
        >
          <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        </Mask>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Mask
          mask={
            <Group>
              <Rect x={0} y={0} width={256} height={256} opacity={0.5} />
              <Circle cx={128} cy={128} r={64} opacity={0.7}/>
            </Group>
          }
        >
          <Rect x={0} y={0} width={256} height={256} color="red" />
        </Mask>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} color="white" />
              <Circle cx={128} cy={128} r={64} color="black" />
            </Group>
          }
        >
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Mask>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} color="#6288aa" />
              <Circle cx={128} cy={128} r={64} color="#6cc8aa" />
            </Group>
          }
        >
          <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        </Mask>
      </Canvas>
    </>
  );
};

export default memo(MaskDemo);
