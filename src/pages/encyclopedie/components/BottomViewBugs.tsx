import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';

interface BottomViewBugsProps {
  months: string;
  hours: string;
  location: string;
}
export const BottomViewBugs = ({
  months,
  hours,
  location,
}: BottomViewBugsProps) => {
  return (
    <>
      <SimpleTypography text={'Disponibilité : ' + months} />
      <SimpleTypography text={'Horaire : ' + hours} />
      <SimpleTypography text={'Localisation : ' + location} />
    </>
  );
};
