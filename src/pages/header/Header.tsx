import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {HeaderTypography} from '../../theme/typography/Typography';

const HEADER_HEIGHT = 60;
const HEADER_BOTTOM_MARGIN = 5;

interface HeaderProps {
  headerText: string;
  headerImagePath: ImageSourcePropType;
}

export const Header = ({headerText, headerImagePath}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={headerImagePath}>
        <HeaderTypography text={headerText} />
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
