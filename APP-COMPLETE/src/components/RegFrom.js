import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const RegFrom = () => {
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: '#fff' }}>Register</Text>
            <TextInput style={styles.InputBox} placeholder="First Name" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Last Name" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="User ID" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Comfirm Password" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Email Address" placeholderTextColor='#000' />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 100,
        alignItems: 'center'
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
export default RegFrom;