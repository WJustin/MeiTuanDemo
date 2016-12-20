import React, { Component } from 'react';
import {Provider} from 'react-redux'
import configureStore from './store/store'
import MainContainer from './containers/main'

const store = configureStore();

class Root extends React.Component {
      render(){
          return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
          )
      }
}

export default Root;
