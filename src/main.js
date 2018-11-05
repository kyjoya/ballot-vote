import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data';
import App from './containers/App'

ReactDOM.render(
  <App ballotInformation={data} />,
  document.getElementById('app')
);
