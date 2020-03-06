import React from 'react';
import { ScrollView, StyleSheet, View,Text, Dimensions, TextInput  } from 'react-native';
import {Button} from 'react-native-paper';

let width = Dimensions.get('window').width
export default class LinksScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
         <View >
          <Text style={styles.change}>Change Password</Text>
          <View style={{alignSelf:'center', paddingTop:50}}>
          <TextInput 
                style={styles.textInput} 
                placeholder="Old Password" 
                underlineColorAndroid={'transparent'}/>
          <TextInput 
                style={styles.textInput} 
                placeholder="New Password"
                underlineColorAndroid={'transparent'}/>
          <TextInput 
                style={styles.textInput} 
                placeholder="Confirm Password"
                underlineColorAndroid={'transparent'}/>
          </View>
          <Button onPress={()=> this.props.navigation.navigate('Home')}
                style={
                    {backgroundColor:"rgba(240, 240, 50,1)", 
                    width:width/3, 
                    alignSelf:'center'}
                    }>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>SAVE</Text>
                </Button>
        </View>
      </ScrollView>
    )
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  change:{
    fontSize:25, 
    color: '#3E454D', 
    paddingTop: 8, 
    paddingLeft: 20, 
    fontWeight:'bold'
  },
  textInput:{
      marginBottom:10,
      width:(width * 4)/4.5, 
      backgroundColor:'#dedede',
      borderRadius:8,
      paddingLeft:10,
  }
});
