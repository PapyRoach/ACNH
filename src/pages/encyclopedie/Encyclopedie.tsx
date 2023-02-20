import {View} from 'react-native';
import {Header} from '../header/Header';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigation/Types';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';

type Props = NativeStackScreenProps<RootStackParamList, 'Encyclopedie'>;

export const Encyclopedie = ({navigation}: Props) => {
  return (
    <View>
      <Header
        headerImagePath={require('../header/img/header_background.jpg')}
        headerText={HEADER_ENCYCLOPEDIA_TEXT}
      />
    </View>
  );
};
