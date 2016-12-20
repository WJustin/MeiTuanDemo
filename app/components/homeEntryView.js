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
    ScrollView,
} from 'react-native';

import Dimensions from 'Dimensions';
const screenWidth =  Dimensions.get('window').width;
import TopMenu from '../LocalData/TopMenu.json';
import HomeEntryItemsView from './homeEntryItemsView';

export default class HomeEntryView extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage:0,
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true}
                      pagingEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      onMomentumScrollEnd ={(e)=>this._onScrollAnimationEnd(e)}>
            {this._renderItems()}
          </ScrollView>
          <View style={styles.dots}>
            {this._renderDots()}
          </View>
        </View>

    );
  }

  _renderItems(){
    let itemsArray = [];
    for (let i = 0; i < TopMenu.data.length; i++) {
      itemsArray.push(
          <HomeEntryItemsView key={i} dataArray={TopMenu.data[i]}/>
      )
    }
    return itemsArray;
  }

  _renderDots(){
    let dotsArray = [];
    for (let i = 0; i < 2; i++) {
      dotsArray.push(
          <Text key={i} style={{color:this.state.currentPage == i ? 'red':'gray', fontSize:20}}>&bull;</Text>
      )
    }
    return dotsArray;
  }

  _onScrollAnimationEnd(e){
    this.setState({
      currentPage: Math.floor(e.nativeEvent.contentOffset.x / screenWidth)
    })
  }
}
const styles = StyleSheet.create({
  container: {
    height:190,
    backgroundColor:'white'
  },

  dots:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
