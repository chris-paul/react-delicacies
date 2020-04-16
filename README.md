<!--
 * @Description: REACT-DELICACIES
 * @Author: 廉恒凯
 * @Date: 2019-08-24 10:38:04
 * @LastEditTime: 2020-04-16 12:53:58
 * @LastEditors: 廉恒凯
 -->

![npm](https://img.shields.io/npm/v/node.svg?style=flat-square) ![node](https://img.shields.io/badge/node.js-%3E=_10.0-green.svg?style=flat-square) [![Build Status](https://travis-ci.org/chris-paul/react-delicacies.svg?branch=master)](https://travis-ci.org/chris-paul/react-delicacies) [ ![codecov](https://codecov.io/gh/chris-paul/react-delicacies/branch/master/graph/badge.svg)](https://codecov.io/gh/chris-paul/react-delicacies)

## React-Delicacies

-   基于 React, Redux, React-Router, Immutable 的前端框架

## 关于技术栈

-   基于主流的 React,React-Router 进行项目开发,使用 Redux 进行状态管理,使用 Immutable 进行优化

-   基于 redux-thunk 处理 action 异步问题,关于 action 的调用顺序如有需要请使用自研中间件 redux-controlled-promise,使用方式请看官方文档

-   基于 Jest 和 Enzyme 提供完善的单元测试和集成测试

-   支持第三方平台 Mock 数据

-   完善的 axios 请求封装以及规范的错误处理

## 关于前端自动化

-   本项目基于 webpack 实现前端自动化

    -   antd 按需加载, moment, lodash 等常用库的优化

    -   每一个 router 作为一个 chunk 进行懒加载,代码拆分,减少包的体积

    -   生产环境提供 gzip 的代码压缩,不耗费后端服务器的的 CPU 进行压缩

    -   webpack hash 持久化,配合 HTTP 缓存提高访问效率

    -   支持 CSS Module

    -   支持 less 等预编译语言,规范书写 mixins,管控 variables

    -   配合第三方 CDN 提高浏览器资源请求效率

## 关于开发体验

-   eslint 和 prettier 完美结合,支持 react,jsx,es8,jest,react-hooks 等的语法检测,以及完美的代码格式化,编写体验非常棒

-   stylelint 检测 CSS,less 等语法,保证样式书写规范

-   commit 之前,自动对暂存区代码修复以及检测,把守好代码最后一道关口

-   CI CD 持续集成,保证代码质量

## 项目运行

```javascript
// mock环境运行，
npm run startMock
// dev环境运行
npm run start
// 代码打包压缩
npm run build
// 查看包大小分析报告
npm run report
// 查看测试覆盖率
npm run coverage
// 运行测试用例
npm run test
// css代码检测
npm run csslint
// js,jsx代码检测
npm run eslint
```
