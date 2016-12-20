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
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import HomeDetail from './homeDetail';
import HomeEntryView from './homeEntryView';
import HomeShopCenter from './homeShopCenter'
import Dimension from 'Dimensions';
const {width,height} = Dimension.get('window');

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this._renderNavigationBar()}
        <ScrollView >
          <HomeEntryView style={styles.entryView}/>
          <HomeShopCenter/>
        </ScrollView>
      </View>
    );
  }

  _renderNavigationBar(){
    return(
      <View style={styles.navigationBar}>
        <Text>
           上海
        </Text>
        <TextInput placeholder='  请输入商家' style={styles.navigationBarTextInput}/>
        <View style={styles.navigationBarRight}>
          <Image source={{uri:'icon_homepage_message'}} style={styles.navigationBarRightImage}/>
          <Image source={{uri:'icon_homepage_scan'}} style={styles.navigationBarRightImage}/>
        </View>
      </View>
    );
  }

  _pushToHomeDetail(){
    this.props.navigator.push({
      component : HomeDetail,
      title     : '商品详情页'
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e8e8e8',
  },
  navigationBar:{
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'orange',
    height:64,
    justifyContent:'space-around',
  },
  navigationBarTextInput:{
    width:width * 0.7,
    height:32,
    marginTop:20,
    backgroundColor:'white',
    borderRadius:16,
  },
  navigationBarRight:{
    flexDirection:'row',
  },
  navigationBarRightImage:{
    marginTop:5,
    width:30,
    height:30,
  },
  scrollView:{
    flex:1,
  },
  entryView:{
    height:200,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
