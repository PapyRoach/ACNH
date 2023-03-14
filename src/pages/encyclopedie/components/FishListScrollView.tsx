import {FlatList} from 'react-native';
import React from 'react';
import type {Fish} from '../Types';
import {TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';
import {ExpandableView} from '../../common/components/ExpandableView';
import {BottomViewFish} from './BottomViewFish';
import {TopViewAnimal} from './TopViewAnimal';

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
        <ExpandableView
          topView={
            <TopViewAnimal
              name={fish.item.name['name-EUfr']}
              rarity={fish.item.availability.rarity}
              price={fish.item.price}
              icon={fish.item.icon_uri}
            />
          }
          expandView={
            <BottomViewFish
              months={fish.item.availability['month-northern']}
              hours={fish.item.availability.time}
              location={fish.item.availability.location}
              shadow={fish.item.shadow}
            />
          }
        />
      )}
    />
  );
}
