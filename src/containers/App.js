import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Songs from './Songs';

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

export default class App extends Component {
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
                    <Route path={songsPath} component={Songs} />
                </div>
            </Router>
        );
    }
}
