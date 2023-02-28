import React from 'react';
import {Text} from 'react-native';
import {typos, TypographyType} from './Variants';

interface TypographyProps {
  variant: TypographyType;
  text: string;
}

const Typography = ({variant, text}: TypographyProps) => {
  return <Text style={typos[variant]}>{text}</Text>;
};

export const IconTypography = ({text}: {text: string}) => {
  return <Typography variant="iconLabel" text={text} />;
};

export const HeaderTypography = ({text}: {text: string}) => {
  return <Typography variant="header" text={text} />;
};

export const SimpleTypography = ({text}: {text: string}) => {
  return <Typography variant="simple-text" text={text} />;
};
