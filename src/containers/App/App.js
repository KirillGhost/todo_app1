// Core
import React from 'react';
import { Provider } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import Router from '../Router/Router';
// Store
import { store } from '../../init/store';
// Styles
import './App.css';
import 'typeface-roboto';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
      <ReactNotification />
    </Provider>
  );
}

export default App;
