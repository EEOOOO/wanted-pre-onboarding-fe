import React, { useState } from 'react';
import style from '../todo_input_form/todo_input_form.module.css';

function TodoInputForm({updateTodoList}) {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createTodo(newTodo, access_token);
        event.target[0].value = '';
    }
    return (
        <form onSubmit={handleSubmit} className={style.inputForm}>
            <input type="text" className={style.inputField} onChange={handleChange} placeholder="Type your new Assignment"></input>
            <button className={style.sumbitButton}>New</button>
        </form>
    );
}

export default TodoInputForm;