import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './todo.module.css';
import headerImage from './main_img.png';
import TodoInputForm from '../todo_input_form/todo_input_form';
import TodoList from '../todo_list/todo_list';
const Todo = ({userToken, todoItems, updateTodoList, updateTodoItem, deleteTodoItem}) => {
  
    //useEffect(()=>{updateTodoList('', true)},[]);
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.key(userToken)){  
          console.log('not')        
          navigate("/")
        }
      }, []); 
      
    console.log('todo',userToken);
    console.log('todo',localStorage);
    return(
      <div className={style.todo}>
        <header className={style.header}>
        <h1> To do List </h1>
        <img src={headerImage} className={style.headerImage}></img>
        </header>
        <TodoInputForm 
        updateTodoList={updateTodoList}/>
        <TodoList 
        updateTodoList={updateTodoList}
        todoItems={todoItems} 
        updateTodoItem={updateTodoItem} 
        deleteTodoItem={deleteTodoItem}/>
      </div>
    )
}

export default Todo;