// PART 7: Hello Bubbling
import React from 'react';
import { render } from 'react-dom';
import ChildComponent from './component';
import data from './data.json';
import emoji from './emoji';

const root = document.getElementById('part7-app');

class ParentComponent extends React.Component {
  constructor (props) {
    super();
    this.state = {
      animal: 'Lions',
    };
  }

  render () {
    return (
      <div>

        <h1>{emoji[this.state.animal]}</h1>

        <ChildComponent
          options={data}
          changeAnimal={
            (animal) => this.setState({ animal: animal })
          }
        />

      </div>
    );
  }
}

render(<ParentComponent />, root);
