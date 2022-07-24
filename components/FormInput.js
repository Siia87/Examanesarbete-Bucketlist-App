import React from 'react'
import { Controller } from 'react-hook-form'
import { View, TextInput, StyleSheet, Text } from 'react-native'


export default function FormInput({ control, rules = {}, name, placeholder, secureTextEntry }) {

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={styles.input}>
          <View style={[styles.inuptView, { borderColor: error ? 'red' : '#67BBC7' }]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
        </View>
      )}
    />

  )
}

const styles = StyleSheet.create({
  inuptView: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 30,
    width: '70%',
    alignItems: 'center',
    borderColor: '#4E8E9C',
    borderWidth: 1,
  },
  input: {
    marginBottom: 40,
    height: 30,
    width: '100%',
    alignItems: 'center',
  }
})