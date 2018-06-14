import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Playlist from './Playlist';
import Songs from './Songs';

const homePath = '/';
const songsPath = '/songs';
const playlistPath = '/playlist';

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
                            <Link to={songsPath}>Songs</Link>
                        </li>
                        <li>
                            <Link to={playlistPath}>Playlist</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path={homePath} render={() => (
                        <div>
                            <h2>Home</h2>
                        </div>
                    )} />
                    <Route path={songsPath} component={Songs} />
                    <Route path={playlistPath} component={Playlist} />
                </div>
            </Router>
        );
    }
}
