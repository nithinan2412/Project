import React , {useState} from 'react';
import { UseUser } from '../context/User';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Axios  from 'axios';
import apiurl from "../config/api"


const EditProScreen = ({ navigation }) => {
 const users = UseUser()
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [day, setDay] = useState("");
  const [DataList, setDataList] = useState([]);

  const updateprofile = () => {
    Axios.put(apiurl + "/update/profile",{ 
      userid: users.userid,
      fname: fname,
      lname: lname,
      age: age,
      weight: weight,
      height: height,
      day: day,
    }).then(() => {
        setDataList([
          ...DataList,
          {
            userid: users.userid,
            fname: fname,
            lname: lname,
            age: age,
            weight: weight,
            height: height,
            day: day,
          },
        ]);
        navigation.goBack()
    });
  };

    return(
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }} >แก้ไขโปรไฟล์</Text>
        </View>
        <View style={{margin: 20,justifyContent:'center',alignContent:'center'}}>
            <View style={{margin: 30,justifyContent:'center',alignContent:'center'}}>
                <View style={{alignItems:"center"}} >
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50/ 2 }} />   
                </View>
                <TextInput style={styles.inputbx} placeholder="ชื่อจริง" placeholderTextColor='#000'onChange={(event) => {
                setFname(event.target.value)
            }}/>
                <TextInput style={styles.inputbx} placeholder="นามสกุล" placeholderTextColor='#000'onChange={(event) => {
                setLname(event.target.value)
            }}/>
                <TextInput style={styles.inputbx} placeholder="อายุ" placeholderTextColor='#000'onChange={(event) => {
                setAge(event.target.value)
            }}/>
                <TextInput style={styles.inputbx} placeholder="น้ำหนัก" placeholderTextColor='#000'onChange={(event) => {
                setWeight(event.target.value)
            }}/>
                <TextInput style={styles.inputbx} placeholder="ส่วนสูง" placeholderTextColor='#000'onChange={(event) => {
                setHeight(event.target.value)
            }}/>
                <TextInput style={styles.inputbx} placeholder="ประจำเดือนอยู่ในช่วง คศ-ดด-วว" placeholderTextColor='#000'onChange={(event) => {
                setDay(event.target.value)
            }}/>
                <TouchableOpacity style={styles.BottomText} onPress={updateprofile}>
                <Text style={{ fontSize: 24, color: '#000',}}>Confrim</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View >)
};

const styles = StyleSheet.create({
    inputbx: {
        backgroundColor: '#fff',
        height: 40,
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

export default EditProScreen;
