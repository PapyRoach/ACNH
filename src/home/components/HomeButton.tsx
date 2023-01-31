import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BUTTON_TOTAL_HEIGHT = 160;
const BUTTON_TOTAL_WIDTH = 120;

export const HomeButton = () => {
  <View style={styles.container}>
    <TouchableOpacity></TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: BUTTON_TOTAL_HEIGHT,
    width: BUTTON_TOTAL_WIDTH,
  },
});
