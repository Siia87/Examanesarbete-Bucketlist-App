import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'


export default function Inspiration() {

  const [myInspiration, setMyInspiration] = useState('Here it comes')
  const [myPicker, setMyPicker] = useState('charity')


  function inspiration(mypick) {

    (async () => {
      setMyInspiration((await axios.get(`http://www.boredapi.com/api/
activity?type=${mypick}`)).data.activity)
    })()
  }


  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.inspiration}
          selectable={true}
          selectionColor='#C2DADD'>{myInspiration}</Text>
      </View>
      <View>
        <Text>Choose a category</Text>
        <Picker
          myPicker={myPicker}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setMyPicker(itemValue)}
        >
          <Picker.Item label="Education" value="education" />
          <Picker.Item label="Social" value="social" />
          <Picker.Item label="Relax" value="relaxation" />
          <Picker.Item label="Charity" value="charity" />
          <Picker.Item label="Food" value="cooking" />
          <Picker.Item label="Music" value="music" />
        </Picker>
      </View>

      <Button
        color='#157185'
        title="Go"
        onPress={() => inspiration(myPicker)} />

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FF8E8E',
    flex: 1,
    justifyContent: 'center'
  },
  inspiration: {
    height: 200,
    fontSize: 30,
    textAlign: "center",
  },

})

