import {StyleSheet, View} from 'react-native';
import React from 'react';

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH = 120;

export const HomeButton = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: BUTTON_TOTAL_HEIGHT,
    width: BUTTON_TOTAL_WIDTH,
  },
});
