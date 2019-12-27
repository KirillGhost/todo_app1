// Core
import React from 'react';
import { Provider } from 'react-redux';
import Router from '../Router/Router';
// Store
import { store } from '../../init/store';
// Styles
import './App.css';
import 'typeface-roboto';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
    </Provider>
  );
}

export default App;
