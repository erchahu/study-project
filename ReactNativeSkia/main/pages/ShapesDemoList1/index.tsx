import { memo } from "react";
import { ScrollView } from "react-native";
import PaintDemo from "./components/PaintDemo";
import GroupDemo from "./components/GroupDemo";
import ShapePolygonsDemo from "./components/ShapePolygonsDemo";
import ShapeEllipsesDemo from "./components/ShapeEllipsesDemo";
import ShapesAtlasDemo from "./components/ShapesAtlasDemo";
import ShapeVerticesDemo from "./components/ShapeVerticesDemo";
import ShapePatchDemo from "./components/ShapePatchDemo";
import ShapePicturesDemo from "./components/ShapePicturesDemo";
import ShapePathDemo from "./components/ShapePathDemo";
import ImageDemo from "./components/ImageDemo";
import SkottieDemo from "./components/SkottieDemo";
import TextDemo from "./components/TextDemo";
import ShadersDemo from "./components/ShadersDemo";

const ShapesDemoList = () => {
  return (
    <ScrollView style={{ marginTop: 80 }}>
      <ShadersDemo />
      <TextDemo />
      <SkottieDemo />
      <ImageDemo />
      <ShapePathDemo />
      <ShapePicturesDemo />
      <ShapePatchDemo />
      <ShapeVerticesDemo />
      <ShapesAtlasDemo />
      <ShapeEllipsesDemo />
      <ShapePolygonsDemo />
      <GroupDemo />
      <PaintDemo />
    </ScrollView>
  )
}

export default memo(ShapesDemoList)