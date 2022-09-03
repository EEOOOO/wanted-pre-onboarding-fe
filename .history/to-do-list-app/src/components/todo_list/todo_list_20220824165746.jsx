import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({updateTodoList, todoItems, updateTodoItem, deleteTodoItem}) => {
    
    console.log(todoItems[0], todoItems)
    return (
        <ul className={style.list}>
            {todoItems[0] && 
            todoItems.map(item => (
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