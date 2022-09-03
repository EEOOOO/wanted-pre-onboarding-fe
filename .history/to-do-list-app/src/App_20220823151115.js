import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';
import { useState } from 'react';
import { createTodo, getTodos} from './api';
function App() {
  const [userToken, setUserToken] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const updateTodoItems = (newTodoItem) => {
    if (todoItems.length === 0){
      createTodo(newTodoItem, userToken);
    } else {

    }
    console.log(getTodos(userToken));
    setTodoItems([
      ...todoItems,
      newItem
    ]);
  }
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login setUserToken={setUserToken}/>}></Route>
      <Route path="todo" element={<Todo userToken={userToken} todoItems={todoItems} setTodoItems={setTodoItems}/>}></Route>
    </Routes>
  </div>
}

export default App;
