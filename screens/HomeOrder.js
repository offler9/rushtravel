import React from 'react'
import { View,
    Text,
    ScrollView, 
    StyleSheet, 
    TextInput, 
    Image, 
    Platform, 
    Dimensions, 
    KeyboardAvoidingView, 
    TouchableOpacity
} from 'react-native'
import { DrawerActions } from "react-navigation-drawer"
import {Button, Appbar} from 'react-native-paper'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
export default class Home extends React.Component{


static navigationOptions = ({ navigation }) => {
    let params = navigation.state.params
    return {
      headerStyle: {
        backgroundColor: "#f3f44e",
        shadowColor:'transparent', 
        elevation:0,
      },
      headerLeft: (
        <Appbar.Action
          icon="menu"
          color="rgba(0,0,0,0.8)"
          onPress={() => params.showMore()}
        ></Appbar.Action>
      )
    }
  }
  UNSAFE_componentWillMount(){
    this.props.navigation.setParams({ showMore: this._onMore.bind(this) })
  }
  _onMore = () => {
    //Props to open/close the drawer
    this.props.navigation.dispatch(DrawerActions.openDrawer())
  }

    render(){
        return (
            <ScrollView style={style.container}>
                <Image source={require('../assets/images/background.png')}
                  resizeMode="stretch"
                 style={{width:width,height:(height/2-30), marginBottom:10}}  
                 />
                 <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                    <Text style={{fontSize:40, color: '#3E454D' , paddingTop: 8, paddingLeft: 20, fontWeight:'bold'}}>Hi!</Text>
                    <Text style={{fontSize:26, color: '#3E454D' , paddingLeft: 20, fontWeight:'bold'}}>Sufyanto</Text>
                 </View>
                 <View style={{paddingLeft: 30, paddingRight: 30}}>
                 <Text style={{fontWeight:'bold', fontSize: 25, color: '#3E454D'}}>Alfamart ····· School</Text>
                
                 <Text style={{color:'#3E454D', fontSize: 17}}>20 February 2020- 16:30</Text>
                 <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                 <Button style={{backgroundColor:"#f3f44e",width:100, 
                              marginBottom:10, padding:0.5}}>
                              <Text style={{color:'rgba(0,0,0,0.9)', fontSize: 12}}>Waiting</Text></Button>
                  </View>
                  </View>
                  <View style={{paddingLeft: 30, paddingRight: 30}}>
                 <Text style={{fontWeight:'bold', fontSize: 25, color: '#3E454D'}}>Mall ····· Campus</Text>
                
                 <Text style={{color:'#3E454D', fontSize: 17}}>18 February 2020- 16:30</Text>
                 <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                 <Button style={{backgroundColor:"#66BE65",width:100, 
                    marginBottom:10, padding:0.5}}>
                    <Text style={{color:'rgba(0,0,0,0.9)', fontSize: 12,borderBottomColor: 'grey', borderBottomWidth: 1}}>Confirm</Text></Button>
                  </View>
                  </View>
           </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    
     
})