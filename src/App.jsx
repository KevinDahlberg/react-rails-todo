import React, {Component} from 'react';

import Header from './Header.jsx';
import Input from './Input.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    }
  }

  submitInput = (input) => {
    const { todo } = this.state;
    todo.push(input);
    this.setState({ todo: todo });
    console.log(this.state);
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <Input submitInput={this.submitInput} />
      </div>
    );
  }
}
export default App;
