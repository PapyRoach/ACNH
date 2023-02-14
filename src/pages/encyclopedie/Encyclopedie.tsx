import {View} from 'react-native';
import {Header} from '../header/Header';
import React from 'react';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';

export const Encyclopedie = () => {
  return (
    <View>
      <Header
        headerImagePath={require('../header/img/header_background.jpg')}
        headerText={HEADER_ENCYCLOPEDIA_TEXT}
      />
    </View>
  );
};
