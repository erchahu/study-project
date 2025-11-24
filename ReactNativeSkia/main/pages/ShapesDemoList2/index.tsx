import { memo } from "react";
import { ScrollView } from "react-native";
import ImageFilterDemo from "./components/ImageFilterDemo";
import BackdropFilters from "./components/BackdropFilters";
import MaskFilters from "./components/MaskFilters";
import ColorsFilters from "./components/ColorsFilters"
import MaskDemo from "./components/MaskDemo";
import PathEffectsDemo from "./components/PathEffectsDemo";
import AnimationsDemo from "./components/AnimationsDemo";
import AnimationsDemo2 from "./components/AnimationsDemo/AnimationsDemo2";
import AnimationsDemo3 from "./components/AnimationsDemo/AnimationsDemo3";
import AnimationsDemo4 from "./components/AnimationsDemo/AnimationsDemo4";

const ShapesDemoList2 = () => {
  return (
    <ScrollView style={{ marginTop: 80 }}>
      <AnimationsDemo4 />
      <AnimationsDemo3 />
      <AnimationsDemo2 />
      <AnimationsDemo />
      <PathEffectsDemo />
      <MaskDemo />
      <ColorsFilters />
      <MaskFilters />
      <BackdropFilters />
      <ImageFilterDemo />
    </ScrollView>
  )
}

export default memo(ShapesDemoList2)