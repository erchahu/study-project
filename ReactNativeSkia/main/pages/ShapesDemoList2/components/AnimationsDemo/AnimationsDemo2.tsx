import { Canvas, Circle, Fill } from "@shopify/react-native-skia"
import React, { memo } from "react"
import { useWindowDimensions, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";

const AnimationsDemo2 = () => {

  const { width } = useWindowDimensions();
  const leftBoundary = 0;
  const rightBoundary = width;
  const translateX = useSharedValue(width / 2);

  const gesture = Gesture.Pan()
    .onChange((e) => {
      translateX.value += e.changeX;
    })
    .onEnd((e) => {
      translateX.value = withDecay({
        velocity: e.velocityX,
        clamp: [leftBoundary, rightBoundary],
      });
    });

  
  const radius = 30;
  const x = useSharedValue(100);
  const y = useSharedValue(100);
  // This style will be applied to the "invisible" animated view
  // that overlays the ball
  const style = useAnimatedStyle(() => ({
    position: "absolute",
    top: -radius,
    left: -radius,
    width: radius * 2,
    height: radius * 2,
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));
  // The gesture handler for the ball
  const gesture1 = Gesture.Pan().onChange((e) => {
    x.value += e.x;
    y.value += e.y;
  });

  return (
    <>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Canvas style={{ width, height: 300, backgroundColor: '#ed85c9' }}>
            <Fill color="white" />
            <Circle cx={translateX} cy={40} r={20} color="#3E3E" />
          </Canvas>
        </GestureDetector>

        <View style={{ width, height: 300, backgroundColor: '#a9ed85' }}>
          <Canvas style={{ width, height: 300, backgroundColor: '#a9ed85' }}>
            <Fill color="white" />
            <Circle cx={x} cy={y} r={radius} color="cyan" />
          </Canvas>
          <GestureDetector gesture={gesture1}>
            <Animated.View style={style} />
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </>
  )

}

export default memo(AnimationsDemo2)
