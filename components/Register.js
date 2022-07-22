import React, { useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native';


export default function Register() {

  const { control, handleSubmit, formState: { errors } } = useForm()

  const addAccount = data => {
    console.log(data)
  }

  const EmailValidation = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

  return (

    <View>
      <View style={styles.inuptView}>

      </View>
      <View style={styles.input}>
        <View style={styles.inuptView}>
          <FormInput
            name='Firstname'
            placeholder='Firstname'
            control={control}
            rules={{ required: 'Firstname is required' }}
          />

        </View>
        <View style={styles.inuptView}>
          <FormInput
            name='Lastname'
            placeholder='Lastname'
            control={control}
            rules={{ required: 'Lastname is required' }}
          />

        </View>
        <View style={styles.inuptView}>
          <FormInput
            name='Email'
            placeholder='Email'
            control={control}
            rules={{
              required: 'Email is required', pattern: { value: EmailValidation, message: 'Email is invalid' }
            }}
          />
        </View>
        <View style={styles.inuptView}>
          <FormInput
            name='Password'
            placeholder='Password'
            control={control}
            secureTextEntry={true}
            rules={{ required: 'Password is required' }}
          />

        </View>



        <Button
          color='#157185'
          title='Create account'
          onPress={handleSubmit(addAccount)}
        />

      </View>
    </View >

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