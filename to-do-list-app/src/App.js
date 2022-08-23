import style from './app.module.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login';
import Todo from './components/todo/todo';

function App() {
  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="todo" element={<Todo/>}></Route>
    </Routes>
  </div>
}

export default App;
