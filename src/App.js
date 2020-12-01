import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import DialogsContainer from './components/Dialogs/Dialogs.Container';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper_content">
          <Route path='/main' render={() => <Main
            store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
