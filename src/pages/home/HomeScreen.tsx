import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../header/Header';
import {HomeButton} from './components/HomeButton';
import {HOME_SCREEN_BUTTONS_DATASET} from './components/HomeButtonsData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useQuery} from 'react-query';
import {FetchBugs} from '../common/functions/FetchBugs';
import {FetchFishes} from '../common/functions/FetchFishes';
import {LoadingPage} from '../common/components/LoadingPage';

export const NUMBER_OF_COLUMNS = 3;
export const MAX_GRID_WIDTH = 500;
export const GRID_WIDTH_RATIO = 0.9;

const HEADER_HOME_TEXT = 'Companion';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const queryFish = useQuery('fishList', FetchFishes);
  const queryBugs = useQuery('bugList', FetchBugs);

  if (!queryFish.isLoading && !queryBugs.isLoading) {
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
          {HOME_SCREEN_BUTTONS_DATASET.map(button => (
            <HomeButton
              label={button.label}
              imagePath={button.imagePath}
              navigationTarget={button.navigationTarget}
            />
          ))}
        </View>
      </View>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_HOME_TEXT} />;
  }
};

const styles = StyleSheet.create({
  listWrapper: {
    alignSelf: 'center',
    marginTop: 40,
    width: `${GRID_WIDTH_RATIO * 100}%`,
    maxWidth: MAX_GRID_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
