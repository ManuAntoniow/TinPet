import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Fredoka': require('./src/assets/fonts/Fredoka-Light.ttf')
  })
  
  if (!fontsLoaded) {
    return null
  }
  
  return (
    <BottomTabNavigator/>
  )
}