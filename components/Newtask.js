import React from 'react'
import { Button, StyleSheet, View, Modal } from 'react-native';
import { useForm } from 'react-hook-form'
import FormInput from '../components/FormInput';
import axios from 'axios'



export default function NewTask({ setAddMode, userId }) {

  const { control, handleSubmit, formState: { errors } } = useForm()
  function goBack() {
    setAddMode(false)
  }


  const addTask = data => {
    console.log('task data: ', data)
    console.log('userid: ', userId)
    axios.post('http://localhost:3000/tasks', {
      userId: userId,
      title: data.Title,
      desctiption: data.Description,
      priority: data.Priority,

    })
      .then(function (response) {
        console.log(response);
        setAddMode(false)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={setAddMode}
    >

      <View style={styles.input}>
        <View style={styles.inuptView}>
          <FormInput
            name='Title'
            placeholder='Title'
            control={control}
            rules={{ required: 'Title is required' }}
          />

        </View>
        <View style={styles.inuptView}>
          <FormInput
            name='Description'
            placeholder='Description'
            control={control}
            rules={{ required: 'Description is required' }}
          />

        </View>
        <View style={styles.inuptView}>
          <FormInput
            name='Priority'
            placeholder='Priority'
            control={control}
            rules={{
              required: 'Priority is required'
            }}
          />
        </View>


        <View style={styles.button}>
          <Button
            color='#157185'
            title='Add to bucketlist'
            onPress={handleSubmit(addTask)}
          />
        </View>
        <View style={styles.button}>
          <Button
            color='#157185'
            title='Back'
            onPress={(goBack)}
          />
        </View>
      </View>
    </Modal>

  )
  {/* return (
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
 ) */}

}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: '#157185',
    borderRadius: 60,
    height: 60,
    justifyContent: 'center',
    padding: 15,
    width: '70%',
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
  },
  inuptView: {
    width: '100%',
    alignItems: 'center',
  }, button: {
    //marginTop: 20,
    width: '80%',
  },
})