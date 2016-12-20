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
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MoreCell from './moreCell';
import Dimension from 'Dimensions';
const {width,height} = Dimension.get('window');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this._renderNavigationBar()}
        <ScrollView>
          <View style={{marginTop:10}}>
            <MoreCell title='扫一扫'/>
          </View>
          <View style={{marginTop:10}}>
            <MoreCell title='省流量模式' hasSwitch={true} value={true}/>
            <MoreCell title='消息提醒' />
            <MoreCell title='邀请好友' />
            <MoreCell title='清空缓存' />
          </View>
          <View style={{marginTop:10}}>
            <MoreCell title='意见反馈'/>
            <MoreCell title='问卷调查' />
            <MoreCell title='支付帮助' />
            <MoreCell title='网络诊断' />
            <MoreCell title='关于码团' />
            <MoreCell title='我要应聘' />
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderNavigationBar(){
    return(
      <View style={styles.navigationBar}>
       <Text style={styles.navigationBarTitle}>更多</Text>
       <Image source={{uri:'icon_mine_setting'}} style={styles.navigationBarRightImage}/>
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
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'orange',
    height:64,
  },
  navigationBarTitle:{
    color:'white',
    fontSize:18,
    marginTop:10,
  },
  navigationBarRightImage:{
    position:'absolute',
    top: 20,
    right:15,
    width:30,
    height:30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
