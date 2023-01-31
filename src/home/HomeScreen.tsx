import {View} from 'react-native';
import React from 'react';
import {Header} from './components/Header';
import {HomeButton} from './components/HomeButton';

export const HomeScreen = () => {
  return (
    <View>
      <Header
        headerImagePath={require('./components/img/headerBackground.jpg')}
        headerText="Companion"
      />
      <HomeButton
        label="Tracker"
        clickHandler={() => {
          console.log('Appui !');
        }}
        imgPath={require('./src/home/components/img/tracker.png')}></HomeButton>
    </View>
  );
};
