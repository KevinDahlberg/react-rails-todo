import React, { Component } from 'react';
import {
    Button,
    TextField,
} from 'react-md';
import PropTypes from 'prop-types';

export default class Input extends Component {
    static propTypes = {
        submitInput: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    onInputChange = (e) => {
        this.setState({ input: e });
    }

    onClick = () => {
        const { submitInput } = this.props;
        const { input } = this.state;
        submitInput(input);
        this.setState({ input: '' });
    }
    
    render() {
        const { input } = this.state;
        return(
            <div className="input-container">
                <TextField
                    id="todo-input"
                    label="Input Todo"
                    className="md-cell md-cell--bottom"
                    value={input}
                    onChange={this.onInputChange}
                />
                <Button primary raised onClick={this.onClick}>Submit</Button>
            </div>
        )
    }
}