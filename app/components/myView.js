/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
    paddingVertical:10,
  },
  image:{
    width:30,
    height:30,
  },
  welcome: {
    fontSize: 16,
  },
});
