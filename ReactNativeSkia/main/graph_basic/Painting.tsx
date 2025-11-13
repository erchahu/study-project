import { Canvas, Circle, Group, LinearGradient, Paint, Skia, vec } from '@shopify/react-native-skia';

const width = 256;
const height = 256;

export const PaintDemo = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;

  const paint = Skia.Paint();
  paint.setColor(Skia.Color('orange'));

  return (
    <>
      <Canvas style={{ width, height }}>
        <Circle c={c} r={r} color="red">
          <Paint color="yellow" />
          <Paint color="green" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="blue" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Canvas>
      <Canvas style={{ width, height }}>
        <Group color="lightblue">
          <Circle cx={r} cy={r} r={r} />
          <Group style="stroke" strokeWidth={10}>
            <Circle cx={3 * r} cy={3 * r} r={r} />
          </Group>
        </Group>
      </Canvas>
      <Canvas style={{ width, height }}>
      <Circle cx={r} cy={r} r={r}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(2 * r, 2 * r)}
          colors={["#00ff87", "#60efff"]}
        />
      </Circle>
      <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <Circle cx={3 * r} cy={3 * r} r={r} />
      </Group>
    </Canvas>
    <Canvas style={{flex: 1}}>
      <Circle cx={50} cy={50} r={30}  paint={paint}/>
    </Canvas>
    </>
  );
};
