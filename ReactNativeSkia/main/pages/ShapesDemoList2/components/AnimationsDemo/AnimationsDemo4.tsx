import { Canvas, Fill, Image, Skia, useImageAsTexture, usePictureAsTexture, useTexture } from "@shopify/react-native-skia"
import React, { memo } from "react"
import { Dimensions } from "react-native"

const { width } = Dimensions.get('screen');

const rec = Skia.PictureRecorder();
const canvas = rec.beginRecording();
canvas.drawColor(Skia.Color("cyan"));
const picture = rec.finishRecordingAsPicture();

const AnimationsDemo4 = () => {

  const texture = useTexture(
      <Fill color="cyan" />,
    { width, height: 300 }
  );

  const texture2 = useImageAsTexture(
    require('../../../../assets/images/3.jpeg')
  );

  const texture3 = usePictureAsTexture(
    picture,
    { width, height: 300 }
  );

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#ed85c9' }}>
        <Image image={texture} rect={{ x: 0, y: 0, width, height: 300 }} />
      </Canvas>
      {/* useImageAsTexture */}
      <Canvas style={{ width, height: 300, backgroundColor: '#719946' }}>
        <Image image={texture2} rect={{ x: 0, y: 0, width, height: 300 }} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#1b3202' }}>
        <Image image={texture3} rect={{ x: 0, y: 0, width, height: 300 }} />
      </Canvas>
    </>
  )

}

export default memo(AnimationsDemo4)
