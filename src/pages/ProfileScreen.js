import React, {useEffect, Component,useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UseUser } from '../context/User';
import Axios  from 'axios';
import apiurl from "../config/api"
import moment from 'moment';
import 'moment/min/locales'

moment.locale('th')

const ProfileScreeen = ({navigation}) => {
    const users = UseUser()
    
    const [DataList, setDataList] = useState({"id":1,"userid":"aaaa","email":"aaaa","pass":"aaaa","fname":"dfasfas","lname":"asfasf","weight":50,"height":151.1,"age":15,"day":"2021-11-10T17:00:00.000Z"});
    //const [loading, setLoading] = useState(true);

    const show_profile = () => {
        //setLoading(true)
        Axios.get(apiurl + "/Profile/profile?userid="+ users.userid
        ).then((response) => {
            console.log(response);
            setDataList(response.data[0]);
         // setLoading(false)
        });
      };

      
      useEffect(() =>{
        show_profile()

    },[])

    
    return (
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                <View style={{ alignItems: 'center', marginTop: 60 }}>
                    <Text style={{ fontSize: 50, marginTop: 10, color: 'white', fontWeight: 'bold' }} >Profile</Text>
                </View>
                <View style={{
                    flex: 1,
                    borderRadius: 100 / 2,
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10
                }} >
                    <View style={{ flex: 1.5, backgroundColor: "#E1A2AD", borderRadius: 100 / 2 }}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../images/woman.png')} style={{ width: 80, height: 80, borderRadius: 80 / 2, position: 'absolute', }} />
                    </View>
                    <View style={{ flex: 2, margin: 30, justifyContent: 'flex-end', marginTop: 100 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}><Text>{users.userid}</Text></View>
                        <Text style={{ margin: 5 }}>อายุ...  {DataList.age}</Text>
                        <Text style={{ margin: 5 }}>Weight...  {DataList.weight}</Text>
                        <Text style={{ margin: 5 }}>Height...  {DataList.age}</Text>
                        <Text style={{ margin: 5 }}>ประจำเดือนอยู่ในช่วง....  {moment(DataList.day).format('D MMM YYYY')}</Text>
                    </View>
                    <View style={{ flex: 1.2, backgroundColor: "white", borderBottomLeftRadius: 100 / 2, borderBottomRightRadius: 100 / 2, }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }}onPress={() => navigation.navigate('EditProScreen')} >
                            <Image source={require('../images/setting.png')} style={{ width: 30, height: 30,marginRight:30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../images/womanraising.png')} style={{ width: 250, height: 250, }} />
                </View>
            </View >
        )
};

 export default ProfileScreeen;
    