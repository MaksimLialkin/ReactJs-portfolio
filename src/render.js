import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addName, updateNewPostText } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addName={addName} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

