import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Home store={store}></Home>, rootEl);
});
