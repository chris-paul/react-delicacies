/*
 * @Author: your name
 * @Date: 2020-01-12 06:39:48
 * @LastEditTime : 2020-01-14 11:57:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/src/utils/tests/tools.test.js
 */
import { symbol } from '@tests/utils/tools';
import * as tools from '../tools';

describe('isString', () => {
    test('should return `true` for strings', () => {
        expect(tools.isString('a')).toBe(true);
        expect(tools.isString(Object('a'))).toBe(true);
    });

    test('should return `false` for non-strings', () => {
        let undefinedVar;
        expect(tools.isString(1)).toBe(false);
        expect(tools.isString(true)).toBe(false);
        expect(tools.isString(undefinedVar)).toBe(false);
        expect(tools.isString(null)).toBe(false);
        expect(tools.isString([1, 2, 3])).toBe(false);
        expect(tools.isString(new Date())).toBe(false);
        expect(tools.isString(new Error())).toBe(false);
        expect(tools.isString({ '0': 1, length: 1 })).toBe(false);
        expect(tools.isString(Array.prototype.slice)).toBe(false);
        expect(tools.isString(/x/)).toBe(false);
        expect(tools.isString(symbol)).toBe(false);
    });
});
