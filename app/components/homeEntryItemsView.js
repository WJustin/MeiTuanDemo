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
    ListView,
    Image,
} from 'react-native';

import Dimensions from 'Dimensions';
const screenWidth =  Dimensions.get('window').width;
const itemsPerRow = 5;
const cellWidth = screenWidth / itemsPerRow;

export default class HomeEntryItemsView extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows(this.props.dataArray)
        }
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this._renderRows}
                      scrollEnabled={false}
                      contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',width:screenWidth}}/>
        );
    }

    _renderRows(rowData) {
        return (
            <View style={styles.cell}>
                <Image source={{uri:rowData.image}} style={{width:52, height:52}}/>
                <Text>{rowData.title}</Text>
            </View>
        )
    }
}

HomeEntryItemsView.propTypes = {
    dataArray: React.PropTypes.array,
};

HomeEntryItemsView.defaultProps = {
    dataArray : [],
};

const styles = StyleSheet.create({
    container: {
        height:200,
    },

    dots:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },

    cell:{
        justifyContent:'center',
        alignItems:'center',
        height:70,
        width:cellWidth,
        marginTop:10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
