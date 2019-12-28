/*
 * @Author: your name
 * @Date: 2019-12-28 10:15:07
 * @LastEditTime : 2019-12-28 10:16:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\router\routeConfig.js
 */
import Home from '../pages/Home';
import Login from '../pages/Login';

const routes = [
    { path: '/index', name: 'index', component: Home, auth: true, key: 1 },
    { path: '/login', name: 'login', component: Login, key: 2 },
    { path: '/', name: '/', component: Home, auth: true, key: 3 },
];

export default routes;
