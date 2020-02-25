import React from 'react'
import { View,Text,ScrollView, StyleSheet, TextInput, Image, Platform, Dimensions, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username:"",
            password:""
        }
    }

    render(){
        return (
            <ScrollView style={style.container}>
                <Image source={require('../assets/images/logo.png')}
                  resizeMode="cover"
                 style={{width:width,height:height/2, marginBottom:15}}  
                 />
               
                <KeyboardAvoidingView style={style.container} enabled>
                <View style={{alignSelf:'center'}}>
                <TextInput 
                style={style.textInput}
                value={this.state.username} 
                placeholder="username"
                />
                <TextInput 
                style={style.textInput}
                value={this.state.password} 
                placeholder="password"
                />
                <View style={style.signupTextCont}>
                <Text style={style.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Signup")}>
                    <Text style={style.signupButton}> Sign Up</Text>
                </TouchableOpacity>
                </View>
                <Button onPress={()=> this.props.navigation.navigate('Home')}
                style={
                    {backgroundColor:"rgba(240, 240, 50,1)", 
                    width:width/3, 
                    alignSelf:'center'}
                    }>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>LOGIN</Text>
                </Button>
                </View>
                </KeyboardAvoidingView>
           </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fefefe',
    },
    textInput:{
        marginBottom:10,
        width:(width * 4)/4.5, 
        backgroundColor:'#dedede',
        borderRadius:8,
        paddingLeft:10
    },
    signupTextCont: {
        alignItems: "flex-end",
        justifyContent: "center",
        paddingVertical: 3,
        flexDirection: "row",
        marginBottom:10,
      },
      signupText: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16
      },
      signupButton: {
        color: "rgba(0,0,0,0.8)",
        fontSize: 16,
        fontWeight: "500"
      }
})