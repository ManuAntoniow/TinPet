//REACT
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native"
import { useState } from "react"

//COMPONENTS
import { COLORS } from "../../constants/colors"

//REDUX
import { useDispatch } from "react-redux"
import { signUp } from "../../store/actions/auth.action"

const AuthScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    dispatch(signUp(email, password))
  }

  return (
    // <View style={styles.screen}>
    //   <Image source={require( '../../assets/img/backgroundAuth.jpg')} style={styles.image}/>
    // </View>
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
      <Image source={require( '../../assets/img/backgroundAuth.jpg')} style={[styles.image, StyleSheet.absoluteFill]}/>
      <View style={styles.container}>
        <Text style={styles.title}>CREAR CUENTA</Text>
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
            title="Registrarme" 
            color={COLORS.secondary} 
            onPress={handleSignUp}
          />
        </View>
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>Ya tienes una cuenta ?</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('SingIn')}}>
            <Text style={styles.promptButton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  title: {
    fontSize: 24,
    fontFamily: "Fredoka",
    marginBottom: 18,
    textAlign: 'center',
  },
  label: {
    fontFamily: "Fredoka",
    fontSize: 20,
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: "Fredoka",
    color: 'grey',
  },
  promptButton: {
    fontSize: 16,
    fontFamily: "Fredoka",
    color: 'blue',
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