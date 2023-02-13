import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Typography from '../../theme/typography/Typography';

const HEADER_HEIGHT = 60;
const HEADER_BOTTOM_MARGIN = 40;

interface HeaderProps {
  headerText: string;
  headerImagePath: any;
}

export const Header = ({headerText, headerImagePath}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={headerImagePath}>
        <Typography variant="header" text={headerText} />
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
  background: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
