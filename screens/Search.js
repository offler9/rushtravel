import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends Component{
    render() {
        return(
            <View style={style.container}>
            <View style={{position:'relative', flex: 1}} >
              <TextInput placeholder="Select Pickup Location" style={style.search} />
              <View style={{paddingLeft: 55, paddingRight:25}}>
              <Text style={{fontWeight:'bold'}}>Alfamart</Text>
              <Text  style={{borderBottomColor: 'black', borderBottomWidth: 1}}>Alfamart full address</Text>
              <Text style={{fontWeight:'bold'}}>Alfamart</Text>
              <Text style={{borderBottomColor: 'black', borderBottomWidth: 1}}>Alfamart full address</Text>
              <Text style={{fontWeight:'bold'}}>Alfamart</Text>
              <Text style={{borderBottomColor: 'black', borderBottomWidth: 1}}>Alfamart full address</Text>
            </View>
            </View>
            </View>
        )
    }
}

let style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        paddingTop: 25
    },
    search:{
        borderWidth:1, 
        borderColor: '#E8E8E8', 
        borderRadius: 10, 
        height: 40, 
        fontSize: 13, 
        paddingLeft: 45, 
        paddingRight: 25, 
        backgroundColor:'white', 
        marginRight: 18, 
        marginLeft: 18,
    }
})