import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import TodoList from './components/todoList/todo_list';

function App() {
  return <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="todo" element={<TodoList/>}></Route>
    </Routes>
  </div>
}

export default App;
