import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inspiration from './views/Inspiration'
import Bucketlist from './views/Bucketlist'
import Home from './views/Home'
import Login from './views/Login'
import Register from './components/Register';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#157185',
  }
}


export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(false)
  return (
    <NavigationContainer theme={myTheme}>
      {!isLogedIn && <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>

      }
      {isLogedIn && <Tab.Navigator
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
      </Tab.Navigator>}
    </NavigationContainer >

  )
};
