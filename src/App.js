import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">

      </header>
      <nav className="nav">
        <div><a href="#">Обо мне</a></div>
        <div><a href="#">Мой опыт</a></div>
        <div><a href="#">Мои навыки</a></div>
        <div><a href="#">Мои работы</a></div>
        <div><a href="#">Прайс-лист</a></div>
      </nav>
      <div className="main">
        <div className="main_photo"></div>
        <div className="main_title">Обо мне</div>
        <div className="main_name">Максим</div>
        <div className="main_description">Lorem</div>
        <div className="main_post">Posts</div>
      </div>
    </div >
  );
}

export default App;
