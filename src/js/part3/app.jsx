// PART 3: Hello Props

import { h, render } from 'preact';
import LIComponent from './component';

const root = document.getElementById('part3-app');

const someJSX = (
  <div>
    <ul>
      <LIComponent text='Some text passed to a component as a property!' />
    </ul>
  </div>
);

render(someJSX, root, root.lastChild);
