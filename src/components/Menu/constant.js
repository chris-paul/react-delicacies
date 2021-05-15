/*
 * @Author: 廉恒凯
 * @Date: 2021-05-14 21:14:52
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-15 10:05:50
 * @Description: file content
 */
import React from 'react';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// 菜单数据
const memuData = [
    {
        key: 'list',
        link: '/list',
        name: '计时器',
        menuIcon: <HomeOutlined />,
    },
    {
        key: 'about',
        link: '/about',
        name: '关于',
        menuIcon: <ShoppingCartOutlined />,
    },
];

export default memuData;
