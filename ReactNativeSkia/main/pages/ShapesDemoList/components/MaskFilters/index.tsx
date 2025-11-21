import { BlurMask, Canvas, Circle, Fill, vec } from "@shopify/react-native-skia"
import { memo } from "react"
import { Dimensions } from "react-native"

const { width } = Dimensions.get('screen');

const MaskFilters = () => {
  return (
    <>
      <Canvas style={{ width, height: 256 }}>
        <Circle c={vec(128)} r={128}>
          <Fill color='#d31515' />
        </Circle>
      </Canvas>
    </>
  )
}

export default memo(MaskFilters)