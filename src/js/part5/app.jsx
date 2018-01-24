// Hello Component Lifecycle. (Hello D3.)

import { h, render } from 'preact';
import DataPoint from './component';
import data from './data.json';

const root = document.getElementById('part5-app');

const datums = data.map(d => (
  <DataPoint datum={d} />
));

const someJSX = (
  <div>
    {datums}
  </div>
);

render(someJSX, root, root.lastChild);
