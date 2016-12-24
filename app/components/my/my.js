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
  ScrollView,
  Image,
} from 'react-native';
import MyCell from './myCell';
import MyOrderCell from './myOrderCell';
import Dimension from 'Dimensions';
const {width,height} = Dimension.get('window');

export default class My extends Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          {this._renderNavigationBar()}
          <View style={{marginTop:10}}>
            <MyCell title='我的订单' leftUri='collect' description='查看全部订单'/>
            <MyOrderCell />
          </View>
          <View style={{marginTop:10}}>
            <MyCell title='钱包'    leftUri='draft' description='账户余额:¥10'/>
            <MyCell title='抵用券'   leftUri='like' />
          </View>
          <View style={{marginTop:10}}>
            <MyCell title='积分商城' leftUri='card' />
            <MyCell title='今日推荐' leftUri='new_friend' />
          </View>
          <View style={{marginTop:10}}>
            <MyCell title='我要合作' leftUri='pay' />
          </View>
        </ScrollView>
    );
  }

  _renderNavigationBar(){
    return(
      <View style={styles.navigationBar}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri:'see'}} style={styles.logo} />
          <Text style={{marginHorizontal:5, fontSize:16, color:'white'}}>小超电商</Text>
          <Image source={{uri:'avatar_vip'}} style={{width:7, height:13}} />
        </View>
        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:14}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navigationBar:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'orange',
    height:100,
    paddingHorizontal:15,
  },
  logo:{
    width:50,
    height:50,
    backgroundColor:'red',
    borderRadius:25,
  },
});
