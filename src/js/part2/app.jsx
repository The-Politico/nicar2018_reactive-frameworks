// PART 2: Hello Components

import { h, render } from 'preact';

const root = document.getElementById('part2-app');

const Component = () => (
  <p>Hello, I'm a component!</p>
);

/**
⬆⬆⬆ FUTURE SYNTAX ALTERNATIVE. ⬇⬇⬇

function Component () {
  return (
    <p>hello, I'm a component!</p>
  );
}
**/

const someJSX = (
  <div>
    <h6>More JSX</h6>
    <Component />
  </div>
);

render(someJSX, root, root.lastChild);
