/*
 * @Author: your name
 * @Date: 2019-12-28 10:14:37
 * @LastEditTime : 2019-12-28 10:24:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\router\index.js
 */
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import routes from './routeConfig';

const history = createHashHistory();

class RouterCom extends Component {
    render() {
        const { isLogin } = this.props;
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((route) => {
                        return <Route
                            exact
                            path={route.path}
                            key={route.key}
                            render={props => {
                                return (
                                    <route.component
                                        {...props}
                                        isLogin={isLogin}
                                    />
                                );
                            }}
                        />;
                    })}
                </Switch>
            </Router>
        )
    }
}

export { RouterCom, history };
