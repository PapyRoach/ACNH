import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  MAX_GRID_WIDTH,
  GRID_WIDTH_RATIO,
  NUMBER_OF_COLUMNS,
} from '../HomeScreen';
import {IconTypography} from '../../../theme/typography/Typography';
import {useNavigation} from '@react-navigation/native';
import type {ButtonData} from './HomeButtonsData';

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH =
  Dimensions.get('window').width > MAX_GRID_WIDTH
    ? (MAX_GRID_WIDTH * GRID_WIDTH_RATIO) / NUMBER_OF_COLUMNS
    : (GRID_WIDTH_RATIO * Dimensions.get('window').width) / NUMBER_OF_COLUMNS;
const BUTTON_ICON_HEIGHT_AND_WIDTH = 100;

export const HomeButton = ({
  navigationTarget,
  imagePath,
  label,
}: ButtonData) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate(navigationTarget)}>
        <Image style={styles.image} source={imagePath} />
      </TouchableOpacity>
      <IconTypography text={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: BUTTON_TOTAL_HEIGHT,
    width: BUTTON_TOTAL_WIDTH,
  },
  touchable: {
    height: BUTTON_ICON_HEIGHT_AND_WIDTH,
    width: BUTTON_ICON_HEIGHT_AND_WIDTH,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
