import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../pages/home/HomeScreen';
import {Encyclopedie} from '../pages/encyclopedie/Encyclopedie';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Encyclopedie" component={Encyclopedie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
