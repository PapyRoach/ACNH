import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HEADER_HEIGHT = 60;
const HEADER_BOTTOM_MARGIN = 20;
const HEADER_FONT_SIZE = 30;

export const Header = (headerText: string) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    marginBottom: HEADER_BOTTOM_MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: HEADER_FONT_SIZE,
    fontWeight: 'bold',
  },
});
