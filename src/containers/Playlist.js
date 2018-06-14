import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/ItemList';
import { mapDispatchToProps } from '../ducks/actions';

const playlistNumber = 1;

class Playlist extends Component {
    componentDidMount() {
        this.props.fetchData(`/playlist/${ playlistNumber }`);
    }

    render() {
        return (
			<div>
				<div>{playlistNumber}</div>
				<ItemList
					items={this.props.items}
					hasErrored={this.props.hasErrored}
					isLoading={this.props.isLoading}
				/>
			</div>
        );
    }
}

export default connect(state => state, mapDispatchToProps)(Playlist);
