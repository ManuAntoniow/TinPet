import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { DogCardData } from '../data/DogCardData'

const HomeScreen = () => {
  return (
      <View>
        <Swiper
          cards={DogCardData}
          renderCard={Card}
          infinite
          disableTopSwipe
          disableBottomSwipe
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'red',
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'blue',
                  borderColor: 'blue',
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
})

export default HomeScreen