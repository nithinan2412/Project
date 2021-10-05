import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const RegFrom = () => {
    return (

        <View style={styles.container}>
            <TextInput style={styles.InputBox} placeholder="Users ID" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Password" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Passwordฤ" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Email" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Age" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Width" placeholderTextColor='#000' />
            <TextInput style={styles.InputBox} placeholder="Height" placeholderTextColor='#000' />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:2,
        padding: 100,
        alignItems: 'center'
    },

    InputBox: {
        backgroundColor: '#80d6ff',
        height:50,
        width: 300,
        marginVertical: 10,
        borderRadius: 25,
    },

    BottomText: {

        width: 200,
        height:50,
        backgroundColor: '#0077c2',
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginVertical: 20

    }
});
export default RegFrom;