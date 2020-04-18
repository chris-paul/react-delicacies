/*
 * @Description: webpack开发模式
 * @Author: 廉恒凯
 * @Date: 2019-08-24 16:28:14
 * @LastEditTime: 2020-04-18 21:31:12
 * @LastEditors: 廉恒凯
 */
const path = require('path');
const webpackBase = require('./webpack.base');

module.exports = {
    optimization: webpackBase.optimization,
    // 配置源码显示方式
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
        app: ['react-hot-loader/patch', path.resolve(__dirname, '../src/index.js')],
    },
    resolve: webpackBase.resolve,
    module: webpackBase.module,
    plugins: [
        webpackBase.plugins.htmlWebpack,
        webpackBase.plugins.nameModule,
        webpackBase.plugins.define,
        webpackBase.plugins.lodashModuleReplacement,
        webpackBase.plugins.contextReplacement,
        webpackBase.plugins.antdDayjsWebpack,
        // webpackBase.plugins.hardSourceWebpack,
        webpackBase.plugins.hotModuleReplacement,
    ],
    devServer: webpackBase.devServer,
    externals: webpackBase.externals,
};
