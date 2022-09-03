import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({todoItems}) => {
    console.log(todoItems)
    return (
        <ul className={style.list}>
            {todoItems.map(item => {
            console.log(item);
            
            )}
        </ul>
    )
};
export default TodoList;