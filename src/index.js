import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let TitleData = [
  { name: 'Web-разработка' },
  { name: 'Разработка приложений' },
  { name: 'UI/UX Design' }
]

let SkillsData = [
  { text: 'WEB-разработка — процедура создания WEB-приложения или WEB-сайта. Основными этапами этого процесса являются такие мероприятия, как WEB-дизайн, вёрстка страниц сайта, WEB-программирование на стороне сервера и клиента, а также работы по конфигурированию WEB-сервера.' },
  { text: 'это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны. Эти приложения могут быть предустановлены на устройство в процессе производства, загружены пользователем с помощью различных платформ для распространения ПО или являться веб-приложениями, которые обрабатываются на стороне клиента (JavaScript) или сервера.' },
  { text: ' UX-дизайн отвечает за функции, адаптивность продукта и то, какие эмоции он вызывает у пользователей. Чем понятнее интерфейс, тем легче пользователю получить результат и совершить целевое действие.' }
]

let DialogsData = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Мария' },
  { id: 3, name: 'Игорь' },
  { id: 4, name: 'Сергей' },
  { id: 5, name: 'Борис' },
  { id: 6, name: 'Валерий' },
  { id: 7, name: 'Ирина' }
]

let MessagesData = [
  { id: 1, text: 'Привет, как дела?' },
  { id: 2, text: 'Пошли сегодня в кино' },
  { id: 3, text: 'Сколько стоит турпутевка?' },
  { id: 4, text: 'Я посетил 14 стран' },
  { id: 5, text: 'Привет, пойдем сегодня гулять?' },
  { id: 6, text: 'Хорошего дня и настроения' },
  { id: 7, text: 'Приходите сегодня в гости' }
]

ReactDOM.render(
  <React.StrictMode>
    <App TitleData={TitleData} SkillsData={SkillsData} DialogsData={DialogsData} MessagesData={MessagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
