import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HEADER_HEIGHT = 60;
const HEADER_BOTTOM_MARGIN = 20;

export const Header = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    marginBottom: HEADER_BOTTOM_MARGIN,
  },
});
