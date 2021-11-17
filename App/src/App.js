import React from 'react'
import LoginScreen from './src/pages/LoginScreen'
import RegScreen from './src/pages/RegScreen'
import HomeScreen from './src/pages/HomeScreen'
import ProfileScreen from './src/pages/ProfileScreen'
import calendarScreen from './src/pages/calendarScreen'
import SwitchScreen from './src/pages/SwitchScreen'
import DataScreen from './src/pages/DataScreen'
import ChartScreen from './src/pages/ChartScreen'
import EditProScreen from './src/pages/EditProScreen'
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
        />
        <Stack.Screen
          name="calendarScreen"
          component={calendarScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="SwitchScreen"
          component={SwitchScreen}
        />
        <Stack.Screen
          name="DataScreen"
          component={DataScreen}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
        />
        <Stack.Screen
          name="EditProScreen"
          component={EditProScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
