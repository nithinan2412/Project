import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import Login from './src/pages/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    return (
      <View style ={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#42a5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },


  loginBtn:{
    width:"80%",
    backgroundColor:"#0077c2",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },

  inputView:{
    width:"80%",
    backgroundColor:"#ffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  textcolor:{
    color:"#f000"
  }
});
export default App;
