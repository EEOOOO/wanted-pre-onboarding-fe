import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({todoItems, updateTodoItem,deleteTodoItem}) => {
    /*if (todoItems[0] === undefined){
        localStorage.clear()
        return <>
            <h2>We're so sorry. Cannot get user's data.</h2>
            <h2>Please Login Again. </h2>
        </>
    }*/
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