/* eslint-disable react/prop-types */
import React, {useState} from 'react';

export default class TodoForm extends React.Component{
    constructor(){
        super();

        this.state = {
            item: '',
        }
    }

    
    handleChanges = (e) => {
        this.setState({
            item: e.target.value, 
        })
    }

    submitItem = (e) => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.handleAddTodo(this.state.item);
    }

    render(){
        return(
            <form onSubmit={this.submitItem}>
                <input type="text" 
                       name="item" 
                       value={this.state.item}
                       onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
        )
    }
}