import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Home from '../components/home/home'
import Shop from '../components/shop/shop'
import More from '../components/more/more'
import My from '../components/my/my'
import homeReducer from '../reducers/homeReducer'
import TabNavigator from 'react-native-tab-navigator'

class MainContainer extends React.Component {
    constructor(){
      super();
      this.state = {selectedTab:'home'};
    }
    render() {
        return (
          <TabNavigator>
            {this._renderTabItem("首页", 'home', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', '首页', Home)}
            {this._renderTabItem("商家", 'merchant', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', '店铺', Shop)}
            {this._renderTabItem("更多", 'misc', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', '更多', More)}
            {this._renderTabItem("我的", 'mine', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', '我的', My)}
          </TabNavigator>
        );
    }

    _renderTabItem(title, tabTitle, renderIcon, renderSelectedIcon, navigatorTitle, component){
        return (
      <TabNavigator.Item
        title={title}
        selected={this.state.selectedTab === tabTitle}
        onPress={() => this.setState({selectedTab: tabTitle })}
        renderIcon={() => <Image source={{uri:renderIcon}} style={styles.tabBarItem}/>}
        renderSelectedIcon={() => <Image source={{uri:renderSelectedIcon}} style={styles.tabBarItem}/>}>
        <Navigator
            initialRoute={{name:navigatorTitle, component:component}}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />
            }}
        />
      </TabNavigator.Item>
      );
   }
}

const mapStateToProps = (state) => {
    const { modify } = state;
    return {
        modify
    };
};

const mapDispatchToProps = (dispatch) => {
    const modifyActions = bindActionCreators(homeReducer, dispatch);
    return {
        modifyActions
    };
};

const styles = StyleSheet.create ({
  tabBarItem: {
    width  : 25,
    height : 25,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
