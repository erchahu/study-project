import { Canvas, Circle, Group, Line, Path, Points, Rect, vec } from "@shopify/react-native-skia";
import { memo } from "react";

const SmileFace1 = () => {
  return (
    <Canvas style={{ flex: 1, backgroundColor: '#b6d2f4' }}>
      {/* 脸 */}
      <Group>
        <Circle cx={100} cy={100} r={40} color={'#f6f6d8'}></Circle>
        {/* 眼睛 */}
        <Group>
          <Circle cx={80} cy={90} r={6} color={'black'}></Circle>
          <Circle cx={120} cy={90} r={6} color={'black'}></Circle>
        </Group>
        {/* 鼻子 */}
        <Points points={[
          vec(100, 110),
        ]} style='fill' strokeWidth={7} color={'#fefe52'} />
        {/* 嘴巴 */}
        <Path
          path="M 80 120 C 90 130 110 130 120 120 Z"
          strokeWidth={2}
          color='#f88651'
          style='fill'
        />
      </Group>

      {/* 身体和腿和四肢 */}
      <Group>
        {/* 上肢 */}
        <Line p1={vec(72, 150)} p2={vec(50, 200)} strokeWidth={6} color='#f5950e' strokeCap='round' />
        <Line p1={vec(128, 150)} p2={vec(150, 200)} strokeWidth={6} color='#f5950e' strokeCap='round' />

        {/* 上身 */}
        <Rect x={70} y={140} width={60} height={80} color='#f9bf6f' />

        {/* 腿 */}
        <Line p1={vec(80, 220)} p2={vec(80, 300)} strokeWidth={12} color='#f5950e' />
        <Line p1={vec(120, 220)} p2={vec(120, 300)} strokeWidth={12} color='#f5950e' />
      </Group>
    </Canvas>
  )
}

export default memo(SmileFace1)