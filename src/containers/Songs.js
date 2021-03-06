import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/ItemList';
import { mapDispatchToProps } from '../ducks/actions';

class Songs extends Component {
    componentDidMount() {
        this.props.fetchData('/songs');
    }

    render() {
        return (
			<ItemList
				items={this.props.items}
				hasErrored={this.props.hasErrored}
				isLoading={this.props.isLoading}
			/>
        );
    }
}

export default connect(state => state, mapDispatchToProps)(Songs);
