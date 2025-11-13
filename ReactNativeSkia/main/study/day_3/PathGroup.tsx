import { Canvas, Circle, Path, Skia } from '@shopify/react-native-skia';
import React from 'react';
import { View } from 'react-native';

export const PathGroup = () => {
  const path = Skia.Path.Make();

  path.moveTo(200, 200);
  path.lineTo(230, 230);
  path.close();

  // ☆
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1, backgroundColor: '#f6eedd' }}>
        {/* <Path path={"M 100 100 L 20 200 L 300 300 Z"} /> */}

        <Path
          path="M 0 0 L 100 100"
          color="lightblue"
          strokeWidth={6}
          style="stroke"
        />

        <Path
          path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
          color="lightblue"
          strokeWidth={6}
          style="stroke"
        />

        <Path path={path} color="#be2739" strokeWidth={6} style="stroke" />

        <Path
          path="M 0 400 Q 100 300 200 400"
          color="#ef0c27"
          strokeWidth={6}
          style="stroke"
        />

        <Path
          path="M 0 100 C 50 50 150 50 200 100"
          color="#0c2eef"
          strokeWidth={6}
          style="stroke"
        />

        <Path
          path="M 0 300 H 30"
          color="#dc0cef"
          strokeWidth={6}
          style="stroke"
        />

        <Path
          path="M 40 100 V 130"
          color="#0c76ef"
          strokeWidth={6}
          style="stroke"
        />
        <Path path={'M 300 200 L 280 220 L 320 220 Z'} color="orange" />
      </Canvas>
      <Canvas style={{ flex: 1, backgroundColor: '#e7f6dd' }}>
        {/* 二次贝塞尔曲线 + 控制点可视化 */}
        <Path
          path="M 50 200 Q 150 100 250 200"
          color="blue"
          style="stroke"
          strokeWidth={3}
        />
        {/* 控制点连线 */}
        <Path
          path="M 50 200 L 150 100 L 250 200"
          color="gray"
          style="stroke"
          strokeWidth={1}
          opacity={0.5}
        />
        {/* 控制点标记 */}
        <Circle cx={150} cy={100} r={5} color="red" />

        {/* 三次贝塞尔曲线 + 控制点可视化 */}
        <Path
          path="M 50 300 C 100 250 200 350 250 300"
          color="green"
          style="stroke"
          strokeWidth={3}
        />
        {/* 控制点连线 */}
        <Path
          path="M 50 300 L 100 250 L 200 350 L 250 300"
          color="gray"
          style="stroke"
          strokeWidth={1}
          opacity={0.5}
        />
        {/* 控制点标记 */}
        <Circle cx={100} cy={250} r={5} color="red" />
        <Circle cx={200} cy={350} r={5} color="red" />
      </Canvas>

      <Canvas style={{ height: 150, backgroundColor: '#dde9f6' }}>
        <Path
          path="M 50 100 A 50 50 0 0 1 150 100"
          color="purple"
          style="stroke"
          strokeWidth={3}
        />
         <Path
          path="M 100 100 A 20 10 20 0 1 200 100"
          color="purple"
          style="stroke"
          strokeWidth={3}
        />
      </Canvas>
    </View>
  );
};
