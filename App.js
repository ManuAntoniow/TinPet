//FONT
import { useFonts } from 'expo-font'

//NAVIGATION
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

//REDUX
import { Provider } from "react-redux"
import store from "./src/store"

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Fredoka': require('./src/assets/fonts/Fredoka-Light.ttf')
  })
  
  if (!fontsLoaded) {
    return null
  }
  
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  )
}