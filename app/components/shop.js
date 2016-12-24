
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
    WebView,
    RefreshControl,
    ScrollView,
} from 'react-native';
import * as ServerApi from '../constants/serverApi'
import Dimensions from 'Dimensions'
const {width, height} = Dimensions.get('window')

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing : false,
            webUri: ""
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderNavigationBar()}
                <ScrollView refreshControl={<RefreshControl refreshing={this.state.isRefreshing}
                                                            onRefresh={()=>this._onRefresh()}
                                                            title="Loading..."/>}
                            style={{flex:1}}>
                    <WebView source={this.state.webUri ? {uri:this.state.webUri} : {}}
                             style={{height:height}}
                             onLoadEnd={()=>this._onWebLoadEnd()}
                             />
                </ScrollView>
            </View>
        );
    }

    _renderNavigationBar(){
        return(
            <View style={styles.navigationBar}>
                <Text style={styles.navigationBarTitle}>商家</Text>
            </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing:true, webUri:ServerApi.WEB_URL_SHOP})
    }

    _onWebLoadEnd() {
        this.setState({isRefreshing:false})
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
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
})

