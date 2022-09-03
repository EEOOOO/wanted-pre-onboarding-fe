import React, { useState } from 'react';
import style from '../todo_input_form/todo_input_form.module.css';

function TodoInputForm(props) {
    const [newTodo, setNewTodo] = useState('');
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(newTodo);
    }
    return (
        <form onSubmit={handleSubmit} className={style.inputForm}>
            <input type="text" onChange={handleChange} className={style.inputForm}></input>
            <button className={style.sumbitButton}>New</button>
        </form>
    );
}

export default TodoInputForm;