import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item._id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ItemList;