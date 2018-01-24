import createStore from 'unistore';

// This is the initial state of our store, which is... blank.
// We'll fill it in as we go!
export const store = createStore({
  states: [],
  selected: null,
});

// We also need a function that will map our store's state to some properties.
// This just makes explicit the relationship between our data and some props
// when we connect our store to a Component.
export const mapStateToProps = ({ states, selected }) => ({ states, selected });
