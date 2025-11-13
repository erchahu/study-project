import { Canvas, vec, Vertices } from "@shopify/react-native-skia";

const ShapeVerticesDemo = () => {
  
  const vertices = [
    vec(0, 30),  // 0
    vec(50, 80), 
    vec(100, 30), 
    vec(150, 80),  // 3
    vec(200, 30), 
    vec(250, 80), 
    vec(300, 30),  // 6
    vec(350, 80), 
    vec(400, 30), 
  ];

  const indices = [ 0, 3, 6 ]
  const indices1 = [ 1, 3, 6 ]

  const indices2 = [ 0, 1, 2, 0, 3, 5 ]


  const colors = [
    "red", "orange", "yellow", "green", "lightblue", "blue", "purple", "pink", "gray"
  ]

  return (
    <>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 每3个点构成一个三角形 */}
         <Vertices mode='triangleStrip' vertices={vertices} colors={colors} />
      </Canvas>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 连续三角形共享边 */}
         <Vertices mode='triangleStrip' vertices={vertices} colors={colors} />
      </Canvas>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 所有三角形共享第一个点 */}
        <Vertices mode='triangles' vertices={vertices} colors={colors} />
      </Canvas>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 使用 indices（顶点索引） */}
         <Vertices mode='triangleStrip' indices={indices} vertices={vertices} colors={colors} />
      </Canvas>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 使用 indices（顶点索引） */}
         <Vertices mode='triangleStrip' indices={indices1} vertices={vertices} colors={colors} />
      </Canvas>
      <Canvas style={{ height: 100, width: 800 }}>
        {/* 使用 indices（顶点索引） */}
         <Vertices mode='triangleStrip' indices={indices2} vertices={vertices} colors={colors} />
      </Canvas>
    </>
  );
};

export default ShapeVerticesDemo;