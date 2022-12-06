import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ConfigScreen from '../screens/ConfigScreen'
import PersonalInfoScreen from "../screens/ConfigScreens/PersolaInfoScreen"

const Stack = createNativeStackNavigator()

const ConfigNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home' 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Stack.Screen name='Config' component={ConfigScreen}/>
      <Stack.Screen name='PersonalInfo' component={PersonalInfoScreen}/>
    </Stack.Navigator>
  )
} 

export default ConfigNavigator