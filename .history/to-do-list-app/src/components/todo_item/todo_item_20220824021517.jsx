import React from 'react';
import style from '../todo_item/todo_item.module.css';

const TodoItem = ({id, todo, isCompleted}) => {
    console.log(id, todo)
    const handleCheck = (event) => {
        if(event.target.checked){
            isCompleted = true;
        }
    };
    return (
        <li className={style.listItem} key={id}>
            <form className={style.itemForm}>
                <input 
                type="checkbox" 
                className={style.checkbox} 
                value={id}
                onChange={handleCheck}>
                </input>
                {isCompleted?
                <del>{todo}</del>:
                <span>{todo}</span>}
                <button className={style.modifyButton}>🛠</button>
            </form>
        </li>
    );
};

export default TodoItem;