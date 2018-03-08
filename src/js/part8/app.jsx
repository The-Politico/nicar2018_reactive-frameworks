// PART 8: Hello Stores
import React from 'react';
import { render } from 'react-dom';
import Map from './components/map';
import Select from './components/select';
import { states } from './data/states.json';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      selected: 'Texas',
    };
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Map selected={this.state.selected} />
          </div>
          <div className='col'>
            <Select
              states={states}
              selected={this.state.selected}
              update={(d) => this.setState({selected: d})}
            />
          </div>
        </div>
      </div>
    );
  }
};

render(<App />, document.getElementById('part8-app'));
