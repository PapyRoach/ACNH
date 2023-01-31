import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH = 120;
const BUTTON_ICON_HEIGHT_AND_WIDTH = 100;

export const HomeButton = ({
  clickHandler,
  imgPath,
}: {
  clickHandler: Function;
  imgPath: any;
}) => {
  <View style={styles.container}>
    <TouchableOpacity style={styles.touchable} onPress={() => clickHandler}>
      <Image style={styles.image} source={imgPath}></Image>
    </TouchableOpacity>
  </View>;
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
