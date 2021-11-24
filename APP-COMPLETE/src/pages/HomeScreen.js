import React from 'react';
import { Button, View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import LogoForm from '../components/LogoForm';
import { UseUser } from '../context/User';



const HomeScreen = ({ navigation }) => {

    const users = UseUser()

    return (

        <View style={{ flex: 1, backgroundColor: 'pink', width: 400, height: 200, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                <LogoForm />
            </View>
            <View style={{ height: 200, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                <View>
                    <View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#fff', width: 110, height: 110, margin: 15, borderRadius: 25, }}
                            onPress={() => navigation.navigate('ProfileScreen')} >
                            <Image source={require('../images/profile.png')} style={{ width: 110, height: 110 }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#fff', width: 110, height: 110, margin: 15, borderRadius: 25, }}
                            onPress={() => navigation.navigate('calendarScreen')} >
                            <Image source={require('../images/calendar.png')} style={{ width: 110, height: 110 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#fff', width: 110, height: 110, margin: 15, borderRadius: 25, }}
                            onPress={() => navigation.navigate('SwitchScreen')} >
                            <Image source={require('../images/switch.png')} style={{ width: 110, height: 110 }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        style={{ backgroundColor: '#fff', width: 110, height: 110, margin: 15, borderRadius: 25, }}
                        onPress={() => navigation.navigate('DataScreen')}>
                            <Image source={require('../images/study.png')} style={{ width: 110, height: 110 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonlg} onPress={() => navigation.goBack()}>
                <Text style={{ fontSize: 24, color: '#000' }}>LOGOUT</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonlg: {
        width: 250,
        height: 50,
        backgroundColor: '#fff',
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginVertical: 2
    },
});
export default HomeScreen