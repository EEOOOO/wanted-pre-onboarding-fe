import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './todo.module.css';
import headerImage from './main_img.png';
import TodoInputForm from '../todo_input_form/todo_input_form';
const TodoList = (props) => {
    const navigate = useNavigate();
    const [todos, settodos] = useState([]);
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    return(
      <div className={style.todo}>
        <header className={style.header}>
        <h1> To do List </h1>
        <img src={headerImage} className={style.headerImage}></img>
        </header>
        <TodoInputForm />
      </div>
    )
}

export default TodoList;