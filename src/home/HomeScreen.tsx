import {View, FlatList} from 'react-native';
import React from 'react';
import {Header} from './components/Header';
import {HomeButton} from './components/HomeButton';
import {HOME_SCREEN_BUTTONS_DATASET} from './components/HomeButtonsData';

export const NUMBER_OF_COLUMNS = 3;

export const HomeScreen = () => {
  return (
    <View>
      <Header
        headerImagePath={require('./components/img/headerBackground.jpg')}
        headerText="Companion"
      />
      <View style={styles.listWrapper}>
        <FlatList
          horizontal={false}
          numColumns={NUMBER_OF_COLUMNS}
          data={HOME_SCREEN_BUTTONS_DATASET}
          renderItem={button => (
            <HomeButton
              label={button.item.label}
              imgPath={button.item.imgPath}
            />
          )}
        />
      </View>
    </View>
  );
};
