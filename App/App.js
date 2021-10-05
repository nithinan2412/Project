
import React, { Component } from 'react'
import LoginScreen from './src/pages/LoginScreen'
import RegScreen from './src/pages/RegScreen'
import HomeScreen from './src/pages/HomeScreen'
import calendarScreen from './src/pages/calendarScreen'
import ProfileScreen from './src/pages/ProfileScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'




const Stack = createStackNavigator()

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegScreen"
          component={RegScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calendarScreen"
          component={calendarScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
