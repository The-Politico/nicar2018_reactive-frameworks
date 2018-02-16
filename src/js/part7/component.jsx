// PART 7: Hello Bubbling
import React from 'react';

class ChildComponent extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedAnimal: props.options[0],
    };
  }

  render () {
    const radioOptions = this.props.options.map(option => (
      <div>
        <label>
          <input
            type='radio'
            name='radio-options'
            onClick={() => {
              this.setState({ selectedAnimal: option });
              this.props.changeAnimal(option);
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

export default ChildComponent;
