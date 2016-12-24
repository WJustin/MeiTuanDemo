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

export default class MyCell extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:this.props.value,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Image source={{uri:this.props.leftUri}} style={{width:30,height:30,borderRadius:15}}/>
          <Text style={styles.welcome}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.welcome}>
            {this.props.description}
          </Text>
         <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:14}}/>
        </View>
      </View>
    );
  }
}

MyCell.propTypes = {
  title: React.PropTypes.string,
  leftUri: React.PropTypes.string,
  description:React.PropTypes.string,
};

MyCell.defaultProps = {
  title : '钱包',
  leftUri: '',
  description:'',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    height:44,
    borderBottomWidth : 0.5,
    borderBottomColor : '#dddddd',
    paddingHorizontal:15,
  },
  leftView:{
    flexDirection:'row',
    alignItems:'center',
  },
  rightView:{
    flexDirection:'row',
    alignItems:'center',
  },
  welcome: {
    fontSize: 16,
    marginRight: 5,
    marginLeft:5,
  },
});
