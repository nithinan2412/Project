
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, onPressHandler } from 'react-native'

import RegFrom from '../components/RegFrom';


const RegScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <RegFrom />
      <TouchableOpacity style={styles.BottomText} onPress={()=>navigation.navigate('LoginScreen')}>
        <Text style={{ fontSize: 24, color: '#fff' }}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Logotext: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40
  }

});
export default RegScreen;