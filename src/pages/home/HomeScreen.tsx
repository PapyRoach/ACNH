import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {Header} from '../header/Header';
import {HomeButton} from './components/HomeButton';
import {HOME_SCREEN_BUTTONS_DATASET} from './components/HomeButtonsData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const NUMBER_OF_COLUMNS = 3;
export const MAX_GRID_WIDTH = 500;
export const GRID_WIDTH_RATIO = 0.9;

const HEADER_HOME_TEXT = 'Companion';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      <Header
        headerImagePath={HEADER_IMAGE_PATH}
        headerText={HEADER_HOME_TEXT}
      />
      <View style={styles.listWrapper}>
        <FlatList
          horizontal={false}
          numColumns={NUMBER_OF_COLUMNS}
          data={HOME_SCREEN_BUTTONS_DATASET}
          renderItem={button => (
            <HomeButton
              label={button.item.label}
              imagePath={button.item.imagePath}
              navigationTarget={button.item.navigationTarget}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    alignSelf: 'center',
    marginTop: 40,
    width: `${GRID_WIDTH_RATIO * 100}%`,
    maxWidth: MAX_GRID_WIDTH,
  },
});
