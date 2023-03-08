import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
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
import {LoadingPage} from '../common/components/LoadingPage';

const HEADER_ENCYCLOPEDIA_TEXT = 'Encyclopédie';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');

const FISH_ICON_IMAGE_PATH = require('./img/fish.png');
const BUG_ICON_IMAGE_PATH = require('./img/bug.png');

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
        <Tab.Navigator
          backBehavior="none"
          screenOptions={tabNavigatorScreenOptions}>
          <Tab.Screen
            name="Fish"
            component={FishListScrollView}
            initialParams={{fishList}}
            options={iconOptions(FISH_ICON_IMAGE_PATH)}
          />
          <Tab.Screen
            name="Bug"
            component={BugListScrollView}
            initialParams={{bugList}}
            options={iconOptions(BUG_ICON_IMAGE_PATH)}
          />
        </Tab.Navigator>
      </View>
    );
  } else {
    return (
      <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_ENCYCLOPEDIA_TEXT} />
    );
  }
};

const tabNavigatorScreenOptions = {
  tabBarAndroidRipple: {
    radius: 0,
  },
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#FAEDCD',
    shadowColor: 'transparent',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#78430A',
  },
  tabBarIndicatorStyle: {
    height: '100%',
    backgroundColor: '#D4A373',
  },
};

const iconOptions = (icon: ImageSourcePropType) => {
  return {
    tabBarIcon: ({focused}: {focused: Boolean}) => {
      if (focused) {
        return (
          <Image
            source={icon}
            style={{
              flex: 1,
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        );
      } else {
        return (
          <Image
            source={icon}
            style={{
              flex: 1,
              width: '100%',
              resizeMode: 'contain',
              opacity: 0.2,
            }}
          />
        );
      }
    },
  };
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
});
