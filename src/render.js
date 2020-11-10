import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addName } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addName={addName} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

