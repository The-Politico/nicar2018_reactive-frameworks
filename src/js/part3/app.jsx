// PART 3: Hello Props
import React from 'react';
import { render } from 'react-dom';
import ListItem from './component';

const root = document.getElementById('part3-app');

const someJSX = (
  <div>
    <ul>
      <ListItem text='Some text passed to a component as a property!' />
    </ul>
  </div>
);

render(someJSX, root);
