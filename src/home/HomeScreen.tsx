import {View} from 'react-native';
import React from 'react';
import {Header} from './components/Header';
import {HomeButton} from './components/HomeButton';
import {HOME_SCREEN_BUTTONS_DATASET} from './components/HomeButtonsData';

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
