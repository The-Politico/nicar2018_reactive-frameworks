import React from 'react';

class ScaryComponent extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedAnimal: props.options[0],
    };
  }

  render () {
    // Create our options
    const radioOptions = this.props.options.map(option => (
      <div key={option}>
        <label>
          <input
            type='radio'
            name='part5-radio-options'
          />
          {option}
        </label>
      </div>
    ));

    return (
      <div>
        <h3>{this.state.selectedAnimal}, oh my!</h3>
        {radioOptions}
      </div>
    );
  }
}

export default ScaryComponent;
