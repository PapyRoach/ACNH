import {View, StyleSheet, Alert} from 'react-native';
import {Header} from '../header/Header';
import React, {useEffect, useState} from 'react';
import {Fish, Fishes} from './Types';
import {ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FishListScrollView} from './components/FishListScrollView';
import {useNavigation} from '@react-navigation/native';
import type {NavigationProp} from '../../navigation/Types';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const Encyclopedie = () => {
  const [fishList, setFishList] = useState<Array<Fish>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp>();
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
      .catch((error: Error) => {
        console.error('No response : ' + error.message);
        Alert.alert('Error', 'Impossible to fetch data. Please try again.', [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Home');
            },
            style: 'cancel',
          },
        ]);
      });
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
  fishCard: {
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
  fishID: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  fishImage: {
    width: '100%',
    height: '100%',
  },
  fishImageContainer: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
