import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './Components/Common/Header.js';
import reducers from './reducers';
import LibraryList from './Components/LibraryList'
const app = () => {
  return(
    <Provider store = {createStore(reducers)}>
    <View style = {{flex : 1}}>
    <Header headerText = 'Tech Stack'/>
    <LibraryList/>
    </View>
    </Provider>
  );
};

export default app;
