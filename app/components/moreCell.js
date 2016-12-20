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
} from 'react-native';

export default class MoreCell extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:this.props.value,
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.props.title}
          </Text>
          {this._renderRightItem()}
      </View>
    );
  }

  _onPress() {
    this.props.navigator.pop();
  }

  _renderRightItem() {
    if (this.props.hasSwitch) {
      return <Switch  value={this.state.value} onValueChange={()=>this._onValueChange()} style={{marginRight:10}}/>
    } else {
     return <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:14,marginRight:10}}/>
    }
  }

  _onValueChange() {
    this.setState({value:!this.state.value})
  }
}

MoreCell.propTypes = {
  title: React.PropTypes.string,
  hasSwitch: React.PropTypes.bool,
  value:React.PropTypes.bool,
};

MoreCell.defaultProps = {
  title : '扫一扫',
  hasSwitch: false,
  value:false,
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
  },
  welcome: {
    fontSize: 16,
    marginLeft: 10,
  },
});
