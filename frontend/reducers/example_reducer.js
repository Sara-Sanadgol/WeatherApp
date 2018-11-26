import { RECEIVE_AN_EXAMPLE, RECEIVE_EXAMPLE_ERRORS } from '../actions/example_action';
import merge from 'lodash/merge';

const ExampleReducer = (state = {allExamples: {}, errors: {}}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_AN_EXAMPLE:
      newState.allExamples = action.newExample;
      return newState;
    case RECEIVE_EXAMPLE_ERRORS:
        return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};
export default ExampleReducer;
