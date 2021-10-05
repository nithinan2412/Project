import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import LoginFrom from '../components/LoginFrom';
import LogoForm from '../components/LogoForm';


const LoginScreen = ({navigation}) => {

  const onPressHandler = () => {
    navigation.navigate('RegScreen');
  }
  return (
    <View style={styles.container}>
      <LogoForm />
      <LoginFrom />
      <TouchableOpacity style={styles.BottomText} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{ fontSize: 24, color: '#000' }}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text>Don't have account yet?</Text>
        <TouchableOpacity style={{alignItems:'center'}} onPress={onPressHandler}><Text>Signup</Text></TouchableOpacity>
      </View>
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
    color: "#000",
    marginBottom: 40
  },

  BottomText: {

    width: 200,
    height: 50,
    backgroundColor: '#fff',
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    marginVertical: 2

  }

});

export default LoginScreen;