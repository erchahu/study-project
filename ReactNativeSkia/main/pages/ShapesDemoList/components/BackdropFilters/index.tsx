import { BackdropBlur, BackdropFilter, Canvas, ColorMatrix, Fill, Image, useImage } from "@shopify/react-native-skia"
import { memo } from "react"
import { Dimensions } from "react-native"

const { width } = Dimensions.get('screen');

const BackdropFilters = () => {
  const image = useImage(require('../../../../assets/images/1.jpeg'))

  // https://kazzkiq.github.io/svg-color-filter/
  const BLACK_AND_WHITE = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
  ]; // 可以修改颜色

  return (
    <>
      <Canvas style={{ width, height: 256 }}>
        <Fill color='#d49393' />
        <Image image={image} x={0} y={0} width={256} height={256} fit={'cover'} />
        <BackdropFilter
          clip={{ x: 0, y: 128, width: 256, height: 128 }}
          filter={<ColorMatrix matrix={BLACK_AND_WHITE} />}
        />
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Fill color='#d49393' />
        <Image image={image} x={0} y={0} width={256} height={256} fit={'cover'} />
        <BackdropBlur blur={2}  />
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Fill color='#d49393' />
        <Image image={image} x={0} y={0} width={256} height={256} fit={'cover'} />
        <BackdropBlur blur={2} clip={{ x: 0, y: 128, width: 256, height: 128 }}  />
      </Canvas>
      <Canvas style={{ width, height: 256 }}>
        <Fill color='#d49393' />
        <Image image={image} x={0} y={0} width={256} height={256} fit={'cover'} />
        <BackdropBlur blur={2} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
          <Fill color="rgba(243, 91, 91, 0.2)" />
        </BackdropBlur>
      </Canvas>
    </>
  )
}

export default memo(BackdropFilters)