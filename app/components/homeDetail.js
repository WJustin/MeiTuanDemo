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
  TouchableOpacity,
} from 'react-native';

export default class HomeDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this._onPress()}>
          <Text style={styles.welcome}>
            商品详情页
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPress() {
    this.props.navigator.pop();
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
