import React from 'react'
import { View, Text,StyleSheet, TextInput } from 'react-native'



export default class Order extends React.Component{

    render(){
        return(
            <View style={style.container}>
                <Text style={{fontSize:35, color: '#3E454D' , paddingTop: 8, paddingLeft: 20, fontWeight:'bold'}}>Order</Text>
                <TextInput 
                style={style.textInput} 
                placeholder="Pickup Location" 
                underlineColorAndroid={'transparent'}/>

                <TextInput 
                style={style.textInput} 
                placeholder="Destination Location" 
                underlineColorAndroid={'transparent'}/>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                </View>
            </View>
        )
    }
}
 Order.navigationOptions={
    headerStyle: {
        backgroundColor: "white",
        shadowColor:'transparent', 
        elevation:0,
      },
 }
let style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'
    },
    textInput:{
        marginBottom:10, 
        backgroundColor:'#dedede',
        borderRadius:8,
        paddingLeft:10
    }
})