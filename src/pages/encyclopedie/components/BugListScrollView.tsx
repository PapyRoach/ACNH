import {View, ScrollView, Image} from 'react-native';
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
    <ScrollView>
      {bugList.map(bug => (
        <View style={styles.animalCard}>
          <View style={styles.animalID}>
            <SimpleTypography text={'Name : ' + bug.name['name-USen']} />
            <SimpleTypography text={'Rarity : ' + bug.availability.rarity} />
            <SimpleTypography text={'Price : ' + bug.price + ' bells'} />
          </View>
          <View style={styles.animalImageContainer}>
            <Image
              style={styles.animalImage}
              source={{
                uri: bug.icon_uri,
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
