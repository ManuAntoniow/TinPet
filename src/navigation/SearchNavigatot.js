import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SearchScreen from '../screens/SearchScreen'

const Stack = createNativeStackNavigator()

const SearchNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home' 
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Stack.Screen name='Search' component={SearchScreen}/>
    </Stack.Navigator>
  )
} 

export default SearchNavigator