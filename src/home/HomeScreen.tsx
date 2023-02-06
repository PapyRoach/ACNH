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
        label="Appuis : "
        // clickHandler={() => {
        //   console.log('Appui !');
        // }}
        imgPath={require('./components/img/tracker.png')}></HomeButton>
      <HomeButton
        label="Appuis : "
        // clickHandler={() => {
        //   console.log('Appui !');
        // }}
        imgPath={require('./components/img/my_village.png')}></HomeButton>
      <HomeButton
        label="Appuis : "
        // clickHandler={() => {
        //   console.log('Appui !');
        // }}
        imgPath={require('./components/img/encyclo_betes.png')}></HomeButton>
    </View>
  );
};
