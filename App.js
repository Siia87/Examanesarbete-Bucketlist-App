import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Inspiration from './views/Inspiration'
import Bucketlist from './views/Bucketlist'
import Home from './views/Home'


const Tab = createMaterialBottomTabNavigator();
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#157185',
  }
}


export default function App() {

  return (
    <NavigationContainer theme={myTheme}>

      <Tab.Navigator
        activeColor="#67BBC7"
        inactiveColor="#FF8E8E">

        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="My Bucketlist" component={Bucketlist}
          options={{
            tabBarLabel: 'My list',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="marker" color={color} size={26} />
            ),
          }} />
        <Tab.Screen name="Inspiration" component={Inspiration}
          options={{
            tabBarLabel: 'Insp',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="lightbulb-outline" color={color} size={26} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer >

  )
};
