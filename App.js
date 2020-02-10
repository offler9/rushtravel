import React,{} from 'react'
import {StyleSheet, View, Image, Dimensions,Text } from 'react-native'
import AppNavigator from './navigation/AppNavigator'


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading: true,
      intro:false
    }
  }

  render() {
  return (
        <View style={styles.container}>
           <AppNavigator />
        </View>
      )
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  image:{
    width:width/2,
    height:height/2
  },
  text:{
    fontSize:18,
    color:'grey',
    textAlign:'center',
    paddingVertical:30,
  },
  title:{
    fontSize:25,
    color:'white',
    textAlign:'center',
    marginBottom:16,
    fontWeight:"700"
  }
})
