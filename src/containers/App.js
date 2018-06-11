import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ItemList from '../components/ItemList';
import { itemsFetchData } from '../ducks/actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchData('https://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        return (
            <div className="App">
                <ItemList
                    items={this.props.items}
                    hasErrored={this.props.hasErrored}
                    isLoading={this.props.isLoading}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
};

export default connect(state => state, mapDispatchToProps)(App);
