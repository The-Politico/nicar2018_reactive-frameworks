import React from 'react';
import Select from 'react-select';

const SelectBox = (props) => {
  const options = props.states.map(d => ({
    value: d.name,
    label: d.name,
  }));

  return (<Select
    name='form-field-name'
    value={props.selected}
    onChange={(opt) => props.update(opt.value)}
    options={options}
    clearable={false}
  />);
};

export default SelectBox;
