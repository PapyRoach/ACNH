import {View} from 'react-native';
import React from 'react';
import {Header} from './components/Header';

export const HomeScreen = () => {
  return (
    <View>
      <Header
        headerImagePath={require('./components/img/headerBackground.jpg')}
        headerText="Companion"
      />
    </View>
  );
};
