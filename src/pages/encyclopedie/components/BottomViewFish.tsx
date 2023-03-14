import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';

interface BottomViewFishProps {
  months: string;
  hours: string;
  location: string;
  shadow: string;
}
export const BottomViewFish = ({
  months,
  hours,
  location,
  shadow,
}: BottomViewFishProps) => {
  return (
    <>
      <SimpleTypography text={'Disponibilité : ' + months} />
      <SimpleTypography text={'Horaire : ' + hours} />
      <SimpleTypography text={'Localisation : ' + location} />
      <SimpleTypography text={'Ombre : ' + shadow} />
    </>
  );
};
