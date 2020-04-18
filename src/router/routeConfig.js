/*
 * @Author: lhk
 * @Date: 2019-12-28 10:15:07
 * @LastEditTime: 2020-04-18 12:49:26
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\router\routeConfig.js
 */

import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Work = lazy(() => import(/* webpackChunkName: "work" */ '../containers/Work'));
const List = lazy(() => import(/* webpackChunkName: "list" */ '../containers/List'));
const routes = [
    {
        path: '/work',
        component: Work,
        key: 'work',
    },
    {
        path: '/list',
        component: List,
        key: 'list',
    },
];

const RouteWithSubRoutes = route => (
    <Route
        exact
        path={route.path}
        render={param => <route.component {...param} routes={route.routes} />}
    />
);

const routeConfig = routes.map(route => <RouteWithSubRoutes key={route.key} {...route} />);

export default routeConfig;
