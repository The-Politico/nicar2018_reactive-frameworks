// Hello Component Lifecycle. (Hello D3.)
import React from 'react';
import { render } from 'react-dom';
import DataPoint from './component';
import data from './data.json';

const root = document.getElementById('part5-app');

const sortData = (data) => data.sort((a, b) => b.value - a.value);

const datums = data.map(d => (
  <DataPoint datum={d} />
));

const someJSX = (
  <div>
    {datums}
  </div>
);

render(someJSX, root);
