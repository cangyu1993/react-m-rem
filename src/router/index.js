import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Loadable from 'react-loadable'

const login = Loadable({
    loader: () => import('../views/login'),
    loading: () => <div style={{textAlign: "center"}}>Loading...</div>
})


class Router extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={login}/>
                </Switch>
            </div>
        )
    }
}

export default Router
