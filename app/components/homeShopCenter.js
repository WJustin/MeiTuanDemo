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
    ScrollView,
} from 'react-native';
import HomeSectionHeaderView from './homeSectionHeaderView';
import HomeShopCenterData from '../LocalData/HomeShopCenterData.json';

class ShopItem extends React.Component {
    render() {
        return (
            <View style={{margin:10, width: 100, height:100, alignItems:'center'}}>
                <Image source={{uri:this.props.icon}} style={{backgroundColor:'red', width:90, height:60}}/>
                <Text style={{marginTop:10}}>{this.props.title}</Text>
            </View>
        );
    }
}

ShopItem.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string,
};

ShopItem.defaultProps = {
    icon:'',
    title:'',
};

export default class HomeShopCenter extends Component {
    render() {
        return (
            <View style={styles.container}>
               <HomeSectionHeaderView/>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {this._renderItems()}
                </ScrollView>
            </View>

        );
    }

    _renderItems() {
        let itemsArray = [];
        for(let i = 0; i < HomeShopCenterData.count; i++) {
            itemsArray.push(
               <ShopItem key={i}
                         icon={HomeShopCenterData.data[i].img}
                         title={HomeShopCenterData.data[i].name}/>
            )
        }
        return itemsArray;
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        height: 150,
        marginTop: 10,
    },
});

