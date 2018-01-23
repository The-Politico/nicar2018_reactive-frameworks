// PART 1: Hello JSX

import { h, render } from 'preact';

const root = document.getElementById('part1-app');

const someJSX = (
  <p>Hello, world! I did JSX!</p>
);

render(someJSX, root, root.lastChild);
