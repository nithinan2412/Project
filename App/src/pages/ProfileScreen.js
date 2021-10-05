import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
import ProForm from '../components/Proform';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{flex:1}} >
            <Text>Profile</Text>
            <ProForm/>            
        </View>
    )
}
const styles = StyleSheet.create({
    userImg: {
        width: 100,
        height: 100,
        borderRadius: 75,
    }
});
export default ProfileScreen;
