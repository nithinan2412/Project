import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import {Actions} from 'react-navigation/native-stack'

export class From extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.InputBox} placeholder="Users ID" placeholderTextColor='#000'/>
                <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000'/>
                <TouchableOpacity style={styles.BottomText}>
                    <Text style={{fontSize: 24,color:'#fff'}} onPress={()=> Alert.alert('s')}>LOGIN</Text>
                                        
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{

        justifyContent: 'center',
        alignItems:'center'
    },
    InputBox: {
        backgroundColor: '#80d6ff',
        width:300,
        marginVertical:10,
        borderRadius:25,
    },

    BottomText :{

        width:200,
        backgroundColor: '#0077c2',
        alignItems:"center",
        borderRadius:25,
        padding:10,
        marginVertical:20
        

     
    }
});

export default From