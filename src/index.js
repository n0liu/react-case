import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App.js';
import data from './stores/counterStore';

ReactDOM.render(
  <Provider data={data}><App /></Provider>,
  document.getElementById('root')
);