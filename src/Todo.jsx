import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    const onClick = () => {
        const { remove, item } = props;
        remove(item);
    }
    return (
        <li onClick={onClick}>{props.item}</li>
    )
}

export default class Todo extends Component {
    static propTypes = {
        blankText: PropTypes.string,
        todo: PropTypes.array,
        type: PropTypes.string,
        remove: PropTypes.func,
    }

    onClick = (item) => {
        const { remove } = this.props;
        remove(item);
    }

    render() {
        const { blankText, todo, type } = this.props;
        return (
            <Card className="card">
                <CardTitle title={type} />
                <CardText>
                    {todo.length === 0 ? 
                    <p>{blankText}</p> :
                    <ul>
                        {todo.map((item,idx) => (
                            <ListItem remove={this.onClick} item={item} key={idx} />
                        ))}
                    </ul>}
                </CardText>
            </Card>
        )
    }
}