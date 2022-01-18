import React from 'react';
import TodoList from './components/TodoList';

 const todoItems = [{
  todo: "Get Groceries",
  id: 61241,
  completed: false
},
{
  todo: "Cook Dinner",
  id: 61242, 
  completed: false,
}]
class App extends React.Component {
constructor(){
  super();

  this.state = {
    todo: todoItems,
  }
}

 

handleClearPurchased = () => {

const newTodo = this.state.todo.filter((item) => {
  return item.completed === !item.purchased;
})

  this.setState({
    ...this.state,
    todo: newTodo,
  })
}

handleAddTodo = (item) => {
const newItem = {
  todo: item,
  id: 61243,
  completed: false,
}


  this.setState({
    ...this.state,
    todo: [...this.state.todo, newItem]
  })
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div>
        <TodoList todoItems={this.state.todo} handleClearPurchased={this.handleClearPurchased} handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
