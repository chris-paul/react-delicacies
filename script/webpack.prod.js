/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/*
 * @Description: webpack生产环境
 * @Author: 廉恒凯
 * @Date: 2019-08-24 16:28:45
 * @LastEditTime: 2020-04-12 18:03:43
 * @LastEditors: 廉恒凯
 */
const path = require('path');
const webpackBase = require('./webpack.base');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasureWebpackPlugin();

const config = {
    optimization: webpackBase.optimization,
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, '../src/index.js')],
    },
    output: {
        filename: 'js/[name].[contenthash].js',
        hashDigestLength: 7,
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    resolve: webpackBase.resolve,
    module: webpackBase.module,
    plugins: [
        webpackBase.plugins.cleanWebpack,
        webpackBase.plugins.htmlWebpack,
        webpackBase.plugins.define,
        webpackBase.plugins.lodashModuleReplacement,
        webpackBase.plugins.contextReplacement,
        webpackBase.plugins.antdDayjsWebpack,
        webpackBase.plugins.miniCssExtract,
        webpackBase.plugins.optimizeCssAssets,
        webpackBase.plugins.compressionPlugin,
        webpackBase.plugins.progressBarPlugin,
        webpackBase.plugins.hashModuleIds,
        webpackBase.plugins.bundleAnalyzer,
    ],
    externals: webpackBase.externals,
};

module.exports = smp.wrap(config);
