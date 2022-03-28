import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VigmoRouter from './VigmoRouter';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter hashType='hashbang'>
    <VigmoRouter />
  </HashRouter>,
  document.getElementById('root')
);
