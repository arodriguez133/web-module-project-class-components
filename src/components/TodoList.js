import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


//This is where I have to map the items within the Todo Item. 
export default class TodoList extends React.Component{
    //I don't need contructor or super just the render method
    render(props){
        return (
            {props.todoItems.map(item => {
                <Todo key={item.id} item={item.todo}/>
            })}
        )
    }
}