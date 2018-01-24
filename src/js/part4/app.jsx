// PART 4: Hello Components 2

import { h, render } from 'preact';
import ListItem from './component';
import data from './data.json';

const root = document.getElementById('part4-app');

const items = data.map(animal => (
  <ListItem text={animal} />
));

const someJSX = (
  <div>
    <ul>
      {items}
    </ul>
  </div>
);

render(someJSX, root, root.lastChild);
