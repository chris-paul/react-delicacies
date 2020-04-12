/*
 * @Description: wepack公共配置
 * @Author: 廉恒凯
 * @Date: 2019-08-24 16:28:03
 * @LastEditTime: 2020-04-12 21:37:51
 * @LastEditors: 廉恒凯
 */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /(\.jsx|\.js)$/,
                extractComments: true,
                parallel: true,
                cache: true,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendors',
                    priority: 10,
                    enforce: true,
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@api': path.resolve(__dirname, '../src/server'),
            '@tests': path.resolve(__dirname, '../tests'),
        },
        extensions: ['.js', '.jsx', '.css', '.less', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                include: path.resolve(__dirname, '../src'),
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 0,
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../node_modules'),
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                exclude: [path.resolve(__dirname, '../node_modules')],
                include: path.resolve(__dirname, '../src'),
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [
                                path.resolve(__dirname, '../src/styles/variables.less'),
                                path.resolve(__dirname, '../src/styles/mixins.less'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                include: [path.resolve(__dirname, '../node_modules')],
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                exclude: [path.resolve(__dirname, '../node_modules')],
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]_[hash:4].[ext]',
                            outputPath: 'images/',
                            publicPath: '/images',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'iconFont/',
                            publicPath: '/iconFont',
                        },
                    },
                ],
            },
        ],
    },
    plugins: {
        contextReplacement: new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
        antdDayjsWebpack: new AntdDayjsWebpackPlugin(),
        define: new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(nodeEnv),
        }),
        lodashModuleReplacement: new LodashModuleReplacementPlugin(),
        htmlWebpack: new HtmlWebpackPlugin({
            title: 'react-declicacies',
            template: 'public/index.html',
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }),
        hardSourceWebpack: new HardSourceWebpackPlugin({
            cacheDirectory: path.resolve(
                __dirname,
                '../node_modules/.cache/hard-source/[confighash]',
            ),
            environmentHash: {
                root: process.cwd(),
                directories: [],
                files: ['package-lock.json', 'yarn.lock'],
            },
            info: {
                mode: 'none',
                level: 'debug',
            },
            cachePrune: {
                maxAge: 24 * 60 * 60 * 1000,
                sizeThreshold: 50 * 1024 * 1024,
            },
        }),
        hashModuleIds: new webpack.HashedModuleIdsPlugin(),
        nameModule: new webpack.NamedModulesPlugin(),
        styleLint: new StyleLintPlugin({
            files: ['./src/**/*.less'],
            fix: false,
            cache: true,
            emitErrors: true,
        }),
        cleanWebpack: new CleanWebpackPlugin(),
        miniCssExtract: new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
            ignoreOrder: false,
        }),
        compressionPlugin: new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.jsx$|\.less$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        optimizeCssAssets: new OptimizeCssAssetsPlugin(),
        bundleAnalyzer: new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false },
        }),
        progressBarPlugin: new ProgressBarPlugin(),
        hotModuleReplacement: new webpack.HotModuleReplacementPlugin(),
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        contentBase: './',
        compress: true,
        host: '0.0.0.0',
        port: 3333,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8888/',
                changeOrigin: true,
            },
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        redux: 'Redux',
        // eslint-disable-next-line quote-props
        immutable: 'Immutable',
    },
};
