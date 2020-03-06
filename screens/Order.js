import React from 'react'
import { View, Text,StyleSheet, TextInput, Picker,  Dimensions } from 'react-native'
import DatePicker from 'react-native-datepicker'
import {Button} from 'react-native-paper'
let width = Dimensions.get('window').width

export default class Order extends React.Component{
    constructor(){
        super();
        this.state={
            PickerValue:''
        }
    };

    setDate(newDate){
        this.setState({ due_date: newDate})
    }
  
    render(){
        let dt = new Date()
        let date = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate()
        return(
            <View style={style.container}>
                <Text style={{fontSize:30, color: '#3E454D' , paddingTop: 8, paddingLeft: 20, fontWeight:'bold'}}>Order</Text>
                <View style={{paddingTop: 10, paddingBottom: 10, alignItems: 'center'}} >
                <TextInput 
                style={style.textInput} 
                placeholder="Pickup Location" 
                underlineColorAndroid={'transparent'}/>

                <TextInput 
                style={style.textInput} 
                placeholder="Destination Location" 
                underlineColorAndroid={'transparent'}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Picker
                    selectedValue={this.state.PickerValue}
                    style={style.xInput}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({PickerValue: itemValue})
                    }>
                    <Picker.Item label="Seat" placeholder="Time" color='grey' />
                    <Picker.Item label="6 Seat" value="6seat" />
                    <Picker.Item label="13 Seat" value="13seat" />
                    <Picker.Item label="25 Seat" value="25seat" />
                    <Picker.Item label="45 Seat" value="45seat" />
                    </Picker>
                    <DatePicker
                        customStyles={{dateText:{color:'#3E454D'}}}
                        date={this.state.due_date}
                        mode="date"
                        format="YYYY-MM-DD"
                        placeholder="Date"
                        minDate={date}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(newDate)=>this.setState({due_date:newDate})}/>
                </View>
                <View>
                <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D'}}>Price</Text>
                </View>
                <View>
                <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D', fontWeight: 'bold', fontSize: 25}}>Rp.-</Text>
                </View>
                <View>
                <Text style={{paddingLeft:30, color: '#3E454D', fontWeight: 'bold', fontSize: 25}}>_______________________________</Text>  
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{paddingLeft:30, paddingTop: 10, color: '#3E454D', fontSize: 17}}>Payment Method</Text>
                    <Picker
                    selectedValue={this.state.PickerValue}
                    style={style.cashInput}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({PickerValue: itemValue})
                    }>
                    <Picker.Item label="Cash" value="cash" />
                    <Picker.Item label="Transfer" value="transfer" />
                    <Picker.Item label="Ovo" value="ovo" />
                    </Picker>
                    </View>
                    <View>
                <Button onPress={()=> this.props.navigation.navigate('HomeOrder')}
                style={
                    {backgroundColor:"grey", 
                    width: 350, 
                    alignSelf:'center', marginBottom:10, padding:7}
                    }>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Order</Text>
                </Button>
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
        paddingTop:10,
        width: 350,
    },
    xInput:{
        marginBottom:10, 
        backgroundColor:'#dedede',
        borderRadius:8,
        padding:10,
        width: 150,
    },
    cashInput:{
        marginBottom:3, 
        backgroundColor:'white',
        borderRadius:8,
        padding:10,
        width: 150,
        fontSize: 6
    }
})