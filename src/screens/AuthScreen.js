import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native"
import { useCallback, useReducer, useEffect, useState } from "react"

import { COLORS } from "../constants/colors"
import { useDispatch } from "react-redux"
import { signup } from "../store/actions/auth.action"

const AuthScreen = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    dispatch(signup(email, password))
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.screen}
    >
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
            title="Registrarme" 
            color={COLORS.secondary} 
            onPress={handleSignUp}
          />
        </View>
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>Ya tienes una cuenta ?</Text>
          <TouchableOpacity>
            <Text style={styles.promptButton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
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
    color: '#ccc',
  },
  button: {
    alignItems: "center",
    marginBottom: 8,
  },
});