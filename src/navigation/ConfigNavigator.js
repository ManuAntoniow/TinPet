import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ConfigScreen from '../screens/ConfigScreen'

//SCREENS
import PersonalInfoScreen from "../screens/ConfigScreens/PersolaInfoScreen"
import DogScreen from "../screens/ConfigScreens/Dog/DogScreen"
import DogsListScreen from "../screens/ConfigScreens/Dog/DogsListScreen"
import DogDetailScreen from "../screens/ConfigScreens/Dog/DogDetailScreen"
import MapScreen from "../screens/ConfigScreens/Dog/MapScreen";

const Stack = createNativeStackNavigator()

const ConfigNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Config'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
    >
      <Stack.Screen name='Config' component={ConfigScreen}/>
      <Stack.Screen name='PersonalInfo' component={PersonalInfoScreen}/>
      <Stack.Screen name="Dog" component={DogScreen}/>
      <Stack.Screen name="DogList" component={DogsListScreen} />
      <Stack.Screen name="DogDetail" component={DogDetailScreen}/>
      <Stack.Screen name="Map" component={MapScreen}/>
    </Stack.Navigator>
  )
} 

export default ConfigNavigator