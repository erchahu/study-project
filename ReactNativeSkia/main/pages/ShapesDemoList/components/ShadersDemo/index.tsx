import {
  AnimatedProp,
  Blend,
  Canvas,
  Circle,
  ColorShader,
  Fill,
  FractalNoise,
  ImageShader,
  LinearGradient,
  RadialGradient,
  Rect,
  Shader,
  Skia,
  SweepGradient,
  Turbulence,
  TwoPointConicalGradient,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import { memo } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ShadersDemo = () => {
  const source = Skia.RuntimeEffect.Make(`
  vec4 main(vec2 pos) {
    // normalized x,y values go from 0 to 1, the canvas is 256x256
    vec2 normalized = pos/vec2(256);
    return vec4(normalized.x, normalized.y, 0.5, 1);
  }`)!;

  const source1 = Skia.RuntimeEffect.Make(`
  uniform vec2 c;
  uniform float r;
  uniform float blue;

  vec4 main(vec2 pos) {
    vec2 normalized = pos/vec2(2 * r);
    return distance(pos, c) > r ? vec4(1) : vec4(normalized, blue, 1);
  }`)!;
  const r = 128;
  const c = vec(2 * r, r);
  const blue = 1.0;

  const source2 = Skia.RuntimeEffect.Make(`
  uniform shader image;

  half4 main(float2 xy) {   
    xy.x += sin(xy.y / 3) * 4;
    return image.eval(xy).rbga;
  }`)!;

  const image = useImage(require('../../../../assets/images/1.jpeg'));
  if (!image) {
    return null;
  }

  const types: AnimatedProp<
    | 'screen'
    | 'color'
    | 'clear'
    | 'src'
    | 'dst'
    | 'srcOver'
    | 'dstOver'
    | 'srcIn'
    | 'dstIn'
    | 'srcOut'
    | 'dstOut'
    | 'srcATop'
    | 'dstATop'
    | 'xor'
    | 'plus'
    | 'modulate'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'colorDodge'
    | 'colorBurn'
    | 'hardLight'
    | 'softLight'
    | 'difference'
    | 'exclusion'
    | 'multiply'
    | 'hue'
    | 'saturation'
    | 'luminosity'
  >[] = [
    'screen',
    'color',
    'clear',
    'src',
    'dst',
    'srcOver',
    'dstOver',
    'srcIn',
    'dstIn',
    'srcOut',
    'dstOut',
    'srcATop',
    'dstATop',
    'xor',
    'plus',
    'modulate',
    'overlay',
    'darken',
    'lighten',
    'colorDodge',
    'colorBurn',
    'hardLight',
    'softLight',
    'difference',
    'exclusion',
    'multiply',
    'hue',
    'saturation',
    'luminosity',
  ];

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#e29999' }}>
        <Fill>
          <Shader source={source} />
        </Fill>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#925858' }}>
        <Fill>
          <Shader source={source1} uniforms={{ c, r, blue }} />
        </Fill>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#f00' }}>
        <Fill>
          <Shader source={source2}>
            <ImageShader
              image={image}
              fit="cover"
              rect={{ x: 0, y: 0, width: 256, height: 256 }}
            />
          </Shader>
        </Fill>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#988bfe' }}>
        <Circle cx={128} cy={128} r={128}>
          <ImageShader
            image={image}
            fit="cover"
            rect={{ x: 0, y: 0, width: 256, height: 256 }}
          />
        </Circle>
      </Canvas>

      <Canvas style={{ width: 256, height: 256, backgroundColor: '#dcd9f3' }}>
        <Circle cx={128} cy={128} r={128}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(256, 256)}
            colors={['#f28787', '#acf287']}
          />
        </Circle>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#e9f3d9' }}>
        <Rect x={0} y={0} width={256} height={256}>
          <RadialGradient
            c={vec(128, 128)}
            r={128}
            colors={['#f28787', '#acf287']}
          />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#d9f1f3' }}>
        <Rect x={0} y={0} width={256} height={256}>
          <TwoPointConicalGradient
            start={vec(128, 128)}
            startR={128}
            end={vec(128, 10)}
            endR={10}
            colors={[
              '#931717',
              '#f02e2e',
              '#f0b62e',
              '#5bf02e',
              '#2eccf0',
              '#992ef0',
            ]}
          />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#d9f1f3' }}>
        <Rect x={0} y={0} width={256} height={256}>
          <TwoPointConicalGradient
            start={vec(128, 128)}
            startR={128}
            end={vec(128, 10)}
            endR={10}
            colors={[
              '#f64444',
              '#f79f24',
              '#fae34b',
              '#5bf02e',
              '#2eccf0',
              '#3e2ef0',
              '#992ef0',
            ]}
          />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#d9f1f3' }}>
        <Rect x={0} y={0} width={256} height={256}>
          <SweepGradient
            c={vec(128, 128)}
            colors={[
              '#f64444',
              '#f79f24',
              '#fae34b',
              '#5bf02e',
              '#2eccf0',
              '#3e2ef0',
              '#992ef0',
              '#f02ed0',
              '#f02e58',
              '#f02e2e',
            ]}
          />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#5ca1a7' }}>
        <Fill color="white" />
        <Rect x={0} y={0} width={256} height={256}>
          <FractalNoise freqX={0.01} freqY={0.06} octaves={1} />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#77b4b9' }}>
        <Fill color="#f0990c" />
        <Rect x={0} y={0} width={256} height={256}>
          <Turbulence freqX={0.01} freqY={0.06} octaves={1} seed={100} />
        </Rect>
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#77b4b9' }}>
        <Rect x={0} y={0} width={256} height={256}>
          <Blend mode="difference">
            <RadialGradient
              r={128}
              c={vec(128, 128)}
              colors={['blue', 'yellow']}
            />
            <Turbulence
              freqX={0.01}
              freqY={0.06}
              octaves={1}
              seed={100}
            />
          </Blend>
        </Rect>
      </Canvas>
      <Canvas style={{ width: 420, height: 3000, backgroundColor: '#77b4b9' }}>
        {new Array(2).fill(0).map((_, x) =>
          new Array(15).fill(0).map((__, y) => {
            return <Rect x={200 * x} y={200 * y} width={200} height={200}>
              {x === 1 && y === 14 ? null : (
                <Blend mode={types[x * 2 + y]}>
                  <RadialGradient
                    r={100}
                    c={vec(100, 100)}
                    colors={['blue', 'yellow']}
                  />
                  <Turbulence
                    freqX={0.01}
                    freqY={0.06}
                    octaves={1}
                    seed={100}
                  />
                </Blend>
              )}
            </Rect>
          }),
        )}
      </Canvas>
      <Canvas style={{ width: 256, height: 256, backgroundColor: '#77b4b9' }}>
        <Fill>
          <ColorShader color="#ed8888" />
        </Fill>
      </Canvas>
    </>
  );
};

export default memo(ShadersDemo);
