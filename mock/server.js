/*
 * @Author: 廉恒凯
 * @Date: 2020-04-29 22:42:53
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-05-08 23:09:54
 * @Description: file content
 */
const express = require('express');
const Mock = require('mockjs');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/counter/getCounterList', (req, res) => {
    res.json(
        Mock.mock({
            status: 200,
            'data|1-9': [
                {
                    caption: () => Mock.mock('@guid'),
                    'value|1-100': 100,
                },
            ],
        }),
    );
});

app.listen('8090', () => {
    // eslint-disable-next-line no-console
    console.log('mock server start: 8090');
});
