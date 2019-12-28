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
    [
        '@babel/plugin-proposal-decorators',
        {
            legacy: true,
        },
    ],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['react-hot-loader/babel'],
];

if (NODE_ENV !== 'test') {
    plugins.push(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]);
}

module.exports = {
    presets,
    plugins,
};
