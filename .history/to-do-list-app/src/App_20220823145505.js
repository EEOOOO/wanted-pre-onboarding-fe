import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';
import { useState } from 'react';

function App() {
  const [userToken, setUserToken] = useState('');
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login setUserToken={setUserToken}/>}></Route>
      <Route path="todo" element={<Todo userEmail={userEmail}/>}></Route>
    </Routes>
  </div>
}

export default App;
