import React from 'react';
import style from '../todo_list/todo_list.module.css';
import TodoItem from '../todo_item/todo_item';
const TodoList = ({updateTodoList, todoItems, updateTodoItem, deleteTodoItem}) => {
    
    if (todoItems.length === 0){
        return <h2>There is no Todo Items..</h2>
    }
    console.log(todoItems[0], todoItems)
    return (
        <ul className={style.list}>
            {todoItems[0].length>1?
            todoItems[0].map(item => (
            <TodoItem 
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
            updateTodoItem={updateTodoItem}
            deleteTodoItem={deleteTodoItem}
            />
            )):
            todoItems[0]
            }
        </ul>
    )
};
export default TodoList;