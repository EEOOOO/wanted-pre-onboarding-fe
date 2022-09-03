import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './todo.module.css';
import headerImage from './main_img.png';
import TodoInputForm from '../todo_input_form/todo_input_form';
import TodoList from '../todo_list/todo_list';
const Todo = (props) => {
    const navigate = useNavigate();
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
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    const updateTodoItems = (newItem) => {
      const newTodo = {
        "id" : 3,
        "todo": newItem,
        "isCompleted":false,
        "userId": 1
      }
      setTodoItems([
        ...todoItems,
        newTodo
      ])
      console.log(todoItems)
    }
    return(
      <div className={style.todo}>
        <header className={style.header}>
        <h1> To do List </h1>
        <img src={headerImage} className={style.headerImage}></img>
        </header>
        <TodoInputForm updateTodoItems={updateTodoItems}/>
        <TodoList todoItems={todoItems} />
      </div>
    )
}

export default Todo;