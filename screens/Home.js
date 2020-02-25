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