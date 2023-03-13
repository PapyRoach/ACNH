import React from 'react';
import {Header} from '../header/Header';

export const TestPage = () => {
  return (
    <Header
      headerText="Page de test"
      headerImagePath={require('../header/img/header_background.jpg')}
    />
  );
};
