import React from 'react';
import { View, Button, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import FormInput from '../components/FormInput';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


export default function Login({ setIsLogedIn, setUserId }) {


  const { control, handleSubmit, formState: { errors } } = useForm()
  const EmailValidation = /^[a-zA-Z0-9.!#$%&'*+/=? _`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const navigation = useNavigation()

  const onLoginPressed = data => {
    console.log(data)
    axios.post('http://localhost:3000/login', { data })
      .then(function (response) {
        setUserId(response.data._id)
        setIsLogedIn(true)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const onRegisterPressed = () => {
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>

      <View style={styles.inuptView}>
        <FormInput
          name='email'
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
    width: '70%',
  },
  inuptView: {
    width: '100%',
    alignItems: 'center',
  }
})