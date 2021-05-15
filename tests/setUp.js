/*
 * @Author: 廉恒凯
 * @Date: 2019-12-29 21:55:18
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-15 12:14:11
 * @Description: file content
 */
// const React = require('react');

// console.log('Current React Version:', React.version);

/* eslint-disable global-require */
if (typeof window !== 'undefined') {
    global.window.resizeTo = (width, height) => {
        global.window.innerWidth = width || global.window.innerWidth;
        global.window.innerHeight = height || global.window.innerHeight;
        global.window.dispatchEvent(new Event('resize'));
    };
    global.window.scrollTo = () => {};
}

// The built-in requestAnimationFrame and cancelAnimationFrame not working with jest.runFakeTimes()
// https://github.com/facebook/jest/issues/5147
global.requestAnimationFrame = cb => setTimeout(cb, 0);
global.cancelAnimationFrame = cb => clearTimeout(cb, 0);

// eslint-disable-next-line import/no-extraneous-dependencies
const Enzyme = require('enzyme');

let Adapter;
if (process.env.REACT === '15') {
    // eslint-disable-next-line import/no-unresolved
    Adapter = require('enzyme-adapter-react-15');
} else {
    // eslint-disable-next-line import/no-extraneous-dependencies
    Adapter = require('enzyme-adapter-react-16');
}

Enzyme.configure({ adapter: new Adapter() });
