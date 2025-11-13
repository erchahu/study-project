import { Canvas, DiffRect, Line, Points, rect, Rect, RoundedRect, rrect, vec } from '@shopify/react-native-skia';
import { memo } from 'react';

const Polygons = () => {
  
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
    <Canvas style={{ flex: 1, backgroundColor: '#f4fbde' }}>
      <Rect x={0} y={0} width={100} height={100} color="#fa5dde" />

      <RoundedRect x={160} y={0} width={60} height={70} color="green" r={18} />

      <RoundedRect 
        color="green" 
        rect={{
          rect: { x: 80, y: 80, width: 40, height: 40 },
          topLeft: { x: 10, y: 10 },
          topRight: { x: 10, y: 10 },
          bottomRight: { x: 0, y: 0 },
          bottomLeft: { x: 10, y: 10 },
        }}
      />

      <DiffRect 
        inner={rrect(rect(240, 240, 20, 20), 50, 50)}
        outer={rrect(rect(200, 200, 100, 100), 25, 25)}
        color="orange"
      />

      <Line
        p1={vec(0, 0)}
        p2={vec(256, 256)}
        color="purple"
        style="stroke"
        strokeWidth={4}
      />

      <Points points={points} mode='polygon' color='blue' style='fill' strokeWidth={4} strokeCap='butt' />
    </Canvas>
  );
};

export default memo(Polygons);
