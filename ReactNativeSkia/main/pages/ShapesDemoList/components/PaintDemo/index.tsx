import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Paint,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ShapePolygonsDemo = () => {

  const paint = Skia.Paint();
  paint.setColor(Skia.Color('#a11cf3'));

  const paint1 = Skia.Paint();
  paint1.setColor(Skia.Color('#1cb2f3'));
  paint1.setStrokeWidth(4)
  paint1.setStyle(1)

  return (
    <>
      {/* paint可以作为子元素用来描边, PS 官网讲可以用作填充 --- 无法复现 2.3.10 */}
      <Canvas style={{ width, height: 120 }}>
        <Circle cx={50} cy={50} r={50} color="lightblue">
          <Paint color="red" />
          <Paint color="#fcd889" style="stroke" strokeWidth={18} />
          <Paint color="#c1fc89" style="stroke" strokeWidth={9} />
        </Circle>
      </Canvas>
      {/* paint可以继承颜色属性 */}
      <Canvas style={{ width, height: 280 }}>
        <Group color="lightblue">
          {/* 继承淡蓝色 */}
          <Circle cx={60} cy={60} r={60} />
          {/* 继承淡蓝色 */}
          <Group style="stroke" strokeWidth={10}>
            <Circle cx={3 * 60} cy={3 * 60} r={60} />
          </Group>
        </Group>
      </Canvas>
      {/* 作为子元素进行渲染 */}
      <Canvas style={{ width, height: 120 }}>
        <Circle cx={60} cy={60} r={60}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(60 * 2, 60 * 2)}
            colors={['#a3f471', '#f4f271', '#f4a871']}
          />
        </Circle>
      </Canvas>
      {/* paint 作为属性 设置颜色 */}
      <Canvas style={{ width, height: 160 }}>
        <Circle cx={80} cy={80} r={80} paint={paint} />
      </Canvas>
      {/* paint 作为属性 设置边框 */}
      <Canvas style={{ width, height: 160 }}>
        <Circle cx={80} cy={80} r={80} paint={paint1} />
      </Canvas>
    </>
  );
};

export default memo(ShapePolygonsDemo);
