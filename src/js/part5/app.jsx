// PART 5: Hello State
import React from 'react';
import { render } from 'react-dom';
import Component from './component';
import data from './data.json';

const root = document.getElementById('part5-app');

const someJSX = (
  <div>
    <ul>
      <Component options={data} />
    </ul>
  </div>
);

render(someJSX, root);
