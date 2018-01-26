// PART 4: Hello Component Classes
import React from 'react';
import { render } from 'react-dom';
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

render(someJSX, root);
