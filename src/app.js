import React from 'react';
import ReactDOM from 'react-dom';

import Router from './scripts/router/Router.js';

const title = 'My Simple Express React Webpack Babel Setup Environment';
console.log('document.getElementById(app): ', document.getElementById('app'));
ReactDOM.render(
  Router,
  document.getElementById('app')
);