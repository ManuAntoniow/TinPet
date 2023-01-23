import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import BottomTabNavigator from "./BottomTabNavigator"
import { useSelector } from "react-redux"

export default () => {

  const userId = useSelector((state) => state.auth.userId)
  const userId2 = useSelector((state) => state.sing.userId)

  return (
    <NavigationContainer>
      {(() => {
        if (userId) {
          return (
            <BottomTabNavigator/>
          )
        } else if (userId2) {
          return (
            <BottomTabNavigator/>
          )
        } else {
          return (
            <AuthNavigator/>
          )
        }
      })()}
    </NavigationContainer>
  )
}