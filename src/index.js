import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore(); // You can also pass in an initialState here

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
