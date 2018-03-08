import React from 'react';
import _ from 'lodash';
import buceesImg from './../images/bucees.png';
import wawaImg from './../images/wawa.png';
import {results} from './../data/results.json';

const Results = (props) => {
  const stateResults = results[props.selected];

  const resultPairs = _.toPairs(stateResults);
  resultPairs.sort((a, b) => a[1] < b[1]);

  const resultsContent = resultPairs.map(d => (
    <div className='row'>
      <div className='result col'>
        <div>
          <img
            src={d[0] === 'bucees' ? buceesImg : wawaImg}
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
        {resultsContent}
      </div>

    </div>
  );
};

export default Results;
