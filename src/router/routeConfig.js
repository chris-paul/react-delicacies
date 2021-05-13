/* eslint-disable react/react-in-jsx-scope */
/*
 * @Author: lhk
 * @Date: 2019-12-28 10:15:07
 * @LastEditTime: 2020-04-18 12:49:26
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\router\routeConfig.js
 */
import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const Work = lazy(() => import(/* webpackChunkName: "work" */ '../containers/Work'));
const List = lazy(() => import(/* webpackChunkName: "list" */ '../containers/List'));

export default [
    {
        path: '/work',
        component: Work,
        exact: true,
    },
    {
        path: '/list',
        component: List,
        exact: true,
    },
    {
        path: '/',
        component: List,
        // eslint-disable-next-line react/display-name
        render: () => <Redirect to="/list" />,
    },
];
