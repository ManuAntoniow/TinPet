import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ConfigScreen from '../screens/ConfigScreen'
import PersonalInfoScreen from "../screens/ConfigScreens/PersolaInfoScreen"
import DogCategoriesScreen from '../screens/ConfigScreens/DogCategoriesScreen'
import DogScreen from "../screens/ConfigScreens/DogScreen"

const Stack = createNativeStackNavigator()

const ConfigNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Config' 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Stack.Screen name='Config' component={ConfigScreen}/>
      <Stack.Screen name='PersonalInfo' component={PersonalInfoScreen}/>
      <Stack.Screen name='DogCategories' component={DogCategoriesScreen}/>
      <Stack.Screen
        name="Dog"
        component={DogScreen}
      />
    </Stack.Navigator>
  )
} 

export default ConfigNavigator