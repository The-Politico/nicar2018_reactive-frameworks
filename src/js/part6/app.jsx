// PART 6: Hello State

import { h, render } from 'preact';
import Component from './component';
import data from './data.json';

const root = document.getElementById('part6-app');

const someJSX = (
  <div>
    <ul>
      <Component options={data} />
    </ul>
  </div>
);

render(someJSX, root, root.lastChild);
