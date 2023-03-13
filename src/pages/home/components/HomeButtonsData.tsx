import {ImageSourcePropType} from 'react-native';

export interface ButtonData {
  navigationTarget: 'Home' | 'Encyclopedie' | 'Test';
  imagePath: ImageSourcePropType;
  label: string;
}

export const HOME_SCREEN_BUTTONS_DATASET: ButtonData[] = [
  {
    label: 'Encyclopédie',
    imagePath: require('../img/encyclo_betes.png'),
    navigationTarget: 'Encyclopedie',
  },
  {
    label: 'Test',
    imagePath: require('../img/bugs.png'),
    navigationTarget: 'Test',
  },
];
