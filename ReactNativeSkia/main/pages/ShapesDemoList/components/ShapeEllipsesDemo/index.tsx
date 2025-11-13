import {
  Canvas,
  Circle,
  Oval,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ShapeEllipsesDemo = () => {
  return (
    <>
      <Canvas style={{ width, height: 160, backgroundColor: '#863939' }}>
        {/* 圆 */}
        <Circle cx={80} cy={80} r={80} color="#e48a8a" />
        {/* 椭圆 */}
        <Oval x={160} y={40} width={40} height={80} color="#8ac4e4" />
      </Canvas>
    </>
  );
};

export default memo(ShapeEllipsesDemo);
