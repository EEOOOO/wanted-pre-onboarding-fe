import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';
import { useState } from 'react';
import { createTodo, getTodos, updateTodos} from './api';
function App() {
  const [userToken, setUserToken] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const updateTodoList = async (todoItem, init) => {
    createTodo(todoItem, userToken);
    const updatedList = await getTodos(userToken);
    setTodoItems([updatedList]);
  }
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login userToken={userToken} setUserToken={setUserToken}/>}></Route>
      <Route path="todo" element={
        <Todo 
        userToken={userToken} 
        todoItems={todoItems}
        updateTodoList={updateTodoList}/>}></Route>      
    </Routes>
  </div>
}

export default App;
