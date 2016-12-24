/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MyView from './myView'

export default class MyOrderCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyView title='待付款' uri='order1'/>
        <MyView title='待使用' uri='order2'/>
        <MyView title='待评价' uri='order3'/>
        <MyView title='退款'   uri='order4'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:64,
    backgroundColor:'white',
    flexDirection:'row',
  },
});
