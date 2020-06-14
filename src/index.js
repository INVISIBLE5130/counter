import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux"
import counterReducer from './store/reducers/counterReducer'
import {Provider} from "react-redux";

const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
