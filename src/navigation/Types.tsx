import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Encyclopedie: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
