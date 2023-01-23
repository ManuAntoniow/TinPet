//REACT
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
} from "react-native"
import { useState } from "react"

//COMPONENTS
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS } from "../../constants/colors"

//READUX
import { useDispatch } from "react-redux"
import { signIn } from "../../store/actions/sing.action"

const SingInScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    dispatch(signIn(email, password))
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <Image source={require( '../../assets/img/backgroundAuth.jpg')} style={[styles.image, StyleSheet.absoluteFill]}/>
      <TouchableOpacity style={styles.backBtn} onPress={() => {navigation.navigate('Register')}}>
        <Ionicons name="arrow-back" size={30} color='black'/>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>INICIAR SESION</Text>
        <View>
          <Text style={styles.label}>E-Mail</Text>
          <TextInput
            style={styles.input}
            id="email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            id="password"
            secureTextEntry
            required
            minLength={4}
            autoCapitalize="none"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Iniciar Secion" 
            color={COLORS.secondary} 
            onPress={handleSignIn}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SingInScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontFamily: "Fredoka",
    marginBottom: 18,
    textAlign: 'center',
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    color: COLORS.detail,
  },
  button: {
    alignItems: "center",
    marginBottom: 8,
  },
})