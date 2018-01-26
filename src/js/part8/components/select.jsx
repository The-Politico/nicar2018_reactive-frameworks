import React from 'react';
import Select from 'react-select';

class SelectBox extends React.Component {
  render () {
    const store = this.props.store;
    return (<Select
      name='form-field-name'
      value={store.selected}
      onChange={(opt) => this.props.actions.changeSelected(opt.value)}
      options={store.states.map(d => ({
        value: d.name,
        label: d.name,
      }))}
      clearable={false}
    />);
  }
}

export default SelectBox;
