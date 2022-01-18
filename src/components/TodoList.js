/* eslint-disable react/prop-types */
import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


//This is where I have to map the items within the Todo Item. 
 const TodoList = (props) => {
return (
    <div>
        {props.todoItems.map(item=>{
            return <Todo key={item.id} item={item.todo}/>
        })}
        <button onClick={props.handleClearPurchased}>Clear Tasks</button>
    </div>
)
} 

export default TodoList;