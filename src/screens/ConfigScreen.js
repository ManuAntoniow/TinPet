import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const ConfigScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>UserName</Text>
      <TouchableOpacity style={styles.conteiner} onPress={() => {navigation.navigate('PersonalInfo')}}>
        <Ionicons name="home-outline" size={30} color='black'/>
        <Text style={styles.subTitle}>Personal Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteiner} onPress={() => {navigation.navigate('PersonalInfo')}}>
        <Ionicons name="home-outline" size={30} color='black'/>
        <Text style={styles.subTitle}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteiner} onPress={() => {navigation.navigate('PersonalInfo')}}>
        <Ionicons name="home-outline" size={30} color='black'/>
        <Text style={styles.subTitle}>Dogs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteiner} onPress={() => {navigation.navigate('PersonalInfo')}}>
        <Ionicons name="home-outline" size={30} color='black'/>
        <Text style={styles.subTitle}>Liked</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conteiner} onPress={() => {navigation.navigate('PersonalInfo')}}>
        <Ionicons name="home-outline" size={30} color='black'/>
        <Text style={styles.subTitle}>Settings</Text>
      </TouchableOpacity>
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
    fontSize: 40,
  },
  subTitle: {
    fontFamily: "Fredoka",
    margin: 10,
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
})

export default ConfigScreen