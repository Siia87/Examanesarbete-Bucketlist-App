import React, { useState } from 'react'
import { Button, StyleSheet, View, TextInput, Text, Modal } from 'react-native';


export default function Register(show, onRegister) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function addAccount() {
    console.log('skapat konto')
    set
  }
  return (

    <Modal
      transparent={true}
      animationType="fade"
      visible={show}
    >
      <View style={styles.input}>
        <View style={styles.inuptView}>
          <TextInput
            style={styles.TextInput}
            placeholder='Firstname'
            onChangeText={(firstname) => setFirstname(firstname)}
          />
        </View>
        <View style={styles.inuptView}>
          <TextInput
            style={styles.TextInput}
            placeholder='Lastname'
            onChangeText={(lastname) => setLastname(lastname)}
          />
        </View>
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



        <Button
          color='#157185'
          title='Create account'
          onPress={() => { addAccount(), onRegister('') }}
        />

      </View>
    </Modal>

  )
}
const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 4,
    flex: 1,
    justifyContent: 'center',
    margin: 60,
    padding: 35,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 10,
  }
})