import {Text} from 'react-native';
import {typos, typosType} from './Variants';
import React from 'react';

interface TypographyProps {
  variant: typosType;
  text: string;
}

export default function Typography({variant, text}: TypographyProps) {
  return <Text style={typos[variant]}>{text}</Text>;
}
