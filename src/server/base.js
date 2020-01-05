/*
 * @Author: lhk
 * @Date: 2020-01-05 16:28:05
 * @LastEditTime : 2020-01-05 19:30:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/src/server/base.js
 */
/**
 * 接口域名的管理
 */
const nodeEnv = process.env.NODE_ENV || 'development';
let baseUrl = '';
/* 请求前缀 */
let basePrefix = '';
if (nodeEnv === 'development') {
    baseUrl = 'https://www.easy-mock.com/mock/5e11b3a8bfcbe30e96cc0ace/example';
    basePrefix = 'example';
} else if (nodeEnv === 'production') {
    baseUrl = 'http://xxx.com/api';
    basePrefix = 'api';
} else if (nodeEnv === 'mockDevelopment') {
    baseUrl = 'http://xxx.com/api';
    basePrefix = 'api';
}

const base = { baseUrl, basePrefix };

export default base;
