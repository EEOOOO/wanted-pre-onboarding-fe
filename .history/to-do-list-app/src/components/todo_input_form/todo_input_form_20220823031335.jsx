import React, { useState } from 'react';
import style from '../todo_input_form/todo_input_form.module.css';

function TodoInputForm(props) {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event.target);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}></input>
            <button>New</button>
        </form>
    );
}

export default TodoInputForm;