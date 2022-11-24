import { Button, StyleSheet, Text, View } from 'react-native'

const ConfigScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>CONFIG</Text>
      <View style={styles.nav}>
        <Button title='Home' onPress={() => {
          navigation.navigate('Home')
        }}/>
        <Button title='Search' onPress={() => {
          navigation.navigate('Search')
        }}/>
        <Button title='Messajes' onPress={() => {
          navigation.navigate('Messajes')
        }}/>
        <Button title='Config' onPress={() => {
          navigation.navigate('Config')
        }}/>
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
  title: {
    fontFamily: "Fredoka",
    margin: 10,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
  },
})

export default ConfigScreen