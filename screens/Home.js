import React from 'react'
import { View,Text,ScrollView, StyleSheet, TextInput, Image, Platform, Dimensions, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
export default class Login extends React.Component{

    render(){
        return (
            <ScrollView style={style.container}>
                <Image source={require('../assets/images/background.png')}
                  resizeMode="stretch"
                 style={{width:width,height:height/2, marginBottom:10}}  
                 />
                 <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                    <Text style={{fontSize:40, color: '#3E454D' , paddingTop: 8, paddingLeft: 20, fontWeight:'bold'}}>Hi!</Text>
                    <Text style={{fontSize:26, color: '#3E454D' , paddingLeft: 20, fontWeight:'bold'}}>Sufyanto</Text>
                 </View>
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/images/playlist.png')}/>
                    <Text style={{fontSize:15, color:'grey', paddingTop: 8}}>Opps! You have no order</Text>
                    <Text style={{fontSize:15, color:'grey'}}>Go and make one!</Text>
                </View>
           </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    
     
})