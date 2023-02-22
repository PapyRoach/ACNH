import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {FishViewProps} from '../Types';
import Typography from '../../../theme/typography/Typography';
import {styles} from '../Encyclopedie';

export function FishListScrollView({fishList}: FishViewProps) {
  return (
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
