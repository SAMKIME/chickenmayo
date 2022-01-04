import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/index';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import loadingReducer from "./app/modules/loading";
import Loading from "./app/containers/loading/loading";

const rootReducer = combineReducers({
    loadingReducer: loadingReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Loading/>
        <Root />
    </Provider>, document.getElementById('app')
);