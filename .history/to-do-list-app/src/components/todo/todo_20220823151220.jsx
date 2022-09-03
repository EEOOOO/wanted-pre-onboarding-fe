import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './todo.module.css';
import headerImage from './main_img.png';
import TodoInputForm from '../todo_input_form/todo_input_form';
import TodoList from '../todo_list/todo_list';
const Todo = ({userToken, todoItems, updateTodoItems}) => {
    const navigate = useNavigate();
    let lastTodoId = todoItems.length;
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
        <TodoInputForm updateTodoItems={updateTodoItems} lastTodoId={lastTodoId}/>
        <TodoList todoItems={todoItems} />
      </div>
    )
}

export default Todo;