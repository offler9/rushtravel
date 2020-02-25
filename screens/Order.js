import React from 'react'
import { View, Text,StyleSheet } from 'react-native'


export default class Order extends React.Component{

    render(){
        return(
            <View style={style.container}>
                <Text>Ini Order</Text>
            </View>
        )
    }
}

let style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'
    }
})