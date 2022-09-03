import React from 'react';

const TodoItem = ({todo, isCompleted, userId}) => {
    return (
        <li>{`${todo}, ${isCompleted}, ${userId}`}</li>
    );
};

export default TodoItem;