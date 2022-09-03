import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    return(
        <h1> TodoList Component</h1>
    )
}

export default TodoList;