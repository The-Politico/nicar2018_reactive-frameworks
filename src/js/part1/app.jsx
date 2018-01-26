// PART 1: Hello JSX
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('part1-app');

const someJSX = (
  <p>Hello, world! I did JSX!</p>
);

render(someJSX, root);
