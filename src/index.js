import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react'
import configStore from './store'
import {persistor} from './store'

ReactDOM.render(
    <BrowserRouter basename='/pwbweb/'>
        <Provider store={configStore}>
            <PersistGate loading={null} persistor={persistor}>
                <Router/>
            </PersistGate>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
