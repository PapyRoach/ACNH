import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  MAX_GRID_WIDTH,
  GRID_WIDTH_RATIO,
  NUMBER_OF_COLUMNS,
} from '../HomeScreen';

const BUTTON_TOTAL_HEIGHT = 160;

const BUTTON_TOTAL_WIDTH =
  Dimensions.get('window').width > MAX_GRID_WIDTH
    ? (MAX_GRID_WIDTH * GRID_WIDTH_RATIO) / NUMBER_OF_COLUMNS
    : (GRID_WIDTH_RATIO * Dimensions.get('window').width) / NUMBER_OF_COLUMNS;

const BUTTON_ICON_HEIGHT_AND_WIDTH = 100;

interface ButtonProps {
  // clickHandler: () => void;
  imgPath: any;
  label: string;
}

export const HomeButton = ({
  // clickHandler,
  imgPath,
  label,
}: ButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setCount(count + 1)}>
        <Image style={styles.image} source={imgPath}></Image>
      </TouchableOpacity>
      <Text style={styles.label}>
        {label}
        {count}
      </Text>
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
  label: {
    textAlign: 'center',
  },
});
