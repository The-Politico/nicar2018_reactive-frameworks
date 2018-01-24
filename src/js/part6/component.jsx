// PART 3: Hello Props

import { h, Component } from 'preact';

class ScaryComponent extends Component {
  constructor (props) {
    super();
    this.state.selectedOption = props.options[0];
  }

  render (props, state) {
    // Create our options
    const radioOptions = props.options.map(option => (
      <div>
        <label>
          <input type='radio' name='radio-options' />
          {option}
        </label>
      </div>
    ));

    return (
      <div>
        <h3>{this.state.selectedOption}, oh my!</h3>
        {radioOptions}
      </div>
    );
  }
}

export default ScaryComponent;
