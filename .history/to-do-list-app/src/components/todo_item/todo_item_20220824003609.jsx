import React from 'react';
import style from '../todo_item/todo_item.module.css';

const TodoItem = ({id, todo, isCompleted, userId}) => {
    console.log(id, todo)
    return (
        <li className={style.listItem} key={id}>
            <form className={style.itemForm}>
                <input 
                type="checkbox" 
                className={style.checkbox} 
                value={id}>
                </input>
                <span>{todo}</span>
                <button className={style.modifyButton}>🛠</button>
            </form>
        </li>
    );
};

export default TodoItem;