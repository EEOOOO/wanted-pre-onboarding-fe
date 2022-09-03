import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';
import { useState } from 'react';

function App() {
  const [userToken, setUserToken] = useState('');
  const [todoItems, setTodoItems] = useState([
    {
      "id": 1,
      "todo": "과제하기",
      "isCompleted": false,
      "userId": 1,
    },
    {
      "id": 2,
      "todo": "영화보기",
      "isCompleted": true,
      "userId": 2,
    }
  ]);
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login setUserToken={setUserToken}/>}></Route>
      <Route path="todo" element={<Todo userToken={userToken} todoItems={todoItems} setTodoItems={setTodoItems}/>}></Route>
    </Routes>
  </div>
}

export default App;
