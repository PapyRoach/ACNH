import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {
  MAX_GRID_WIDTH,
  GRID_WIDTH_RATIO,
  NUMBER_OF_COLUMNS,
} from '../HomeScreen';
import {IconTypography} from '../../../theme/typography/Typography';

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH =
  Dimensions.get('window').width > MAX_GRID_WIDTH
    ? (MAX_GRID_WIDTH * GRID_WIDTH_RATIO) / NUMBER_OF_COLUMNS
    : (GRID_WIDTH_RATIO * Dimensions.get('window').width) / NUMBER_OF_COLUMNS;
const BUTTON_ICON_HEIGHT_AND_WIDTH = 100;

export interface ButtonData {
  navigationTarget: string;
  imgPath: ImageSourcePropType;
  label: string;
  navigation?: any;
}

export const HomeButton = ({
  navigationTarget,
  imgPath,
  label,
  navigation,
}: ButtonData) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate(navigationTarget)}>
        <Image style={styles.image} source={imgPath} />
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
