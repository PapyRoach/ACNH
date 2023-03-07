import {View, Image, FlatList} from 'react-native';
import React from 'react';
import type {Bug} from '../Types';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {styles, TabStackParamList} from '../Encyclopedie';
import {RouteProp} from '@react-navigation/native';

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
        <View style={styles.animalCard}>
          <View style={styles.animalID}>
            <SimpleTypography text={'Name : ' + bug.item.name['name-USen']} />
            <SimpleTypography
              text={'Rarity : ' + bug.item.availability.rarity}
            />
            <SimpleTypography text={'Price : ' + bug.item.price + ' bells'} />
          </View>
          <View style={styles.animalImageContainer}>
            <Image
              style={styles.animalImage}
              source={{
                uri: bug.item.icon_uri,
              }}
            />
          </View>
        </View>
      )}
    />
  );
}
