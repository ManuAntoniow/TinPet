import { Button, StyleSheet, Text, View } from 'react-native'

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SEARCH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Fredoka",
    margin: 10,
  },
})

export default SearchScreen