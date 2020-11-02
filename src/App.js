import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
