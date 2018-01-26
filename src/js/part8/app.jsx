// PART 8: Hello Stores
import React from 'react';
import { render } from 'react-dom';
import Map from './components/map';
import Select from './components/select';
import { store, actions } from './store';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { states } from './data/states.json';

// Now that our store is setup, we can update it by "dispatching"
// an action with our data!
store.dispatch(actions.addStates(states));
store.dispatch(actions.changeSelected(states[0].name));

// --------------------------------------
// CONNECTING OUR STORE TO OUR COMPONENTS
// --------------------------------------
// Connecting the store to our react components
// takes 4 steps.

// 1) MAPSTATETOPROPS
// ------------------
const mapStateToProps = store => ({ store: store });

// 2) BIND ACTIONS TO A CONTAINER
// ------------------
const Container = (props) => {
  // Bind the actions to props.dispatch (ie, store.dispatch) so
  // we can call them directly, instead of needing to call
  // store.dipatch everytime.
  const boundActions = bindActionCreators(actions, props.dispatch);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Map store={props.store} actions={boundActions} />
        </div>
        <div className='col'>
          <Select store={props.store} actions={boundActions} />
        </div>
      </div>
    </div>
  );
};

// 3) CONNECT CONTAINER TO THE STORE PROPS
// ------------------
const App = connect(mapStateToProps)(Container);

// 4) "PROVIDE" THE STORE AUTOMAGICALLY TO THE APP
// ------------------
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('part8-app'));
