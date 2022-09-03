import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../todoList/todo.module.css';
import headerImage from '../todoList/main_img.png';
const TodoList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    return(
      <div className={style.header}>
        <h1> TodoList Component</h1>
        <img src={headerImage}></img>
      </>
    )
}

export default TodoList;