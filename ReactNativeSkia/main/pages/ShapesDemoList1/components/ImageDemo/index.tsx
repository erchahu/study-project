import {
  Canvas,
  CubicSampling,
  FilterMode,
  Image,
  ImageSVG,
  MipmapMode,
  useAnimatedImageValue,
  useImage,
  useSVG,
  useVideo,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions, Pressable } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const ImageDemo = () => {
  const image = useImage(require('../../../../assets/images/1.jpeg'));
  const networkImage = useImage('https://qcloud.dpfile.com/pc/10_f_x9MtOqQx2KjXHBgYIbuRUTp2vmsoJuyZTHvQPqZCJcBAmuvpeV0dDPaOhRI.jpg');
  const gifImage = useAnimatedImageValue(
    require("../../../../assets/images/true.gif")
  );

  const isPaused = useSharedValue(false);

  const gifImage2 = useAnimatedImageValue(
    require("../../../../assets/images/true.gif"),
    isPaused
  );

  const svgImage = useSVG(require("../../../../assets/images/3.svg"));

  const { currentFrame } = useVideo('http://vjs.zencdn.net/v/oceans.mp4');
  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#daf1a7' }}>
        <Image image={networkImage} fit='contain' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#daf1a7' }}>
        <Image image={image} fit='contain' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#aaea22' }}>
        <Image image={image} fit='cover' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#0fd5e7' }}>
        <Image image={image} fit='fill' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#2c4002' }}>
        <Image image={image} fit='fitHeight' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#3b0ab7' }}>
        <Image image={image} fit='fitWidth' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#f4d71b' }}>
        <Image image={image} fit='none' width={200} height={200} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#abed1c' }}>
        <Image image={image} fit='scaleDown' width={200} height={200} />
      </Canvas>

      {/* CubicSampling */}
      <Canvas style={{ width, height: 300, backgroundColor: '#e8eddf' }}>
        <Image image={image} fit='scaleDown' width={200} height={200} sampling={CubicSampling} />
      </Canvas>

      {/* FilterMode */}
      <Canvas style={{ width, height: 300, backgroundColor: '#667e37' }}>
        <Image
          image={image}
          fit="contain"
          x={0}
          y={0}
          width={200}
          height={200}
          sampling={{ filter: FilterMode.Nearest, mipmap: MipmapMode.Nearest }}
        />
      </Canvas>


      {/* GIF 动画 */}

      {/* Animated Images */}
      <Canvas style={{ width, height: 300, backgroundColor: '#e8eddf' }}>
        <Image
          image={gifImage}
          x={0}
          y={0}
          width={320}
          height={180}
          fit="contain"
        />
      </Canvas>

      {/* 暂停 */}
      <Pressable onPress={() => isPaused.value = !isPaused.value}>
        <Canvas
          style={{
            width: 320,
            height: 180,
          }}
        >
          <Image
            image={gifImage2}
            x={0}
            y={0}
            width={320}
            height={180}
            fit="contain"
          />
        </Canvas>
      </Pressable>


      {/* SVG */}
      {/* 普通SVG */}
      <Canvas style={{ width, height: 100, backgroundColor: '#a7f1eb' }} >
        <ImageSVG svg={svgImage} width={100} height={100} />
      </Canvas>

      {/* VIDEO */}
      <Canvas style={{ width, height: 100, backgroundColor: '#6b7574' }} >
        {currentFrame && <Image image={currentFrame} width={100} height={100} />}
      </Canvas>
    </>
  );
};

export default memo(ImageDemo);
