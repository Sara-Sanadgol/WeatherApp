import { combineReducers } from 'redux';

import ExampleReducer from './example_reducer';

const rootReducer = combineReducers({
  allExamples: ExampleReducer
});

export default rootReducer;
