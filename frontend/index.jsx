import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Home></Home>, rootEl);
});
