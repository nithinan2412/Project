import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Axios from "axios";
import apiurl from "../config/api"
import {UseUser} from '../context/User'

import LogoForm from '../components/LogoForm';
const LoginScreen = ({navigation}) => {
  const users = UseUser();
  
  const [userid, setUserid] = useState("");
  const [pass, setPass] = useState("");
  const [falses, setFalses] = useState("");
  const [DataList, setDataList] = useState([]);
  const useraccept = "userid";

  
  const CheckUsers = () => {
    
  /*Axios.post("http://localhost:7077/users/checkid",{ 
    userid: userid,
    pass: pass,
  }).then(() => {
    setDataList([
      ...employeeList,
      {
          userid: userid,
          pass: pass,
      },
    ]);
  });*/
  Axios.post(apiurl + "/users/checkid",{ 
    userid: userid,
    pass: pass,
  }).then((response) => {
    setDataList(response.data);
    if(response.data.length==0)
        {
          setFalses("login wrong");
        }
      else
        { 
          users.setUserid(userid)
          navigation.navigate('HomeScreen');
        }

  });
  };




  const onPressHandler = () => {
    navigation.navigate('RegScreen');
  }
  return (


       <View style={styles.container}>
      <LogoForm />
      <View >
            <Text style={{ fontSize: 24, color: '#fff' }}>{falses}</Text>
            <TextInput style={styles.InputBox} placeholder="Users ID" onChange={(event) => {
                setUserid(event.target.value)
            }}placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Password" secureTextEntry onChange={(event) => {
                setPass(event.target.value)
            }}placeholderTextColor='#000' />
        </View>
      <TouchableOpacity style={styles.BottomText} onPress={CheckUsers}>
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

  },
  InputBox: {
    backgroundColor: '#fff',
    height:50,
    width: 300,
    marginVertical: 10,
    borderRadius: 30,
},

});


export default LoginScreen ;