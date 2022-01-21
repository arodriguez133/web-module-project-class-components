/* eslint-disable react/prop-types */
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


//This is where I have to map the items within the Todo Item. 
 const TodoList = (props) => {

return (
    <div>
        <TodoForm  addItem={props.addItem}/>
        {props.todoItems.map((item) => (
             <Todo 
                key={item.id} 
                item={item} 
                toggleCompleted={props.toggleCompleted}/>
        ))}
        <button onClick={props.clearCompleted} className="clear-btn">Clear Tasks</button>
    </div>
)
} 

export default TodoList;