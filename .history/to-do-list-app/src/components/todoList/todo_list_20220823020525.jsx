import React from 'react';
import { useNavigate } from 'react-router-dom'l

const TodoList = (props) => {
    const navigate = useNavigate();
    if (localStorage.length === 0){
        console.log('done');
        navigate("../todo", { replace: true });
    }
    return(
        <h1> TodoList Component</h1>
    )
}

export default TodoList;