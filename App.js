import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Fredoka': require('./src/assets/fonts/Fredoka-Light.ttf')
  })
  
  if (!fontsLoaded) {
    return null
  }
  
  return (
    <AppNavigator/>
  )
}