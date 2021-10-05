import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginFrom = () => {
    return (

        <View style={styles.container}>
            <TextInput style={styles.InputBox} placeholder="Users ID" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000' />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        alignItems: 'center',
    },

    InputBox: {
        backgroundColor: '#fff',
        height:50,
        width: 300,
        marginVertical: 10,
        borderRadius: 30,
    },

});
export default LoginFrom;
