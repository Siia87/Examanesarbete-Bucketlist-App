import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
//import Register from '../components/Register';
import FormInput from '../components/FormInput';
import { useNavigation } from '@react-navigation/native'
export default function Start() {

  const { control, handleSubmit, formState: { errors } } = useForm()
  const EmailValidation = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

  const navigation = useNavigation()

  const onLoginPressed = data => {
    console.log(data)

    navigation.navigate('Home')
  }

  const onRegisterPressed = () => {
    console.log('register')

    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>

      <View style={styles.inuptView}>
        <FormInput
          name='Email'
          placeholder='Email'
          rules={{
            required: 'Email is required', pattern: { value: EmailValidation, message: 'Email is invalid' }
          }}
          control={control}
        />
      </View>

      <View style={styles.inuptView}>
        <FormInput
          name='password'
          placeholder='Password'
          rules={{ required: 'Password is required' }}
          secureTextEntry={true}
          control={control}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.button}
          color='#157185'
          title="Login"
          onPress={handleSubmit(onLoginPressed)}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.button}
          color='#157185'
          title="Register"
          onPress={(onRegisterPressed)}
        />
      </View>

    </View >
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


})