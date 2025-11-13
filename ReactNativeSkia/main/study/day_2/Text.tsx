

import {Canvas, Text, useFont, Fill, listFontFamilies, matchFont} from "@shopify/react-native-skia";
import { Platform } from "react-native";

export const HelloWorld = () => {
  const fontSize = 32;
  const font = useFont(require("../../assets/fonts/SongHuiZongShouJinJiaCuBan-2.ttf"), fontSize);

  console.log(listFontFamilies(), 'sera')

  const fontFamily = Platform.select({ ios: 'monaco', default: 'serif' })

  const font2 = matchFont({ fontFamily, fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' });

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="white" />
      <Text
        x={0}
        y={fontSize}
        text="Hello World"
        font={font}
      />
      <Text
        x={200}
        y={80}
        text="Love"
        font={font2}
        color={'#00f'}
      />
    </Canvas>
  );
};