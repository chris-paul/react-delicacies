/*
 * @Author: lhk
 * @Date: 2020-01-05 16:28:05
 * @LastEditTime: 2020-05-01 23:36:01
 * @LastEditors: 廉恒凯
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
if (nodeEnv === 'production') {
    baseUrl = 'http://xxx.com/api';
    basePrefix = 'api';
} else if (nodeEnv === 'development') {
    baseUrl = 'http://0.0.0.0:8090';
    basePrefix = 'api';
}

const base = { baseUrl, basePrefix };

export default base;
