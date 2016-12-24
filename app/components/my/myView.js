/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class MyView extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image source={{uri:this.props.uri}} style={styles.image}/>
          <Text style={styles.welcome}>
            {this.props.title}
          </Text>
      </View>
    );
  }
}

MyView.propTypes = {
  title: React.PropTypes.string,
  uri: React.PropTypes.string,
};

MyView.defaultProps = {
  title : '钱包',
  uri: '',
};;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
    paddingVertical:10,
  },
  image:{
    width:25,
    height:25,
  },
  welcome: {
    fontSize: 14,
    marginTop:5,
  },
});
