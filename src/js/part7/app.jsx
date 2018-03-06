// Hello Component Lifecycle. (Hello D3.)
import React from 'react';
import { render } from 'react-dom';
import ChartWrapper from './chartwrapper';

const root = document.getElementById('part7-app');

const someJSX = (
  <ChartWrapper />
);

render(someJSX, root);
