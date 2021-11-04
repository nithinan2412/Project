
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Axios from "axios";


 


const RegScreen = () => {
  const Axios = require('axios').default;

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [employeeList, setEmployeeList] = useState([]);
  
  const getEmployees = () => {
    Axios.get('http://10.0.2.2:7077/users').then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
  Axios.post("http://localhost:7077/create",{ 
    fname: fname,
    lname: lname,
    userid: userid,
    email: email,
    pass: pass,
  }).then(() => {
    setEmployeeList([
      ...employeeList,
      {
          fname: fname,
          lname: lname,
          userid: userid,
          email: email,
          pass: pass,
      },
    ]);
  });
};
    return (

        <View style={styles.container}>
            {/*<View>{[employeeList.map(item =>(
              <Text>{item.id + "." + item.userid}</Text>
            ))]}</View>*/}
            <Text style={{ fontSize: 24, color: '#fff' }}>Register</Text>
            <TextInput style={styles.InputBox} placeholder="First Name" placeholderTextColor='#000' 
                onChange={(event) => {
                setFname(event.target.value)
            }}/>
            <TextInput style={styles.InputBox} placeholder="Last Name" placeholderTextColor='#000' 
                onChange={(event) => {
                setLname(event.target.value)
            }}/>
            <TextInput style={styles.InputBox} placeholder="User ID" placeholderTextColor='#000'  
                onChange={(event) => {
                setUserid(event.target.value)
              }}/>
            <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000'  
                onChange={(event) => {
                setPass(event.target.value)
              }}/>
            <TextInput style={styles.InputBox} placeholder="Comfirm Password" placeholderTextColor='#000'  
                /*onChange={(event) => {
                setCountry(event.target.value)
              }}*/ />
            <TextInput style={styles.InputBox} placeholder="Email Address" placeholderTextColor='#000'  
                onChange={(event) => {
                setEmail(event.target.value)
              }} />
            <TouchableOpacity style={styles.BottomText} onPress={getEmployees}>
                <Text style={{ fontSize: 24, color: '#000' }}>Confrim</Text>
            </TouchableOpacity>
              
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
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
        backgroundColor: '#fff',
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginVertical: 20
    }
});
export default RegScreen;