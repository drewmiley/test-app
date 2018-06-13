import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ItemList from '../components/ItemList';
import { itemsFetchData } from '../ducks/actions';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Dummy = () => (
  <div>
    <h2>Dummy</h2>
  </div>
);

const homePath = '/';
const dummyPath = '/dummy';
const songsPath = '/songs';

class AppRouter extends Component {
    componentDidMount() {
        this.props.fetchData('https://enigmatic-waters-95441.herokuapp.com/api/songs');
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={homePath}>Home</Link>
                        </li>
                        <li>
                            <Link to={dummyPath}>Dummy</Link>
                        </li>
                        <li>
                            <Link to={songsPath}>Songs</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path={homePath} component={Home} />
                    <Route path={dummyPath} component={Dummy} />
                    <Route path={songsPath} render={() => (
                        <ItemList
                            items={this.props.items}
                            hasErrored={this.props.hasErrored}
                            isLoading={this.props.isLoading}
                        />
                    )} />
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    };
};

export default connect(state => state, mapDispatchToProps)(AppRouter);
