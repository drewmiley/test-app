import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/ItemList';
import { itemsFetchData } from '../ducks/actions';

class Songs extends Component {
    componentDidMount() {
        this.props.fetchData('https://enigmatic-waters-95441.herokuapp.com/api/songs');
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

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
};

export default connect(state => state, mapDispatchToProps)(Songs);
