import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../todoList/todo.module.css';
import headerImage from '../todoList/main_img.png';
import TodoInputForm from '../todo_input_form/todo_input_form';
const TodoList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    return(
      <>
        <header className={style.header}>
        <h1> To do List </h1>
        <img src={headerImage} className={style.headerImage}></img>
        </header>
        <TodoInputForm className={style.inputform}/>
      </>
    )
}

export default TodoList;