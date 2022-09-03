import React, {useState} from 'react';
import style from '../todo_item/todo_item.module.css';

const TodoItem = ({id, todo, isCompleted, updateTodoItem}) => {
    console.log(id, todo)
    const [completed, setCompleted] = useState(isCompleted);
    const [modifyMode, setModifyMode] = useState(false);
    const handleCheck = (event) => {
        if(event.target.checked){
            setCompleted(true)
            updateTodoItem(id,todo, completed)
        } else {
            setCompleted(false)
            updateTodoItem(id,todo, completed)
        }
    };
    const onModifyMode = () => {
        setModifyMode(true)
    }
    return (
        <li className={style.listItem} key={id}>
            <form className={style.itemForm}>
                <input 
                type="checkbox" 
                className={style.checkbox} 
                value={id}
                onChange={handleCheck}>
                </input>
                {completed?
                <del>{todo}</del>:
                <span>{todo}</span>}
                {!modifyMode?
                <button className={style.modifyButton} onClick={onModifyMode}>🛠</button>:
                <div className={style.modifyButtons}>
                    <button className={style.deleteButton} onClick={handleDelete}>🗑</button>
                    <button className={style.submitButton} onClick={handleSubmit}>✔</button>
                </div>}
            </form>
        </li>
    );
};

export default TodoItem;