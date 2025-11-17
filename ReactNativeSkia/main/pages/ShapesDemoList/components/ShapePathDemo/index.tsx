import { Canvas, Path } from '@shopify/react-native-skia';

const ShapePathDemo = () => {
  // 线条
  const path = `
    M 40 40
    L 80 90
  `;

  // 直角坐标系
  const path1 = `
    M 100 40
    H 200
    V 200
  `;

  // 三角形 填充
  const path2 = `
    M 200 40
    L 140 100
    L 260 100
    Z
  `;

  // 三角形 边框
  const path3 = `
    M 300 40
    L 240 100
    L 360 100
    Z
  `;

  // 曲线 1段
  const path4 = `
    M 100 40
    C 120 60, 180 60, 200 40
  `;

  // 曲线 1段 - 2

  const path5 = `
    M 100 40
    c 120 60, 180 60, 200 40
  `;

  // 曲线 2段
  // S 命令生成的曲线类型与之前相同——但如果它紧跟另一个 S 命令或 C 命令，则第一个控制点假定为之前使用的控制点的镜像。如果 S 命令没有紧跟其他 S 或 C 命令，则光标的当前位置将用作第一个控制点。其结果与使用相同参数的 Q 命令生成的结果不同，但类似。
  const path6 = `
    M 200 40
    S 220 60,280 60
  `;

  // 曲线 2段 - 2

  const path7 = `
    M 100 40
    c 120 60, 180 60, 200 40
    S 220 60, 300 40
  `;


  return (
    <>
      <Canvas style={{ height: 300, width: 800, backgroundColor: '#f58989' }}>
        <Path
          path={path}
          color="orange"
          style="stroke"
          strokeWidth={20}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={path1}
          color="orange"
          style="stroke"
          strokeWidth={20}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={path2}
          color="pink"
          style="fill"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={path3}
          color="orange"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />
      </Canvas>
      <Canvas style={{ height: 300, width: 800, backgroundColor: '#89d3f5' }}>
        <Path
          path={path4}
          color="#5a0202"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />
        <Path
          path={path5}
          color="#5a0202"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={path6}
          color="#115a02"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={path7}
          color="#02025a"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />
      </Canvas>
      <Canvas style={{ height: 300, width: 800, backgroundColor: '#89f58d' }}>
        <Path
          path={'M 10 80 Q 95 10 180 80'}
          color="#025a38"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />

        <Path
          path={'M 10 80 Q 52.5 10, 95 80 T 180 80'}
          color="#5a0238"
          style="stroke"
          strokeWidth={6}
          strokeCap="round"
          strokeJoin="miter"
        />
      </Canvas>

    </>
  );
};

export default ShapePathDemo;
