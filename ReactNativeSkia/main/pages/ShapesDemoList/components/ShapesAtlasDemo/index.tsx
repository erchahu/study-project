import {Skia, drawAsImage, Group, Rect, Canvas, Atlas, rect, useImage, SkImage} from "@shopify/react-native-skia";
import {useEffect, useState} from "react";

const size = { width: 25, height: 11.25 };
const strokeWidth = 2;
const imageSize = {
    width: size.width + strokeWidth,
    height: size.height + strokeWidth,
};

const Demo = () => {
  const [image, setImage] = useState<null | SkImage>(null);
  const img2 = useImage(require('../../../../assets/images/2.jpg'));
  
  useEffect(() => {
    const createImage = async () => {
      const img1 = await drawAsImage(
        <Group>
          <Rect
            rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
            color="cyan"
          />
          <Rect
            rect={rect(strokeWidth / 2, strokeWidth / 2, size.width, size.height)}
            color="blue"
            style="stroke"
            strokeWidth={strokeWidth}
          />
        </Group>,
        imageSize
      );
      setImage(img1);
    };
    
    createImage();
  }, []);

  const numberOfBoxes = 150;
  const pos = { x: 128, y: 128 };
  const width = 256;
  const sprites = new Array(numberOfBoxes)
    .fill(0)
    .map(() => rect(0, 0, imageSize.width, imageSize.height));
  const transforms = new Array(numberOfBoxes).fill(0).map((_, i) => {
    const tx = 5 + ((i * size.width) % width);
    const ty = 25 + Math.floor(i / (width / size.width)) * size.width;
    const r = Math.atan2(pos.y - ty, pos.x - tx);
    return Skia.RSXform(Math.cos(r), Math.sin(r), tx, ty);
  });

  if (!image) {
    return null; // 或者返回加载状态
  }

  const numbers1 = 3;
  const sprites1 = new Array(numbers1).fill(0).map(() => rect(0, 0, 30, 30))
  const transforms1 = [
    Skia.RSXform(Math.cos(30), Math.sin(30), 30, 30),
    Skia.RSXform(Math.cos(60), Math.sin(70), 80, 30),
    Skia.RSXform(Math.cos(80), Math.sin(90), 100, 60)
  ]

  return (
    <>
      <Canvas style={{ height: 600, width: 800 }}>
        <Atlas image={image} sprites={sprites} transforms={transforms} />
      </Canvas>
      <Canvas style={{ height: 600, width: 800 }}>
        <Atlas image={img2} sprites={sprites1} transforms={transforms1} />
      </Canvas>
    </>
  );
};

export default Demo;