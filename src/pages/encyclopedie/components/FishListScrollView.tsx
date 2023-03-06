import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import type {Fish} from '../Types';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {styles, TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';

type FishListRouteProp = RouteProp<TabStackParamList, 'Fish'>;

type FishProps = {
  route: FishListRouteProp;
};

export function FishListScrollView({route}: FishProps) {
  const fishList: Fish[] = route.params.fishList;
  return (
    <ScrollView>
      {fishList.map(fish => (
        <View style={styles.animalCard}>
          <View style={styles.animalID}>
            <SimpleTypography text={'Name : ' + fish.name['name-USen']} />
            <SimpleTypography text={'Rarity : ' + fish.availability.rarity} />
            <SimpleTypography text={'Price : ' + fish.price + ' bells'} />
          </View>
          <View style={styles.animalImageContainer}>
            <Image
              style={styles.animalImage}
              source={{
                uri: fish.icon_uri,
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
