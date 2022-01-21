/* eslint-disable react/prop-types */
import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return(
        <div 
            className={`item${props.item.completed ? ' purchased' : ''}`}
            onClick={() => props.toggleCompleted(props.item.id)}>
            <h3>{props.item.name}</h3>
        </div>
    )
}

export default Todo;