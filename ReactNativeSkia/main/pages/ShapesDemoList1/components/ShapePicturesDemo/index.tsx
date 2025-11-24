import { BlendMode, Blur, Canvas, createPicture, Group, Paint, Picture, Skia } from "@shopify/react-native-skia";
import { useMemo } from "react";

const ShapePicturesDemo = () => {

  // 做图
  const picture = useMemo(() => createPicture(
    (canvas) => {
      const size = 256;
      const r = 0.33 * size;
      const paint = Skia.Paint();
      paint.setBlendMode(BlendMode.Multiply);

      paint.setColor(Skia.Color("#f26368"));
      canvas.drawCircle(r, r, r, paint);

      paint.setColor(Skia.Color("#89900A"));
      canvas.drawCircle(size - r, r, r, paint);

      paint.setColor(Skia.Color("#130a90"));
      canvas.drawCircle(size / 2, size - r, r, paint);
    }
  ), []);

  const serialized = useMemo(() => picture.serialize(), [picture]);

  // Create a copy from serialized data
  const copyOfPicture = useMemo(
    () => (serialized ? Skia.Picture.MakePicture(serialized) : null),
    [serialized]
  );

  return (
    <>
      <Canvas style={{ height: 300, width: 800 }}>
        <Picture picture={picture} />
      </Canvas>

      {/* 应用效果 - 添加模糊 */}
      <Canvas style={{ height: 300, width: 800 }}>
        <Group layer={<Paint><Blur blur={10} /></Paint>}>
          <Picture picture={picture} />
        </Group>
      </Canvas>

      {/* 应用效果 - 字节 :  将图片序列化为字节数组 */}
      {/* 序列化后的图片仅与创建它时使用的 Skia 版本兼容。您可以使用 Skia 调试器来使用序列化后的图片。 */}
      <Canvas style={{ height: 300, width: 800 }}>
        <Group transform={[{ translateX: 200 }]}>
          {copyOfPicture && <Picture picture={copyOfPicture} />}
        </Group>
      </Canvas>
    </>
  );
};

export default ShapePicturesDemo;