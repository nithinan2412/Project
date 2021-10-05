import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class LogoForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Image style={{width:110,height:110}} source={require('../images/logoname.png')} />
                    <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:60,marginBottom:-10,fontFamily:'cursive',fontWeight: "bold",color:'#fff'}}>Bill</Text>
                    <Text style={{fontSize:50 ,marginTop:-10,fontFamily:'cursive',fontWeight: "bold",color:'#fff'}}>Slim ♡</Text>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});