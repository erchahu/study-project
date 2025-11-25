import { memo } from "react"
import LineProgress from "./LineProgress"
import SpinProfress from "./SpinProfress"
import { View } from "react-native"
import PercentCircle from "./PercentCircle"

const Demos = () => {
  return (
    <View style={{ marginTop: 80 }}>
      <PercentCircle />
      <LineProgress />
      <SpinProfress />
    </View>
  )
}

export default memo(Demos)