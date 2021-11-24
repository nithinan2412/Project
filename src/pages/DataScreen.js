import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UseUser } from '../context/User';
import  Axios  from 'axios';
import moment from 'moment';
import 'moment/min/locales'
import woman from '../images/woman.png'
import Lovepik from '../images/Lovepik.png'
import apiurl from "../config/api"
moment.locale('th')

const DataScreen = ({navigation}) => {
    const users = UseUser()
    const [DataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getuse_equiment = () => {
        setLoading(true)
        Axios.get(apiurl + "/users/equiment?userid="+ users.userid
        ).then((response) => {
          setDataList(response.data);
          setLoading(false)
        });
      };

    useEffect(() =>{
        getuse_equiment()
    },[])

    return(
    
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {   
                !loading && DataList.map((item) =><View style={{ flexDirection: 'row' }}>
                <Image source={woman} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                <Text style={styles.datascroll}> {moment(item.success).format('วันที่ D MMMM YYYY เวลา HH:mm:ss')}</Text>
                </View>)
            }
        </ScrollView>
        <View style={{ alignItems: 'center', }}>
            <TouchableOpacity style={styles.BottomGf} onPress ={()=> navigation.navigate('ChartScreen')}>
                <Text style={{ fontSize: 20, fontFamily: 'cursive', fontWeight: "bold" }}>กราฟข้อมูล</Text>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Image source={Lovepik} style={{ alignItems: 'center', width: 250, height: 250, }} />
        </View>

    </SafeAreaView>
    )
    };
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
