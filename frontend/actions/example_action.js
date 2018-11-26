import * as ApiUtil from '../util/util';
export const RECEIVE_AN_EXAMPLE = 'RECEIVE_AN_EXAMPLE';
export const RECEIVE_EXAMPLE_ERRORS = 'RECEIVE_EXAMPLE_ERRORS';

export const receiveAnExample = (newExample) => {
  return {
    type: RECEIVE_AN_EXAMPLE,
    newExample,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_EXAMPLE_ERRORS,
    errors,
  };
};

export const createAnExample = () => (dispatch) => {
  return (
    ApiUtil.createAnExample().then(
      (newExample) => dispatch(receiveAnExample(newExample)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
