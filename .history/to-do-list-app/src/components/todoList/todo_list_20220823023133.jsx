import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.length){
          navigate("/")
        }
      }, []); 
    return(
      <>
        <h1> TodoList Component</h1>
        <img src="../main_img.png"></img>
      </>
    )
}

export default TodoList;