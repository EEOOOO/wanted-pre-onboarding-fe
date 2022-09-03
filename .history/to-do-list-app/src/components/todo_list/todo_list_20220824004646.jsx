import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({todoItems}) => {
    if (todoItems.length === 0){
        return
    }
    console.log(todoItems[0])
    return (
        <ul className={style.list}>
            {todoItems[0].map(item => (
            <TodoItem 
            key={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
            />
            )
            )}
        </ul>
    )
};
export default TodoList;