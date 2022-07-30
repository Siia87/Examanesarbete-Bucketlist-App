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

  const [Data, setData] = useState([]);

  const getTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/tasks')

      setData(data);
      console.log('data tasks:', data)
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (

    <View style={styles.container}>

      <Newtask show={addMode} onAdd={addTask} />
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item._id}
        data={Data}
        renderItem={itemData => (
          <TouchableOpacity
            onPress={() => alertButton(itemData.item._id)}
          >
            <View style={styles.listItem}>
              <Text style={styles.textTitle}>{itemData.item.title}</Text>
              <Text >{itemData.item.desctiption}</Text>
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
  },
  textTitle: {
    fontWeight: "bold",
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 25,
    zIndex: 1,
    position: 'absolute',
    left: 5
  },
})

