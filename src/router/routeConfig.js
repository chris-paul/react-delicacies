/*
 * @Author: lhk
 * @Date: 2019-12-28 10:15:07
 * @LastEditTime : 2019-12-28 10:16:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\router\routeConfig.js
 */

import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const List = lazy(() => import(/* webpackChunkName: "list" */ '../pages/List'));
const Work = lazy(() => import(/* webpackChunkName: "work" */ '../pages/Work'));
const routes = [
    {
        path: '/list',
        component: List,
        key: 'list',
    },
    {
        path: '/work',
        component: Work,
        key: 'work',
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
