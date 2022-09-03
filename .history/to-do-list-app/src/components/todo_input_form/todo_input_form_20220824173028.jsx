import React, { useState } from 'react';
import style from '../todo_input_form/todo_input_form.module.css';

function TodoInputForm({updateTodoList}) {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(event.target[0].value !== ''){
            updateTodoList(newTodo, false);
        }
        event.target[0].value = '';
    }
    const handleKeyUp = (event) => {
        console.log(event.keyCode)
    }
    return (
        <form onSubmit={handleSubmit} className={style.inputForm} onKeyUp={handleKeyUp}>
            <input type="text" className={style.inputField} onChange={handleChange} placeholder="Type your new Assignment"></input>
            <button className={style.sumbitButton}>New</button>
        </form>
    );
}

export default TodoInputForm;