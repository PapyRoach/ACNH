import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const HEADER_HEIGHT = 60;
const HEADER_BOTTOM_MARGIN = 20;
const HEADER_FONT_SIZE = 30;

export const Header = ({
  headerText,
  headerImagePath,
}: {
  headerText: string;
  headerImagePath: any;
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={headerImagePath}>
        <Text style={styles.text}>{headerText}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    marginBottom: HEADER_BOTTOM_MARGIN,
  },
  text: {
    fontSize: HEADER_FONT_SIZE,
    fontWeight: 'bold',
  },
  background: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
