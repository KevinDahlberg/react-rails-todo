import React, {Component} from 'react';

import Header from './Header.jsx';
import Input from './Input.jsx';
import Todo from './Todo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      done: [],
    }
  }

  submitInput = (input) => {
    const { todo } = this.state;
    todo.push(input);
    this.setState({ todo: todo });
  }

  completeItem = (item) => {
    const { done, todo } = this.state;
    done.push(item);
    const removedFromTodo = todo.filter((todoItem) => todoItem !== item);
    this.setState({ todo: removedFromTodo, done: done });
  }

  removeItems = (item) => {
    const { done } = this.state;
    const removedFromDone = done.filter((doneItem) => doneItem !== item);
    this.setState({ done: removedFromDone });
  }

  render() {
    const { todo, done } = this.state;
    return (
      <div className="main-container">
        <Header />
        <Input submitInput={this.submitInput} />
        <div className="card-container">
          <Todo 
            todo={todo} 
            type="Items Todo"
            remove={this.completeItem}
            blankText="Add items to your list"
          />
          <Todo
            todo={done}
            type="Done Items"
            remove={this.removeItems}
            blankText="Delete items from this list"
          />
        </div>
      </div>
    );
  }
}
export default App;
