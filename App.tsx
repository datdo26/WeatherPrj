import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import WeatherWithRedux from './src/screens/WeatherWithRedux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherWithRedux />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
