/* eslint-disable react/prop-types */
import React from 'react';
import './Todo.css';

const Todo = (props) => {
    console.log(props);
    return(
        <div className='item'>
            <h3>{props.item}</h3>
        </div>
    )
}

export default Todo;