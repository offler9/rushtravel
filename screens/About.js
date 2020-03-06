import React from 'react';
import { ScrollView, StyleSheet, View,Text } from 'react-native';

export default class LinksScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.about}>About</Text>
          <Text style={{fontSize:18,justifyContent: 'center', alignSelf:'center'}}>ini adalah halaman yang di sediakan untuk menceritakan tentang perusahaan</Text>
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
  about:{
    fontSize:25, 
    color: '#3E454D', 
    paddingTop: 8, 
    paddingLeft: 20, 
    fontWeight:'bold'
  }
});
