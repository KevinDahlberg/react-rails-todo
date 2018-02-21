import React, { Component } from 'react';
import { Card, CardTitle, CardText, List, ListItem } from 'react-md';
import PropTypes from 'prop-types';

const ItemForList = (props) => {
    const onClick = () => {
        const { remove, item } = props;
        remove(item);
    }
    return (
        <ListItem onClick={onClick} primaryText={props.item} />
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
                    <List>
                        {todo.map((item,idx) => (
                            <ItemForList remove={this.onClick} item={item} key={idx} />
                        ))}
                    </List>}
                </CardText>
            </Card>
        )
    }
}