import React from 'react';
import buceesURL from './../images/bucees.png';
import wawaURL from './../images/wawa.png';
import _ from 'lodash';

class Results extends React.Component {
  render () {
    const store = this.props.store;
    const state = store.selected;
    const stateResults = store.results[state];

    const resultPairs = _.toPairs(stateResults);
    resultPairs.sort((a, b) => a[1] < b[1]);

    const results = resultPairs.map(d => (
      <div className='row'>
        <div className='result col'>
          <div>
            <img
              src={d[0] === 'bucees' ? buceesURL : wawaURL}
            />
          </div>
        </div>
        <div className='result col' >
          <div className='progress'>
            <div
              className='progress-bar'
              role='progressbar'
              style={{width: `${d[1]}%`}}
              aria-valuenow={d[1]}
              aria-valuemin='0'
              aria-valuemax='100'
            >
              {d[1]}%
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div id='results-component'>
        <div className='container'>
          {results}
        </div>

      </div>
    );
  }
}

export default Results;
