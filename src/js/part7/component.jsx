// PART 7: Hello Bubbling

import { h, Component } from 'preact';

class ScaryComponent extends Component {
  constructor (props) {
    super();
    this.state.selectedAnimal = props.options[0];
  }

  render (props, state) {
    const radioOptions = props.options.map(option => (
      <div>
        <label>
          <input
            type='radio'
            name='radio-options'
            onClick={() => {
              this.setState({ selectedAnimal: option });
              props.changeAnimal(option);
            }}
            checked={option === this.state.selectedAnimal}
          />
          {option}
        </label>
      </div>
    ));

    return (
      <div>
        {radioOptions}
      </div>
    );
  }
}

export default ScaryComponent;
