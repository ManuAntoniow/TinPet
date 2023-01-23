import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { DogCardData } from '../data/DogCardData'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS } from "../constants/colors"
import { createRef, useState } from 'react'

const HomeScreen = () => {
  const [index, setIndex] = useState(0)
  const swiperRef = createRef()

  const onSwiped = () => {
    setIndex((index+1) % DogCardData.length)
  }

  return (
    <View style={styles.screen}>
      <Swiper
        ref={swiperRef}
        cards={DogCardData}
        onSwiped={onSwiped}
        cardIndex={index}
        renderCard={Card}
        infinite
        disableTopSwipe
        disableBottomSwipe
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={4}
        stackScale={10}
        stackSeparation={15}
        overlayLabels={{
          left: {
          title: 'NOPE',
            style: {
              label: {
                backgroundColor: COLORS.secondary,
                borderColor: COLORS.detail,
                color: 'white',
                borderWidth: 1,
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -55
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: COLORS.primary,
                borderColor: COLORS.clear,
                color: 'white',
                borderWidth: 1,
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 55
              }
            }
          }
        }}
      />
      <View style={styles.conteinerBtn}>
      <TouchableOpacity style={styles.btn} onPress={() => swiperRef.current.swipeLeft()}>
          <Ionicons name="arrow-undo" size={50} color={COLORS.primary}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => swiperRef.current.swipeRight()}>
          <Ionicons name="heart" size={50} color={COLORS.secondary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteinerBtn: {
    marginTop: 700,
    flexDirection: 'row'
  },
  btn: {
    marginLeft: 100,
    marginRight: 100,
  }
})

export default HomeScreen