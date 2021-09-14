import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import From from '../components/From';


export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Logotext}>Welcome</Text>
                <From/>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    
  container: {
    flex: 1,
    backgroundColor: '#42a5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Logotext:{ 
    fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40
  }

});