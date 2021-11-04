import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DataScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 20  กันยายยน 2021 เวลา 10:00:30</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 18  กันยายยน 2021 เวลา 10:47:14</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 9 กันยายยน 2021 เวลา 11:43:14</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 4  กันยายยน 2021 เวลา 08:17:00</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 4  กันยายยน 2021 เวลา 07:23:43</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/woman.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> วันที่ 1  กันยายยน 2021 เวลา 13:50:17</Text>
            </View>
        </ScrollView>
        <View style={{ alignItems: 'center', }}>
            <TouchableOpacity style={styles.BottomGf} onPress ={()=> navigation.navigate('ChartScreen')}>
                <Text style={{ fontSize: 20, fontFamily: 'cursive', fontWeight: "bold" }}>กราฟข้อมูล</Text>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../images/Lovepik.png')} style={{ alignItems: 'center', width: 250, height: 250, }} />
        </View>

    </SafeAreaView>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "pink"
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    datascroll: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
        margin: 20,
        textAlign: 'center',
        fontSize: 15,
        borderRadius: 75
    },
    BottomGf: {
        width: 150,
        height: 50,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: "center",
        borderRadius: 75,
        padding: 10,
        marginVertical: 7

    }
});
export default DataScreen;