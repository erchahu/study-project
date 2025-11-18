import {
  Blur,
  Canvas,
  Fill,
  FontStyle,
  Glyphs,
  Group,
  listFontFamilies,
  matchFont,
  Paint,
  Paragraph,
  Skia,
  Text,
  TextAlign,
  TextBlob,
  TextPath,
  TileMode,
  useFont,
  useFonts,
  vec,
} from '@shopify/react-native-skia';
import { memo, useMemo } from 'react';
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

console.log(listFontFamilies(), 'sera')

const TextDemo = () => {
  
  const customFontManager = useFonts({
    SHZSJJCB: [
      require('../../../../assets/fonts/SongHuiZongShouJinJiaCuBan-2.ttf')
    ],
    BK: [
      require('../../../../assets/fonts/bkai00mp-2.ttf')
    ],
    GB: [
      require('../../../../assets/fonts/gbsn00lp-2.ttf')
    ],
    Roboto: [
      require('../../../../assets/fonts/Roboto-Bold.ttf'),
      require('../../../../assets/fonts/Roboto-Italic.ttf'),
      require('../../../../assets/fonts/Roboto-Regular.ttf')
    ]
  })

  const paragraph = useMemo(() => {
    if (!customFontManager) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center
    };
    const textStyle = {
      color: Skia.Color("orange"),
      fontFamilies: ["SHZSJJCB"],
      fontSize: 50
    };

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontManager)
      .pushStyle(textStyle)
      .addText("say Hello to ")
      .pushStyle({ ...textStyle, fontStyle: { weight: 500 } })
      .addText("Skia 🎨")
      .pop()
      .build();
  }, [customFontManager])

  const paragraph1 = useMemo(() => {
    if (!customFontManager) {
      return null;
    }
    const paragraphStyle = {
      textAlign: TextAlign.Center
    };
    const textStyle = {
      color: Skia.Color("orange"),
      fontFamilies: ["SHZSJJCB"],
      fontSize: 50
    };

    return Skia.ParagraphBuilder.Make(paragraphStyle, customFontManager)
      .pushStyle(textStyle)
      .addText("好久不见")
      .pushStyle({ ...textStyle, fontStyle: { weight: 500 } })
      .addText("Sera 🎵")
      .pushStyle({ ...textStyle, fontStyle: { weight: 500 }, fontFamilies: ["BK"] })
      .addText("Sera 🎵")
      .pop()
      .build();
  }, [customFontManager])

  const source = Skia.RuntimeEffect.Make(`
    uniform vec4 position;
    uniform vec4 colors[4];

    vec4 main(vec2 pos) {
      vec2 uv = (pos - vec2(position.x, position.y))/vec2(position.z, position.w);
      vec4 colorA = mix(colors[0], colors[1], uv.x);
      vec4 colorB = mix(colors[2], colors[3], uv.x);
      return mix(colorA, colorB, uv.y);
    }`)!;

  // Define an array of colors for the gradient to be used in shader uniform
  const colors = [
    // #dafb61
    0.85, 0.98, 0.38, 1.0,
    // #61dafb
    0.38, 0.85, 0.98, 1.0,
    // #fb61da
    0.98, 0.38, 0.85, 1.0,
    // #61fbcf
    0.38, 0.98, 0.81, 1.0
  ];

  const paragraph2 = useMemo(() => {
    const backgroundPaint = Skia.Paint();
    backgroundPaint.setShader(
      source.makeShader([0, 0, 256, 256, ...colors])
    )
    
    const foregroundPaint = Skia.Paint();
    foregroundPaint.setShader(
      Skia.Shader.MakeRadialGradient(
        { x: 0, y: 0 },
        256,
        [Skia.Color("magenta"), Skia.Color("yellow")],
        null,
        TileMode.Clamp
      )
    );

    const para = Skia.ParagraphBuilder.Make()
     .pushStyle(
        {
          fontFamilies: ["Roboto"],
          fontSize: 72,
          fontStyle: { weight: 500 },
          color: Skia.Color("black"),
        },
        foregroundPaint,
        backgroundPaint
      )
      .addText("Say Hello to React Native Skia")
      .pop()
      .build();
    return para;
  }, [])

  const paragraph3 = useMemo(() => {
    // Are the custom fonts loaded?
    if (!customFontManager) {
      return null;
    }
    const textStyle = {
      fontSize: 24,
      fontFamilies: ["Roboto"],
      color: Skia.Color("#000"),
    };

    const paragraphBuilder = Skia.ParagraphBuilder.Make({}, customFontManager);
    paragraphBuilder
      .pushStyle({ ...textStyle, fontStyle: FontStyle.Bold })
      .addText("This text is bold\n")
      .pop()
      .pushStyle({ ...textStyle, fontStyle: FontStyle.Normal })
      .addText("This text is regular\n")
      .pop()
      .pushStyle({ ...textStyle, fontStyle: FontStyle.Italic })
      .addText("This text is italic")
      .pop()
      .build();
    return paragraphBuilder.build();
  }, [customFontManager]);

  const fontSize = 32;
  const font = useFont(require("../../../../assets/fonts/QingNiaoHuaGuangFanFangShanHu-2.ttf"), fontSize);

  
  const fontFamily = Platform.select({ ios: "BK", default: "GB" });

  if (font === null) {
    return null;
  }

  const glyphs = font
    .getGlyphIDs("Hello World!")
    .map((id, i) => ({ id, pos: vec(0, (i + 1) * fontSize) }));
  
  const size = 128;
  const path = Skia.Path.Make();
  path.addCircle(size, size, size/2);

  const blob = Skia.TextBlob.MakeFromText("疑是银河落九天", font)

  return (
    <>
      <Canvas style={{ width, height: 300, backgroundColor: '#8a986b' }}>
        <Paragraph paragraph={paragraph} x={0} y={0} width={width} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#6b8198' }}>
        <Paragraph paragraph={paragraph1} x={0} y={0} width={width} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#986b78' }}>
        <Paragraph paragraph={paragraph2} x={0} y={0} width={width} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#6b9098' }}>
        <Group layer={<Paint><Blur blur={2} /></Paint>}>
          <Paragraph paragraph={paragraph} x={0} y={0} width={width} />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#82986b66' }}>
        <Paragraph paragraph={paragraph3} x={0} y={0} width={300} />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#e4b47a' }}>
        <Fill color="white" />
        <Text
          x={0}
          y={fontSize}
          text="Hello World, 你来到我的城市"
          font={font}
        />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#c87ae4' }}>
        <Glyphs
          glyphs={glyphs}
          font={font}
        />
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#c87ae4' }}>
        <Fill color="white" />
        <Group transform={[{ rotate: Math.PI }]} origin={vec(size, size)}>
          <TextPath font={font} path={path} text="送你漫天的星辰与河海" />
        </Group>
      </Canvas>
      <Canvas style={{ width, height: 300, backgroundColor: '#7ae4cd' }}>
        <TextBlob
          blob={blob}
          color="blue"
          y={100}
        />
      </Canvas>
    </>
  );
};

export default memo(TextDemo);
