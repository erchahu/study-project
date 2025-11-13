import { Canvas, DiffRect, Line, Points, rect, Rect, RoundedRect, rrect, vec, } from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ShapePolygonsDemo = () => {

  const points = [
    vec(128, 0),
    vec(168, 80),
    vec(256, 93),
    vec(192, 155),
    vec(207, 244),
    vec(128, 202),
    vec(49, 244),
    vec(64, 155),
    vec(0, 93),
    vec(88, 80),
    vec(128, 0),
  ];

  return (
    <>
      {/* 矩形 */}
      <Canvas style={{ width, height: 320 }}>
        {/* 普通矩形 */}
        <Rect x={20} y={20} width={100} height={100} color='#831b1b' />
        {/* 圆角矩形 */}
        <RoundedRect x={120} y={20} width={100} height={100} color='#24831b' r={16} />
        {/* 圆角矩形 ---- 每条边使用不同的角度 */}
        <RoundedRect x={250} y={20} width={100} height={100} color='#1b4183' rect={{
          rect: {x: 250, y: 20, width: 100, height: 100 },
          topLeft: { x: 0, y: 0 },
          bottomLeft: { x: 30, y: 30 },
          topRight: { x: 30, y: 30 },
          bottomRight: { x: 0, y: 0 },
        }} />
        {/* 差异矩形 */}
        <DiffRect 
          color='#885380' 
          inner={rrect(rect(10, 140, 60, 60), 20, 20)} 
          outer={rrect(rect(0, 130, 80, 80), 10, 10)}
        />
      </Canvas>
      {/* 线条 */}
      <Canvas style={{ width, height: 100, backgroundColor: '#eed3d3' }}>
        <Line p1={vec(30, 10)} p2={vec(100, 80)} color='#c42245' strokeWidth={10} strokeCap='round' />
      </Canvas>
      {/* 点 - 图形 */}
      <Canvas style={{ width, height: 500, backgroundColor: '#225856' }}>
        <Points points={points} style='stroke' strokeCap='round' strokeWidth={8} mode="polygon" color="#7a33ed" />
      </Canvas>
      {/* 点 - 线 */}
      <Canvas style={{ width, height: 500, backgroundColor: '#c4f5f3' }}>
        <Points points={points} style='fill' strokeCap='round' strokeWidth={8} mode="lines" color="#ed9633" />
      </Canvas>
      {/* 点 - 点 */}
      <Canvas style={{ width, height: 500, backgroundColor: '#566d6d' }}>
        <Points points={points} style='fill' strokeCap='round' strokeWidth={8} mode="points" color="#5bed33" />
      </Canvas>
    </>
  );
};

export default memo(ShapePolygonsDemo);
