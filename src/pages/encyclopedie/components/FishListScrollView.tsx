import {View, Image, FlatList} from 'react-native';
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
    <FlatList
      horizontal={false}
      data={fishList}
      renderItem={fish => (
        <View style={styles.animalCard}>
          <View style={styles.animalID}>
            <SimpleTypography text={'Name : ' + fish.item.name['name-USen']} />
            <SimpleTypography
              text={'Rarity : ' + fish.item.availability.rarity}
            />
            <SimpleTypography text={'Price : ' + fish.item.price + ' bells'} />
          </View>
          <View style={styles.animalImageContainer}>
            <Image
              style={styles.animalImage}
              source={{
                uri: fish.item.icon_uri,
              }}
            />
          </View>
        </View>
      )}
    />
  );
}
