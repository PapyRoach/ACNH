import {View} from 'react-native';
import {Header} from '../header/Header';
import React, {useEffect, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigation/Types';
import type {Fish} from './Types';
import {ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';

type Props = NativeStackScreenProps<RootStackParamList, 'Encyclopedie'>;
type Fishes = Record<string, Fish>;

export const Encyclopedie = ({navigation}: Props) => {
  const [fishList, setFishList] = useState<Array<Fish>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetch('https://acnhapi.com/v1/fish', {
      method: 'GET',
    })
      .then((response: Response) => response.json())
      .then((responseJSON: Fishes) => {
        setFishList(Object.values(responseJSON));
        setIsLoaded(true);
      })
      .catch((error: Error) => console.error('No response : ' + error.message));
  }, []);

  if (isLoaded) {
    return (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}>
        <Header
          headerImagePath={require('../header/img/header_background.jpg')}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
      </View>
    );
  } else {
  return (
    <View>
      <Header
        headerImagePath={require('../header/img/header_background.jpg')}
        headerText={HEADER_ENCYCLOPEDIA_TEXT}
      />
        <ActivityIndicator />
    </View>
  );
  }
};
