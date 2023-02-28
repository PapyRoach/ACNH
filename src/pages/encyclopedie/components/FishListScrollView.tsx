import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {FishViewProps} from '../Types';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {styles} from '../Encyclopedie';

export function FishListScrollView({fishList}: FishViewProps) {
  return (
    <ScrollView>
      {fishList.map(fish => (
        <View style={styles.fishCard}>
          <View style={styles.fishID}>
            <SimpleTypography text={'Name : ' + fish.name['name-USen']} />
            <SimpleTypography text={'Rarity : ' + fish.availability.rarity} />
            <SimpleTypography text={'Price : ' + fish.price + ' bells'} />
          </View>
          <View style={styles.fishImageContainer}>
            <Image
              style={styles.fishImage}
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
