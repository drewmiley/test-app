import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ItemList from '../components/ItemList';
import { itemsFetchData } from '../ducks/actions';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;

// class App extends Component {
//     componentDidMount() {
//         this.props.fetchData('https://enigmatic-waters-95441.herokuapp.com/api/songs');
//     }
// 
//     render() {
//         return (
//             <div className="App">
//                 <ItemList
//                     items={this.props.items}
//                     hasErrored={this.props.hasErrored}
//                     isLoading={this.props.isLoading}
//                 />
//             </div>
//         );
//     }
// }
// 
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: url => dispatch(itemsFetchData(url))
//     };
// };
// 
// export default connect(state => state, mapDispatchToProps)(App);
