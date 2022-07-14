import React from 'react';
import { Text, View, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import Balloon from '../assets/Balloon.png'

export default function Home() {
  return (
    <View style={styles.homepage}>
      <StatusBar style={styles.statusbar} />
      <ImageBackground source={Balloon} style={styles.image}>
        <Text style={styles.text}>Welcome to your</Text>
        <Text style={styles.text}>Bucketlist app!</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  text: {
    fontSize: 30,
    paddingLeft: 20,
    textAlign: "left",
    textShadowColor: "white",
    textShadowOffset: { width: 5, height: 1 },
    textShadowRadius: 10,
  },
  statusbar: {
    backgroundColor: '#157185',
  }

})