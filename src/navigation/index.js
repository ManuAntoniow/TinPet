import { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import AuthNavigator from "./AuthNavigator"
import BottomTabNavigator from "./BottomTabNavigator"
import { useSelector } from "react-redux"

export default () => {
  const userId = useSelector((state) => state.auth.userId)

  //const userId = false

  return (
    <NavigationContainer>
      {userId ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}