import { createNativeStackNavigator } from "@react-navigation/native-stack"

import MessajesScreen from '../screens/MessajesScreen'

const Stack = createNativeStackNavigator()

const MessajesNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home' 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Stack.Screen name='Messajes' component={MessajesScreen}/>
    </Stack.Navigator>
  )
} 

export default MessajesNavigator