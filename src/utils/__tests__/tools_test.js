/*
 * @Author: 廉恒凯
 * @Date: 2020-01-12 06:39:48
 * @LastEditTime: 2020-04-16 23:16:35
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/src/utils/tests/tools.test.js
 */
// import { symbol, slice } from '@tests/utils/tools';
import * as tools from '../tools';

let undefinedVar;
describe('tools utils', () => {
    describe('isString', () => {
        test.each([
            ['a', true, '(shoule true when input is string)'],
            [Object('a'), true, '(shoule true when input is String Object)'],
            [1, false, '(shoule true when input is String number)'],
            [true, false, '(shoule false when input is string)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [null, false, '(shoule false when input is null)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isString(input)).toBe(expected);
        });
    });

    describe('isDate', () => {
        test.each([
            [new Date(), true, '(shoule true when input is Date Object)'],
            ['a', false, '(shoule false when input is string)'],
            [1, false, '(shoule false when input is String number)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [true, false, '(shoule false when input is string)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [null, false, '(shoule false when input is null)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isDate(input)).toBe(expected);
        });
    });

    describe('isUndefined', () => {
        test.each([
            [undefinedVar, true, '(shoule true when input is undefined)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            [1, false, '(shoule false when input is String number)'],
            ['a', false, '(shoule false when input is string)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [true, false, '(shoule false when input is string)'],
            [null, false, '(shoule false when input is null)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isUndefined(input)).toBe(expected);
        });
    });

    describe('isNull', () => {
        test.each([
            [null, true, '(shoule true when input is null)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [1, false, '(shoule false when input is String number)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            ['a', false, '(shoule false when input is string)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [true, false, '(shoule false when input is string)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isNull(input)).toBe(expected);
        });
    });
});
