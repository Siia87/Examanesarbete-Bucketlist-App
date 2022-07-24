import React from 'react'
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import FormInput from '../components/FormInput';
import axios from 'axios'

export default function Register() {

  const { control, handleSubmit, formState: { errors } } = useForm()
  const navigation = useNavigation()
  const addAccount = data => {

    console.log(data)
    console.log(data.Firstname)
    axios.post('http://localhost:3000/users', {
      firstname: data.Firstname,
      lastname: data.Lastname,
      email: data.Email,
      password: data.Password,
    })
      .then(function (response) {
        console.log(response);
        navigation.navigate('Login')
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  const goBack = () => {
    console.log('goback')
    navigation.navigate('Login')
  }

  const EmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return (

    <View style={styles.container}>

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


      <View style={styles.buttonView}>
        <Button
          color='#157185'
          title='Create account'
          onPress={handleSubmit(addAccount)}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          color='#157185'
          title='Back'
          onPress={(goBack)}
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
    justifyContent: 'center',

  },
  buttonView: {
    marginTop: 20,
    width: '70%'
  },
  inuptView: {
    width: '100%',
    alignItems: 'center',
  }
})