import React from 'react';
import style from '../todo_item/todo_item.module.css';

const TodoItem = ({id, todo, isCompleted, userId}) => {
    return (
        <li className={style.listItem} key={id}>{`${todo}, ${isCompleted}, ${userId}`}</li>
    );
};

export default TodoItem;