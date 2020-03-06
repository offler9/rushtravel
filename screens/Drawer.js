import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Platform } from 'react-native'
import {IconButton} from 'react-native-paper'

export default class Drawer extends React.Component{
    render(){
        return(
            <View>
                <View style={style.backContext}>
                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=> this.props.navigation.navigate("Home")}>
                    <Text style={style.backButton}> Back </Text>
                    <IconButton style={{alignSelf:'center'}} icon={Platform.OS === "android" ? "arrow-right" : "ios-arrow-forward"}/>
                    </TouchableOpacity>
                </View>
                
                <View style={style.drawerTextCont}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("About")}>
                    <Text style={style.drawerButton}> About </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.drawerTextCont}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Editprofile")}>
                    <Text style={style.drawerButton}> Edit Profile </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.drawerTextCont}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Changepassword")}>
                    <Text style={style.drawerButton}> Change Password </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.logoutTextCont}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
                    <Text style={style.logoutButton}> Logout </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    drawerTextCont: {
        alignItems: "flex-end",
        paddingVertical: 3,
        flexDirection: "row",
        marginBottom:10,
        paddingLeft: 30
      },
      drawerText: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 16
      },
      drawerButton: {
        color: "rgba(0,0,0,0.8)",
        fontSize: 16,
        fontWeight: "500"
      },
      backButton: {
        color: "rgba(0,0,0,0.8)",
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20
      },
      logoutButton: {
        color: "rgba(0,0,0,0.8)",
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 20
      }
})