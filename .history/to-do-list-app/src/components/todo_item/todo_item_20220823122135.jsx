import React from 'react';
import style from '../todo_item/todo_ite.module.css';

const TodoItem = ({todo, isCompleted, userId}) => {
    return (
        <li className={style.listItem}>{`${todo}, ${isCompleted}, ${userId}`}</li>
    );
};

export default TodoItem;