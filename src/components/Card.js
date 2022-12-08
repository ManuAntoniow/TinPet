import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'

export const Card = ({ pic, title, caption }) => (
  <Tile
    imageSrc={pic}
    imageContainerStyle={styles.imageContainer}
    title={title}
    titleStyle={styles.title}
    featured
    caption={caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: 360,
    height: 625,
    borderRadius: 10,
    overflow: 'hidden', // this does magic
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 30,
  },
  caption: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
})