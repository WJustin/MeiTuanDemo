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
} from 'react-native';

export default class HomeSectionHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.leftView}>
                   <Image source={{uri:this.props.leftIcon}} style={styles.leftIcon}/>
                   <Text>{this.props.leftTitle}</Text>
               </View>
                <View style={styles.rightView}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image source={{uri:this.props.rightIcon}} style={styles.rightIcon}/>
                </View>
            </View>

        );
    }
}

HomeSectionHeaderView.propTypes = {
    leftIcon   :  React.PropTypes.string,
    leftTitle  :  React.PropTypes.string,
    rightIcon  :  React.PropTypes.string,
    rightTitle :  React.PropTypes.string,
};

HomeSectionHeaderView.defaultProps = {
    leftIcon   : 'icon_homepage_shoppingCategory',
    leftTitle  : '购物中心',
    rightIcon  : 'icon_homepage_hotDealArrow',
    rightTitle : '全部',
};

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        backgroundColor:'white',
        height: 44,
        justifyContent:'space-between',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
    },

    leftView:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
    },

    leftIcon:{
        width:15,
        height:15,
        marginHorizontal:5,
    },

    rightView:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
    },

    rightIcon:{
        width:8,
        height:8,
        marginHorizontal:5,
    },
});
