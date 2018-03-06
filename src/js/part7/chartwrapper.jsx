import React from 'react';
import DataPoint from './datapoint';
import data from './data.json';
import otherData from './data2.json';

class ChartWrapper extends React.Component {
  constructor (props) {
    super();
    this.state = {
      data: data,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick () {
    if (this.state.data === data) {
      this.setState({ data: otherData });
    } else {
      this.setState({ data: data });
    }
  }

  render () {
    const datums = this.state.data.map(d => (
      <DataPoint datum={d} key={d.name} />
    ));

    return (
      <div className='chart'>
        {datums}
        <button onClick={this.onButtonClick}>Switch data</button>
      </div>
    );
  }
}

export default ChartWrapper;
