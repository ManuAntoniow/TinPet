import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { DogCardData } from '../data/DogCardData'

const HomeScreen = () => {
  return (
      <View style={styles.screen}>
        <Swiper
          cards={DogCardData}
          renderCard={Card}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
})

export default HomeScreen