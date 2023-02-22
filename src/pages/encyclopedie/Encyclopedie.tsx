import {View, StyleSheet} from 'react-native';
import {Header} from '../header/Header';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Types';
import {Fish, Fishes} from './Types';
import {ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FishListScrollView} from './components/FishListScrollView';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';

type Props = NativeStackScreenProps<RootStackParamList, 'Encyclopedie'>;

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
        <FishListScrollView fishList={fishList}></FishListScrollView>
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
          headerImagePath={require('../header/img/header_background.jpg')}
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
