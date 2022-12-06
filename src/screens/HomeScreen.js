import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>HOME</Text>
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

export default HomeScreen