import React from 'react';
import { ScrollView, StyleSheet, View,Text } from 'react-native';
import { Button } from 'react-native-paper';
import {IconButton} from 'react-native-paper'

export default class LinksScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <View>
        <Text style={{fontSize:35, color: '#3E454D' , paddingLeft: 20, fontWeight:'bold'}}>Status</Text>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
        <Text style={{fontWeight:'bold', fontSize: 25, color: '#3E454D'}}>Alfamart ····· School</Text>
        <IconButton style={{alignSelf:'center'}} icon={Platform.OS === "android" ? "close-circle" : "ios-close-circle"}/>
        <Text style={{color:'#3E454D', fontSize: 17}}>Pick of            : Alfamart full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Destination    : School full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Date & Time   : 20 February 2020 at 16:30</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Seat                 : 25 seat</Text>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <Button style={{backgroundColor:"#f3f44e",width:100, 
                    marginBottom:10, padding:0.5}}>
                    <Text style={{color:'rgba(0,0,0,0.9)', fontSize: 12}}>Waiting</Text></Button>
                    <Text style={{fontStyle:'italic'}}>Waiting confirmation from bus driver</Text>
        </View>
        </View>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
        <Text style={{fontWeight:'bold', fontSize: 25, color: '#3E454D'}}>Mall ····· Campus</Text>
      
        <Text style={{color:'#3E454D', fontSize: 17}}>Pick of            : Mall full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Destination    : Campus full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Date & Time   : 18 February 2020 at 16:30</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Seat                 : 25 seat</Text>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <Button style={{backgroundColor:"#66BE65",width:100, 
                    marginBottom:10, padding:0.5}}>
                    <Text style={{color:'rgba(0,0,0,0.9)', fontSize: 12,borderBottomColor: 'grey', borderBottomWidth: 1}}>Confirm</Text></Button>
                    <Text style={{paddingRight:100,paddingLeft: 10,fontStyle:'italic'}}>The bus driver already confirm your booking</Text>
        </View>
        </View>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
        <Text style={{fontWeight:'bold', fontSize: 25, color: '#3E454D'}}>Indomaret ····· City</Text>
      
        <Text style={{color:'#3E454D', fontSize: 17}}>Pick of            : Indomaret full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Destination    : City full address</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Date & Time   : 10 February 2020 at 16:30</Text>
        <Text  style={{color:'#3E454D', fontSize: 17}}>Seat                 : 25 seat</Text>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <Button style={{backgroundColor:"#3E454D",width:100, 
                    marginBottom:10, padding:0.5}}>
                    <Text style={{color:'white', fontSize: 10}}>Delivered</Text></Button>
                    <Text style={{paddingRight:110, fontStyle:'italic'}}>Travel already done</Text>
        </View>
        </View>
        </View>
      </ScrollView>
    )
  }
}

LinksScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "white",
    shadowColor:'transparent', 
    elevation:0,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
