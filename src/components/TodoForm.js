/* eslint-disable react/prop-types */
import React from 'react';

const TodoForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddTodo("Salsa");
    };
return(
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <button>Add</button>
        </form>
        
    </div>
)
}

export default TodoForm;