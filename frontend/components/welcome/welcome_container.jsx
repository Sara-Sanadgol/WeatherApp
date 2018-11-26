import { connect } from 'react-redux';
import React from 'react';
import { createAnExample } from '../../actions/example_action';
import Welcome from './welcome';

const mapStateToProps = (state) =>{
  return {
    allExamples: state.allExamples,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnExample: () => dispatch(createAnExample()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
