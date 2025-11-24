import { BlurMask, Canvas, Circle, vec } from "@shopify/react-native-skia"
import { memo } from "react"
import { Dimensions } from "react-native"

const { width } = Dimensions.get('screen');

const MaskFilters = () => {
  return (
    <>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128} color="#e97ca2">
          <BlurMask blur={10} />
        </Circle>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128} color="#d1e97c">
          <BlurMask blur={10} style='inner' />
        </Circle>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128} color="#7ce9ad">
          <BlurMask blur={10} style='normal' />
        </Circle>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128} color="#7ccce9">
          <BlurMask blur={10} style='outer' />
        </Circle>
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128} color="#927ce9">
          <BlurMask blur={10} style='solid' />
        </Circle>
      </Canvas>
    </>
  )
}

export default memo(MaskFilters)