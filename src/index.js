import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './assets/styles/index.css';
import * as serviceWorker from './assets/serviceWorker/serviceWorker';

const element = document.getElementById('root');

ReactDOM.render(<App />, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();