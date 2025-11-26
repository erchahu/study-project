import { memo } from "react"
import LineProgress from "./LineProgress"
import SpinProfress from "./SpinProfress"
import { View } from "react-native"
import PercentCircle from "./PercentCircle"
import IndicatorProgress from "./IndicatorProgress"
import DotLoading from "./DotLoading"

const Demos = () => {
  return (
    <View style={{ marginTop: 80 }}>
      <DotLoading />
      <IndicatorProgress />
      <PercentCircle />
      <LineProgress />
      <SpinProfress />
    </View>
  )
}

export default memo(Demos)