import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './Common/Header.js';
import reducers from './reducers';
const app = () => {
  return(
    <Provider store = {createStore(reducers)}>
    <View>
    <Header headerText = 'Tech Stack'/>
    </View>
    </Provider>
  );
};

export default app;
