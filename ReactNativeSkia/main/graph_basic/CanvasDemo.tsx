import {useSharedValue, useDerivedValue} from "react-native-reanimated";
import {Canvas, Rect, useCanvasRef, useCanvasSize} from "@shopify/react-native-skia";
import { memo, useEffect } from "react";

const CanvasDemo = () => {
  const size = useSharedValue({ width: 0, height: 0 });
  const { size: { width, height } } = useCanvasSize();

  const ref = useCanvasRef();
  useEffect(() => {
    setTimeout(() => {
      const data = ref?.current?.makeImageSnapshot()
      console.log(data)
    }, 1000)
  })

  console.log(width, height, 'sera')
  const rect = useDerivedValue(() => {
    const {width, height} = size.value;
    console.log(width, height); // 100 100
    return { x: 0, y: 0, width, height };
  });

  return (
    <Canvas onSize={size} style={{ width:100, height: 100 }}>
      <Rect color="cyan" rect={rect} />
    </Canvas>
  );
};

const CanvasDemo2 = () => {
  const { size: { width, height } } = useCanvasSize();
  console.log(width, height, 'sera')

  return (
    <Canvas style={{ width:100, height: 100 }}>
    </Canvas>
  );
};

export default memo(CanvasDemo)