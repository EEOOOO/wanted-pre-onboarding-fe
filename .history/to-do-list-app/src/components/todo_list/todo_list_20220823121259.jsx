import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = (todoItems) => {
    return (
        <ul className={style.list}>
            {todoItems.map(item => <TodoItem />)}
        </ul>
    );
};

export default TodoList;