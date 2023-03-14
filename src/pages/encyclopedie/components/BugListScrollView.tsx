import {FlatList} from 'react-native';
import React from 'react';
import type {Bug} from '../Types';
import {TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';
import {ExpandableView} from '../../common/components/ExpandableView';
import {TopViewAnimal} from './TopViewAnimal';
import {BottomViewBugs} from './BottomViewBugs';

type BugListRouteProp = RouteProp<TabStackParamList, 'Bug'>;

type BugProps = {
  route: BugListRouteProp;
};

export function BugListScrollView({route}: BugProps) {
  const bugList: Bug[] = route.params.bugList;
  return (
    <FlatList
      horizontal={false}
      data={bugList}
      renderItem={bug => (
        <ExpandableView
          topView={
            <TopViewAnimal
              name={bug.item.name['name-EUfr']}
              rarity={bug.item.availability.rarity}
              price={bug.item.price}
              icon={bug.item.icon_uri}
            />
          }
          expandView={
            <BottomViewBugs
              months={bug.item.availability['month-northern']}
              hours={bug.item.availability.time}
              location={bug.item.availability.location}
            />
          }
        />
      )}
    />
  );
}
