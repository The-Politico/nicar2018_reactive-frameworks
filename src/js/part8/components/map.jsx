import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import geodata from './../data/us.json';

const featureCollection = topojson.feature(geodata, {
  type: 'GeometryCollection',
  geometries: geodata.objects['-'].geometries,
});

class Map extends React.Component {
  componentDidMount () {
    const svg = d3.select('#map-box').append('svg')
      .attr('width', 400)
      .attr('height', 300);

    const paths = svg.selectAll('path')
      .data(featureCollection.features);

    paths.enter().append('path')
      .attr('d', d3.geoPath().projection(
        d3.geoAlbersUsa().scale(1)
          .fitSize([400, 300], featureCollection)
      ))
      .attr('stroke', '#666')
      .attr('fill', d => {
        if (d.properties.name === this.props.store.selected) {
          return 'orange';
        }
        return '#ccc';
      });
  }

  componentDidUpdate () {
    const paths = d3.select('#map-box').selectAll('path');

    paths
      .attr('stroke', '#666')
      .attr('fill', d => {
        if (d.properties.name === this.props.store.selected) {
          return 'orange';
        }
        return '#ccc';
      });
  }

  render () {
    return (
      <div id='map-box' />
    );
  }
}

export default Map;
