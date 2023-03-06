import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {Header} from '../header/Header';
import React, {useEffect, useState} from 'react';
import type {Fish, Fishes} from './Types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FishListScrollView} from './components/FishListScrollView';
import {FetchFishes} from './functions/FetchFishes';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const Encyclopedie = () => {
  const [fishList, setFishList] = useState<Array<Fish>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    FetchFishes(setFishList);
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
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
        <FishListScrollView fishList={fishList} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}>
        <Header
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
        <ActivityIndicator />
      </View>
    );
  }
};

export const styles = StyleSheet.create({
  animalCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalID: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  animalImage: {
    width: '100%',
    height: '100%',
  },
  animalImageContainer: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
