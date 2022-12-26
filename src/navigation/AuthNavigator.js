import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthScreen from "../screens/LogIn/AuthScreen"
import SingInScreen from "../screens/LogIn/SingInScreen"

const Stack = createNativeStackNavigator()

export default AuthtNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen name="Register" component={AuthScreen} />
      <Stack.Screen name="SingIn" component={SingInScreen} />
    </Stack.Navigator>
  )
}