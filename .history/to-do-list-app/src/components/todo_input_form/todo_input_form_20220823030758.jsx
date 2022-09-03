import React from 'react';
import style from '../todo_input_form/todo_input_form.module.css';

function TodoInputForm(props) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <button>New</button>
        </form>
    );
}

export default TodoInputForm;