import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Header} from '../header/Header';
import React, {useEffect, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigation/Types';
import type {Fish} from './Types';
import Typography from '../../theme/typography/Typography';
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
        <ScrollView>
          {fishList.map(fish => (
            <View style={styles.fishCard}>
              <View style={styles.fishID}>
                <Typography
                  variant="simple-text"
                  text={'Name : ' + fish.name['name-USen']}
                />
                <Typography
                  variant="simple-text"
                  text={'Rarity : ' + fish.availability.rarity}
                />
                <Typography
                  variant="simple-text"
                  text={'Price : ' + fish.price + ' bells'}
                />
              </View>
              <View style={styles.fishImageContainer}>
                <Image style={styles.fishImage} source={{uri: fish.icon_uri}} />
              </View>
            </View>
          ))}
        </ScrollView>
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

const styles = StyleSheet.create({
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
