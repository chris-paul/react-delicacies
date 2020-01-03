/*
 * @Author: your name
 * @Date: 2019-12-28 09:55:20
 * @LastEditTime : 2020-01-03 14:35:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\babel.config.js
 */
const { NODE_ENV = 'development' } = process.env;
const presets = [
    [
        '@babel/env',
        {
            targets: {
                edge: '17',
                node: 'current',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
            },
            useBuiltIns: 'usage',
            corejs: 2,
        },
    ],
    [
        '@babel/preset-react',
    ],
];

const plugins = [
    ["lodash"],
    [
        '@babel/plugin-proposal-decorators',
        {
            legacy: true,
        },
    ],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-syntax-dynamic-import']
    ,
];

if (NODE_ENV !== 'test') {
    plugins.push(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]);
} else if(NODE_ENV !== 'production') {
    plugins.push(['react-hot-loader/babel']);
}

module.exports = {
    presets,
    plugins,
};
