import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Switch, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UseUser } from '../context/User';
import { Icon, Overlay } from 'react-native-elements';
import  Axios  from 'axios';
import apiurl from "../config/api"


const SwitchScreen = () => {
    const users = UseUser();
    const Right = () => setCounternumber(counternumber + 1)
    const Left = () => setCounternumber(counternumber - 1) 
    const [counternumber, setCounternumber] = useState(0);
    const [ready, setReady] = useState(false);
    const [visible, setVisible] = useState(false);
    const [vote, setVote] = useState(0);
    const [comment, setComment] = useState("");
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const [insertid, setInsertid] = useState(null);
    const [text, onChangeText] = React.useState(null);
    const [counter, setCounter] = useState(45);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const add = () => {
        if(counter +1 > 65)
        return;
        setCounter(counter + 1)
      
    }

    useEffect (() => {
        if(ready){
            const timer = setTimeout(() => {
                Axios.put(apiurl + "/Switch/Temp",{ 

                    temp: counter,
        
                  }).then(() => {
        
                   
                  });
            },250)
            return () => {
                clearTimeout(timer)
            } 
        }

    },[counter])
    const minus = () => {
        if(counter -1 < 45)
        return;
        setCounter(counter - 1)
    }

    const use_equipment =() => {
    
            Axios.post(apiurl + "/Switch/Open",{ 

                userid: users.userid,
              }).then((response) => {
                setInsertid(response.data.insertId)
                
              });




    }

    const unuse_equiment=() =>{

            Axios.put(apiurl + "/Switch/Close",{ 

                id: insertid,
                vote: vote,
                comment: comment,
                temp : counter,
              }).then(() => {

                toggleOverlay()
 
              });



    }
    useEffect(() => {
        if (ready && !isEnabled)
        {
            setVisible(true)
        }

        if (ready){
            if(isEnabled)
            use_equipment()
        }
        
    }, [isEnabled])

    useEffect(() => {
        setReady(true)
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <View style={{ flex: 1, }}>
                <View style={{
                    margin: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 300,
                    height: 300,
                    borderRadius: 300 / 2,
                    backgroundColor: "#4DC6F8"
                }}>
                    <TouchableOpacity 
                    style={{ alignSelf: 'center' }} onPress={add}><Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>+</Text></TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 80, color: 'white', fontWeight: 'bold' }}>{counter}<Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>°C</Text></Text>
                    <TouchableOpacity 
                    style={{ alignSelf: 'center' }} onPress={minus}><Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>-</Text></TouchableOpacity>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    
                />
                
            </View>
            <View>
            
            
                <TouchableOpacity style = {{backgroundColor : "#FFF",width : 260 , height : 50 , alignItems : "center" , alignSelf : "center" , justifyContent : "center" , 
                borderRadius : 50, flexDirection : "row"}  }>
                <TouchableOpacity style={{margin:20}} onPress = {Left}>
                        <Image source={require('../images/Left.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color: '#000', fontWeight: 'bold' } }>{counternumber} </Text>
                    <TouchableOpacity style={{margin:20}} onPress = {Right}>
                        <Image source={require('../images/Right.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>

                <Text>
                    Please Rate Satisfaction
                </Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity style={{margin:5}} 
                    onPress={() => {setVote(1)}}>
                        <Image source={require('../images/angryicon.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5}} 
                    onPress={() => {setVote(2)}}>
                        <Image source={require('../images/sadicon.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5}}
                    onPress={() => {setVote(3)}}>
                        <Image source={require('../images/shyicon.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5}}
                    onPress={() => {setVote(4)}}>
                        <Image source={require('../images/happyicon.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5}}
                    onPress={() => {setVote(5)}}>
                        <Image source={require('../images/loveicon.png')} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>


                </View>
                <Text>โปรดอธิบายความรู้สึกของท่านหลังใช้งาน</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    onChange={(event) => {setComment(event.target.value)}}
                />
                <Button
                    icon={
                        <Icon
                            name="wrench"
                            type="font-awesome"
                            color="white"
                            size={25}
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    title="Confirm"
                    onPress={unuse_equiment}
                />
            </Overlay>


            <View style={{ flex: 0.5, alignSelf: 'center' }}>
                <Image source={require('../images/Whealth.png')} style={{ width: 250, height: 250, }} />
            </View>



        </View>
    );

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },

});
export default SwitchScreen;