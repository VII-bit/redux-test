import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import RootReducer from "./reducers";
import {Provider} from 'react-redux';
import WebPage from "./components/webPage.js";


const store = createStore (RootReducer);

ReactDOM.render (
    <Provider store = {store}>
        <WebPage/>
    </Provider>,
  document.getElementById('fieldToShow')
);
