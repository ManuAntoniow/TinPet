import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ConfigScreen from '../screens/ConfigScreen'
import HomeScreen from '../screens/HomeScreen'
import MessajesScreen from '../screens/MessajesScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='Messajes' component={MessajesScreen}/>
        <Stack.Screen name='Config' component={ConfigScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator