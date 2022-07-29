import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import Newtask from '../components/Newtask'


export default function Bucketlist() {
  const [newItem, setNewItem] = useState([])
  const [addMode, setAddMode] = useState(false)


  const addTask = task => {
    if (task === '') {
      setAddMode(false)
    } else {


      setNewItem(newItem => [
        { id: Math.random().toString(), value: task },
        ...newItem,
      ])
      setAddMode(false)
    }
  }

  const removeTask = taskId => {
    setNewItem(newItem => {
      return newItem.filter((item) => item.id !== taskId)
    })
  }
  const alertButton = taskId =>
    Alert.alert(
      "Delete",
      "Do you want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => removeTask(taskId)
        }
      ]
    )

  const [data, setData] = useState([]);

  const getTasks = async () => {
    const { data } = await axios.get('http://localhost:3000/tasks')
    setData(data);

    console.log('data tasks:', data)
    /* .then(function (response) {
       console.log(response);

     })
     .catch(function (error) {
       console.log(error);
     });*/

  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View style={styles.container}>

      <Newtask show={addMode} onAdd={addTask} />

      <FlatList
        style={styles.list}
        keyExtractor={(data) => data._id}
        data={data}
        renderItem={data => (
          <TouchableOpacity
            onPress={() => alertButton(data._id)}
          >
            <View style={styles.listItem}>
              <Text >{data.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.button}>
        <Button
          color='#157185'
          title='Add to my list'
          onPress={() => setAddMode(true)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#67BBC7',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    height: 400
  },
  listItem: {
    backgroundColor: '#C2DADD',
    borderColor: '#C2DADD',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 200,
  }
})

