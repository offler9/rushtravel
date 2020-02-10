import React from 'react';
import { ScrollView, StyleSheet, View,Text } from 'react-native';

export default class LinksScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Hello!</Text>
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
});
