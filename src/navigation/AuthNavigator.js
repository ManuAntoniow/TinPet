import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthScreen from "../screens/AuthScreen"

const Stack = createNativeStackNavigator()

export default AuthtNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen name="Login" component={AuthScreen} />
    </Stack.Navigator>
  )
}