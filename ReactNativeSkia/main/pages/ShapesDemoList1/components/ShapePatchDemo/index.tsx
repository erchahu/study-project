import { Canvas, Patch, vec } from "@shopify/react-native-skia";

const ShapePatchDemo = () => {

  // 1. 定义四个角的颜色
  const colors = [
    "#ed7474",
    "#ede974",
    "#74ed86",
    "#74c3ed",
    // "#ae74ed",
    // "#412af6"
  ]

  
  const C = 64; // 控制点偏移量
  const width = 300; // 曲面尺寸
  // 2. 定义四个角点（必须按顺时针顺序！）
  const topLeft = { pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0) };
  const topRight = {
    pos: vec(width, 0), // 角点位置（必须）
    c1: vec(width, C), // 进入控制点（可选）
    c2: vec(width + C, 0), // 离开控制点（可选）
  };
  const bottomRight = {
    pos: vec(width, width),
    c1: vec(width, width - 2 * C),
    c2: vec(width - 2 * C, width),
  };
  const bottomLeft = {
    pos: vec(0, width),
    c1: vec(0, width - 2 * C),
    c2: vec(-2 * C, width),
  };

  const colors1 = [
    "#74ed86",
    "#74c3ed",
    "#ae74ed",
    "#412af6"
  ]

  const wavePatch = [
    // 左上角 - 轻微波浪
    { pos: vec(0, 0), c1: vec(0, 30), c2: vec(30, 0) },
    
    // 右上角 - 强烈凸起
    { pos: vec(300, 0), c1: vec(300, -50), c2: vec(350, 0) },
    
    // 右下角 - 中等波浪
    { pos: vec(300, 200), c1: vec(300, 250), c2: vec(250, 200) },
    
    // 左下角 - 轻微凹陷
    { pos: vec(0, 200), c1: vec(0, 150), c2: vec(-50, 200) }
  ]
  
  return (
    <>
      <Canvas style={{ height: 300, width: 800 }}>
        <Patch
          colors={colors}
          patch={[topLeft, topRight, bottomRight, bottomLeft]}
        />
      </Canvas>

      <Canvas style={{ height: 300, width: 800, marginLeft: 30 }}>
        <Patch colors={colors1} patch={wavePatch} />
      </Canvas>
    </>
  );
};

export default ShapePatchDemo;

// 控制点对边界的影响：
// // 直线边界
// { pos: vec(0, 0), c1: vec(0, 0), c2: vec(0, 0) }

// // 凸出边界  
// { pos: vec(0, 0), c1: vec(0, 50), c2: vec(50, 0) }

// // 凹陷边界
// { pos: vec(0, 0), c1: vec(0, -50), c2: vec(-50, 0) }