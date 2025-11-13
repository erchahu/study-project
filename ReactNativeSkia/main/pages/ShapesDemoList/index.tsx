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

const ShapesDemoList = () => {
  return (
    <ScrollView>
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