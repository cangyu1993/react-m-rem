import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import login from '../views/login'


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
