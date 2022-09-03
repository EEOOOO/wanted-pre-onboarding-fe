import React from 'react';
import style from '../todo_item/todo_item.module.css';

const TodoItem = ({id, todo, isCompleted, userId}) => {
    return (
        <li className={style.listItem} key={id}>
            <form>
                <input 
                type="checkbox" 
                className={style.checkbox} 
                value={id}>
                </input>
                <span>{todo}</span>
            </form>
        </li>
    );
};

export default TodoItem;