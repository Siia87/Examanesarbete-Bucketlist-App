import React, { useState } from 'react'
import { Button, StyleSheet, View, TextInput, Text, Modal, TouchableOpacity } from 'react-native';


export default function NewTask({ onAdd, show }) {

  const [myTask, setMyTask] = useState('')

  const inputHandler = text => {
    setMyTask(text);
  }
  function resetText() {
    setMyTask('')
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={show}
    >

      <View style={styles.input}>

        <TextInput
          placeholder="add to bucketlist"
          onChangeText={inputHandler}
          value={myTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => { onAdd(myTask), resetText() }}>
          <Text style={styles.textBtn}>+</Text>
        </TouchableOpacity>

        <Button
          color='#157185'
          title='Back'
          onPress={() => { onAdd(''), resetText() }} />

      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: '#157185',
    borderRadius: 60,
    height: 60,
    justifyContent: 'center',
    padding: 15,
    width: 60,
    margin: 80,
  },
  textBtn: {
    color: 'white',
  },
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