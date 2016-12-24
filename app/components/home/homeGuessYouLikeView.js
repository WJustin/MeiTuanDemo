/**
 * Created by wangrongchao on 16/12/24.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from 'react-native';
import HomeSectionHeaderView from './homeSectionHeaderView'
import Dimensions from 'Dimensions';
const screenWidth =  Dimensions.get('window').width;
const itemsPerRow = 5;
const cellWidth = screenWidth / itemsPerRow;

export default class HomeGuessYouLikeView extends Component {
    render() {
        let ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1 !== r2});
        return (
            <View style={styles.container}>
                <HomeSectionHeaderView leftTitle='猜你喜欢' rightTitle=''/>
                <ListView dataSource={ds.cloneWithRows(this.props.dataArray)}
                          renderRow={this._renderRows}
                          enableEmptySections={true}/>
            </View>
        );
    }

    _renderRows(rowData) {
        return (
            <View style={styles.cell}>
                <Image source={{uri:rowData.imageUrl}} style={styles.image}/>
                <Text style={styles.text}>{rowData.title}</Text>
            </View>
        )
    }
}

HomeGuessYouLikeView.propTypes = {
    dataArray: React.PropTypes.array,
};

HomeGuessYouLikeView.defaultProps = {
    dataArray : [],
};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
    },

    cell:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems: 'center',
        height:60,
        padding:10,
        borderBottomWidth : 0.5,
        borderBottomColor : '#dddddd',
    },

    image: {
        width:40,
        height:40,
        backgroundColor:'#dddddd'
    },

    text: {
        fontSize: 17,
        marginLeft:10,
    },
});
