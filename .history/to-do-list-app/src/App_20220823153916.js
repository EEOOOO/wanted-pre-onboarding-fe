import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';
import { useState } from 'react';
import { createTodo, getTodos, updateTodos} from './api';
function App() {
  const [userToken, setUserToken] = useState('');
  const [todoItems, setTodoItems] = useState([]);
  const updateTodoItems = (newTodoItem) => {
    console.log(newTodoItem);
    if (todoItems.length === 0){
      createTodo(newTodoItem, userToken);
    } else {

    }
    console.log(userToken);
    getTodos(userToken);
    setTodoItems([
      ...todoItems,
      newTodoItem
    ]);
  }
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login userToken={userToken} setUserToken={setUserToken}/>}></Route>
      <Route path="todo" element={<Todo setUsertoken={setUserToken} userToken={userToken} todoItems={todoItems} updateTodoItems={updateTodoItems}/>}></Route>
    </Routes>
  </div>
}

export default App;
