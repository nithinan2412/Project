import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const EditProScreen = ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }} >EditProfile</Text>
        </View>
        <View style={{margin: 20,justifyContent:'center',alignContent:'center'}}>
            <View style={{margin: 30,justifyContent:'center',alignContent:'center'}}>
                <View style={{alignItems:"center"}} >
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50/ 2 }} />   
                </View>
                <TextInput style={styles.inputbx} placeholder="Usersname" placeholderTextColor='#000'/>
                <TextInput style={styles.inputbx} placeholder="Age" placeholderTextColor='#000'/>
                <TextInput style={styles.inputbx} placeholder="Weight" placeholderTextColor='#000'/>
                <TextInput style={styles.inputbx} placeholder="Height" placeholderTextColor='#000'/>
                <TextInput style={styles.inputbx} placeholder="ประจำเดือนอยู่ในช่วง" placeholderTextColor='#000'/>
                <TouchableOpacity style={styles.BottomText} onPress={() => navigation.goBack()}>
                <Text style={{ fontSize: 24, color: '#000',}}>Confrim</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View >
);

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
