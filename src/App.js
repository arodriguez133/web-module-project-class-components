import React from 'react';
import TodoList from './components/TodoList';
import './style.css';

 const todoItems = [
{
  name: "Get Groceries",
  id: 61241,
  completed: false
},
{
  name: "Cook Dinner",
  id: 61242, 
  completed: false,
}
];
class App extends React.Component {
constructor(){
  super();

  this.state = {
    todo: todoItems,
  };
};


addItem = (itemName) => {
const newItem = {
  name: itemName,
  id: Date.now(),
  completed: false
};

this.setState({
    ...this.state,
    todo: [...this.state.todo, newItem]
  });
};


toggleCompleted = (itemId) => { 
  const newTodo = this.state.todo.map(item => {
    if(itemId === item.id){
      return {
        ...item,
        completed: !item.completed,
      }
    }else return item;
})
  this.setState({
    ...this.state,
    todo: newTodo,
  })
}

clearCompleted = () => {
  this.setState({
    ...this.state,
    todo: this.state.todo.filter(item => !item.completed)
  })
}
  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="App">
        <div className="header">
        <TodoList 
        todoItems={this.state.todo}  
        toggleCompleted={this.toggleCompleted}
        addItem={this.addItem}
        clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}


export default App;
