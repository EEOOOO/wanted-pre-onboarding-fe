import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({todoItems, updateTodoItem,deleteTodoItem}) => {
    if (todoItems.length === 0 || todoItems[0] === undefined){
        return <h1>Cannot get user's data. Please Login Again</h1>
    }
    console.log(todoItems[0])
    return (
        <ul className={style.list}>
            {todoItems[0].map(item => (
            <TodoItem 
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
            updateTodoItem={updateTodoItem}
            deleteTodoItem={deleteTodoItem}
            />
            )
            )}
        </ul>
    )
};
export default TodoList;