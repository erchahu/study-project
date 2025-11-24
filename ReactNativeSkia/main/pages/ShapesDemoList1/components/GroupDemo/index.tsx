import {
  Blur,
  Canvas,
  Circle,
  ColorMatrix,
  Fill,
  FitBox,
  Group,
  Image,
  Paint,
  rect,
  Rect,
  RoundedRect,
  rrect,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const GroupDemo = () => {
  const paint = Skia.Paint();
  paint.setColor(Skia.Color('#a11cf3'));

  const image = useImage(require('../../../../assets/images/1.jpeg'));
  const rct = rect(40, 40, 120, 120);

  const rrct = rrect(rect(40, 40, 120, 120), 40, 20);

  const star = Skia.Path.MakeFromSVGString(
    'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  )!;

  return (
    <>
      {/* 可以作为组,类似与文件夹... 它的子元素将继承应用于该组的所有绘制属性 */}
      <Canvas style={{ width, height: 300 }}>
        <Group color="red">
          <Circle cx={60} cy={60} r={50} color="#00ff80" />
          <Rect x={40} y={60} color="#5100ff" width={80} height={90} />
          <RoundedRect x={100} y={160} width={80} height={90} r={10} />
        </Group>
      </Canvas>
      {/* 可以一同转换 */}
      <Canvas style={{ width, height: 400 }}>
        <Group color="red" transform={[{ skewX: Math.PI / 6 }]}>
          <Circle cx={60} cy={60} r={50} color="#00ff80" />
          <Rect x={40} y={60} color="#5100ff" width={80} height={90} />
          <RoundedRect x={100} y={160} width={80} height={90} r={10} />
        </Group>
      </Canvas>
      {/* 可以一同转换,设置圆心 */}
      <Canvas style={{ width, height: 400 }}>
        <Group
          color="red"
          transform={[{ skewX: Math.PI / 6 }]}
          origin={{ x: 100, y: 40 }}
        >
          <Circle cx={60} cy={60} r={50} color="#00ff80" />
          <Rect x={40} y={60} color="#5100ff" width={80} height={90} />
          <RoundedRect x={100} y={160} width={80} height={90} r={10} />
        </Group>
      </Canvas>
      {/* 可以一起设置透明度 */}
      <Canvas style={{ width, height: 400 }}>
        <Group
          color="red"
          transform={[{ skewX: Math.PI / 6 }]}
          origin={{ x: 100, y: 40 }}
          opacity={0.3}
        >
          <Circle cx={60} cy={60} r={50} color="#00ff80" />
          <Rect x={40} y={60} color="#5100ff" width={80} height={90} />
          <RoundedRect x={100} y={160} width={80} height={90} r={10} />
        </Group>
      </Canvas>
      {/* 可以一起裁剪矩形 */}
      <Canvas style={{ width: 200, height: 200 }}>
        <Group color="red">
          <Fill color="#00ff80" />
          <Group clip={rct}>
            <Image
              image={image}
              x={0}
              y={0}
              width={200}
              height={200}
              fit="cover"
            />
          </Group>
        </Group>
      </Canvas>
      {/* 可以一起裁剪圆角矩形 */}
      <Canvas style={{ width: 200, height: 200 }}>
        <Group color="red">
          <Fill color="#ddff00" />
          <Group clip={rrct}>
            <Image
              image={image}
              x={0}
              y={0}
              width={200}
              height={200}
              fit="cover"
            />
          </Group>
        </Group>
      </Canvas>
      {/* 可以一起裁剪其他形状 */}
      <Canvas style={{ width: 300, height: 300, backgroundColor: '#f89898' }}>
        <Group clip={star}>
          <Image
            image={image}
            x={0}
            y={0}
            width={256}
            height={256}
            fit="cover"
          />
        </Group>
      </Canvas>
      {/* 反向裁剪 */}
      <Canvas style={{ width: 300, height: 300, backgroundColor: '#caf898' }}>
        <Group clip={star} invertClip>
          <Image
            image={image}
            x={0}
            y={0}
            width={256}
            height={256}
            fit="cover"
          />
        </Group>
      </Canvas>
      {/* Fitbox 可以自动适应大小 */}
      {/* src: 源矩形区域，定义内容的原始边界 */}
      {/* dst: 目标矩形区域，定义内容要变换到的目标边界 */}
      {/* fit 属性值详解 */}
      {/* contain (默认值) ** 保持图像宽高比，完整显示整个图像在目标矩形内 */}
      {/* cover ** 保持图像宽高比，填满整个目标矩形，可能会裁剪部分图像 */}
      {/* fill ** 拉伸图像以完全填满目标矩形，不保持宽高比 */}
      {/* fitWidth ** 保持宽高比，宽度填满目标矩形，高度按比例调整 */}
      {/* fitHeight ** 保持宽高比，高度填满目标矩形，宽度按比例调整 */}
      {/* scaleDown ** 类似 contain，但不会放大图像（如果图像比目标区域小，保持原大小） */}
      {/* none ** 不进行任何适配，按图像原始尺寸显示 */}
      <Canvas style={{ width: 300, height: 300, backgroundColor: '#f398f8' }}>
        <FitBox src={rect(0, 0, 300, 300)} dst={rect(0, 0, 100, 100)}>
          <Group clip={star} invertClip>
            <Image
              image={image}
              x={0}
              y={0}
              width={256}
              height={256}
              fit="cover"
            />
          </Group>
        </FitBox>
      </Canvas>

      {/* 图层效果 --- TODO 需要结合后续进行*/}
      {/* 允许你对整个图层或组应用各种视觉效果 */}
      <Canvas style={{ width: 300, height: 300 }}>
        <Group
          color="lightblue"
          layer={
            <Paint>
              <Blur blur={20} />
              <ColorMatrix
                matrix={[
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,
                ]}
              />
            </Paint>
          }
        >
          <Circle cx={0} cy={128} r={128 * 0.95} />
          <Circle cx={256} cy={128} r={128 * 0.95} />
        </Group>
      </Canvas>
    </>
  );
};

export default memo(GroupDemo);
