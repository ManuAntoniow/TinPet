//FONT
import { useFonts } from 'expo-font'

//NAVIGATION
import MainNavigator from './src/navigation/index'

//REDUX
import { Provider } from "react-redux"
import store from "./src/store"

import { init } from "./src/db"

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect")
    console.log(err.message)
  })

export default function App() {
  const [fontsLoaded] = useFonts ({
    'Fredoka': require('./src/assets/fonts/Fredoka-Light.ttf')
  })
  
  if (!fontsLoaded) {
    return null
  }
  
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  )
}