import { createStore } from 'redux';
import _ from 'lodash';

// STATE
// -----
// This is the initial state of our store, which is... blank.
// We'll fill it in as we go!
const initialState = {
  states: [],
  selected: null,
  results: [],
};

// ACTIONS
// -------
// Actions are the way we can signal state changes from inside
// our app. Each is a function that returns a simple object
// with, in our case, just two properties:
//     1. A 'type' that is a string describing what action
//        to take.
//     2. The data used to change the state.
export const actions = {
  changeSelected: (selected) => ({
    type: 'CHANGE_SELECTED',
    selected: selected
  }),
  addStates: (states) => ({
    type: 'ADD_STATES',
    states: states,
  }),
  addResults: (results) => ({
    type: 'ADD_RESULTS',
    results: results,
  })
};

// REDUCER
// -------
// A reducer is responsible for receiving the message an action sends
// and then updating the state based on the message received. It *must*
// return a new object that represents the new state, which is why we
// use object assign.
const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED':
      return _.assign({}, currentState, { selected: action.selected });
    case 'ADD_STATES':
      return _.assign({}, currentState, { states: action.states });
  }
  // Reducers should always have a fall-through that just returns
  // the currentState if an action that doesn't match is sent through.
  return currentState;
};

// CREATE THE STORE
export const store = createStore(reducer);

// Let's add a function to our store that lets
// us see our state. We can subscribe to state
// changes and then log the current state.
store.subscribe(() => console.log(store.getState()));
