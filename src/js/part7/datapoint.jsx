import React from 'react';
import * as d3 from 'd3';

const vizScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 100]);

class DataPoint extends React.Component {
  // We can fire some code AFTER react has rendered our div container
  // in the componentDidMount lifecycle method.
  componentDidMount () {
    const node = d3.select(`.viz-box.no${this.datum.value} svg`);

    const sideLength = vizScale(Math.sqrt(this.datum.value));

    node.append('rect')
      .attr('width', sideLength)
      .attr('height', sideLength)
      .attr('x', 0)
      .attr('y', 0);
  }

  componentDidUpdate () {
    const node = d3.select(`.viz-box.no${this.datum.value} svg`);

    const sideLength = vizScale(Math.sqrt(this.datum.value));

    node.select('rect')
      .attr('width', sideLength)
      .attr('height', sideLength)
      .attr('x', 0)
      .attr('y', 0);
  }

  render () {
    this.datum = this.props.datum;

    return (
      <div className='company-box'>
        <h6>{this.datum.name}</h6>
        <div
          className={`viz-box no${this.datum.value}`}
        >
          <svg />
        </div>
      </div>
    );
  }
}

export default DataPoint;
