import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native'
import Register from '../components/Register';
//import { Button } from 'react-native-paper';
export default function Start() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [register, setRegister] = useState(false)
  const [registerMode, setRegisterMode] = useState(false)

  function login() {
    console.log(email, password, registerMode)

  }
  const onRegister = task => {
    if (task === '') {
      setRegisterMode(false)
    }
  }
  return (
    <View style={styles.container}>

      <Register show={setRegisterMode} onAdd={onRegister} />

      <View style={styles.inuptView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inuptView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          color='#157185'
          title="Login"
          onPress={() => login()}
        />
      </View>
      <View style={styles.button}>
        <Button
          color='#67BBC7'
          title="Register"
          onPress={() => setRegisterMode(true)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
  inuptView: {
    backgroundColor: '#67BBC7',
    borderRadius: 30,
    marginBottom: 20,
    height: 30,
    width: '70%',
    alignItems: 'center',
  }
})