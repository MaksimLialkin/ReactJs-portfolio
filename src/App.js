import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper_content">
          <Route path='/main' render={() => <Main TitleData={props.TitleData} SkillsData={props.SkillsData} />} />
          <Route path='/dialogs' render={() => <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
