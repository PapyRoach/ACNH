import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Header} from '../header/Header';
import {useEffect, useState} from 'react';
import type {Bug, Fish} from './Types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FishListScrollView} from './components/FishListScrollView';
import {BugListScrollView} from './components/BugListScrollView';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FetchFishes} from './functions/FetchFishes';
import {FetchBugs} from './functions/FetchBugs';
import {isNotEmpty} from './functions/isNotEmpty';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

const Tab = createMaterialTopTabNavigator<TabStackParamList>();

export type TabStackParamList = {
  Fish: {fishList: Fish[]};
  Bug: {bugList: Bug[]};
};

export const Encyclopedie = () => {
  const [fishList, setFishList] = useState<Array<Fish>>([]);
  const [bugList, setBugList] = useState<Array<Bug>>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    FetchFishes(setFishList);
    FetchBugs(setBugList);
  }, []);

  if (isNotEmpty(fishList) && isNotEmpty(bugList)) {
    return (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}>
        <Header
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
        <Tab.Navigator backBehavior="none">
          <Tab.Screen
            name="Fish"
            component={FishListScrollView}
            initialParams={{fishList}}
          />
          <Tab.Screen
            name="Bug"
            component={BugListScrollView}
            initialParams={{bugList}}
          />
        </Tab.Navigator>
      </View>
    );
  } else {
    return (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}>
        <Header
          headerImagePath={HEADER_IMAGE_PATH}
          headerText={HEADER_ENCYCLOPEDIA_TEXT}
        />
        <View style={styles.loaderPage}>
          <ActivityIndicator />
        </View>
      </View>
    );
  }
};

export const styles = StyleSheet.create({
  animalCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalID: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  animalImage: {
    width: '100%',
    height: '100%',
  },
  animalImageContainer: {
    width: 80,
    height: 80,
    margin: 5,
  },
  loaderPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
