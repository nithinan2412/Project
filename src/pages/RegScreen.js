
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Axios from "axios";
import apiurl from "../config/api"

 


const RegScreen = () => {

  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const [passer, setPasser] = useState("");
  const [DataList, setDataList] = useState([]);
  
  const getEmployees = () => {
    Axios.get(apiurl + "/users").then((response) => {
      setDataList(response.data);
    });
  };

  const addUser = () => {
    if(pass == conpass){
    Axios.post(apiurl + "/create",{ 

      userid: userid,
      email: email,
      pass: pass,
      }).then(() => {
      setDataList([
       ...DataList,
       {
 
            userid: userid,
            email: email,
           pass: pass,
        },
      ]);
    });
  }else{

    setPasser("พาสเวิร์ด ไม่ถูกต้อง");

  }
};
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: '#fff' }}>Register</Text>

            <TextInput style={styles.InputBox} placeholder="User ID" placeholderTextColor='#000'  
                onChange={(event) => {
                setUserid(event.target.value)
              }}/>
            <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000'  
                onChange={(event) => {
                setPass(event.target.value)
              }}/>
            <TextInput style={styles.InputBox} placeholder="Comfirm Password" placeholderTextColor='#000'  
                onChange={(event) => {
                setConpass(event.target.value)
              }} />
            <TextInput style={styles.InputBox} placeholder="Email Address" placeholderTextColor='#000'  
                onChange={(event) => {
                setEmail(event.target.value)
              }} />
            <TouchableOpacity style={styles.BottomText} onPress={addUser}>
        <Text style={{ fontSize: 24, color: '#fff' }}>Confrim</Text>

        <Text style={{ fontSize: 24, color: '#fff' }}>{passer}</Text>
      </TouchableOpacity>
              
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 100,
        alignItems: 'center',
        backgroundColor:"pink"
    },

    InputBox: {
        backgroundColor: '#fff',
        height:40,
        width: 300,
        marginVertical: 10,
        borderRadius: 25,
    },

    BottomText: {
        backgroundColor: '#0077c2',
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginVertical: 20
    }
});
export default RegScreen;