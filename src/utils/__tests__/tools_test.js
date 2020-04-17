/*
 * @Author: 廉恒凯
 * @Date: 2020-01-12 06:39:48
 * @LastEditTime: 2020-04-17 21:56:53
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

    describe('isObject', () => {
        it('should return `true` for objects', () => {
            expect(tools.isObject([1, 2, 3])).toBe(false);
            expect(tools.isObject(Object(false))).toBe(false);
            expect(tools.isObject(new Date())).toBe(false);
            expect(tools.isObject(new Error())).toBe(false);
            expect(tools.isObject(() => {})).toBe(false);
            expect(tools.isObject({ a: 1 })).toBe(true);
            expect(tools.isObject(Object(0))).toBe(false);
            expect(tools.isObject(/x/)).toBe(false);
            expect(tools.isObject(Object('a'))).toBe(false);
            expect(tools.isObject(null)).toBe(false);
        });
    });

    describe('isArray', () => {
        test.each([
            [[1, 2, 3], true, '(shoule true when input is Array)'],
            [new Array([1, 2, 3]), true, '(shoule true when input is Array Object)'],
            [null, false, '(shoule false when input is null)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [1, false, '(shoule false when input is String number)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            ['a', false, '(shoule false when input is string)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [true, false, '(shoule false when input is string)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isArray(input)).toBe(expected);
        });
    });

    describe('isBoolean', () => {
        test.each([
            [true, true, '(shoule true when input is boolean)'],
            [null, false, '(shoule false when input is null)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [1, false, '(shoule false when input is String number)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            ['a', false, '(shoule false when input is string)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [() => {}, false, '(shoule false when input is function)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isBoolean(input)).toBe(expected);
        });
    });

    describe('isFunction', () => {
        test.each([
            [() => {}, true, '(shoule true when input is function)'],
            // eslint-disable-next-line func-names
            [function() {}, true, '(shoule true when input is function)'],
            [true, false, '(shoule false when input is boolean)'],
            [null, false, '(shoule false when input is null)'],
            [undefinedVar, false, '(shoule false when input is undefined)'],
            [1, false, '(shoule false when input is String number)'],
            [new Date(), false, '(shoule false when input is Date Object)'],
            ['a', false, '(shoule false when input is string)'],
            [Object('a'), false, '(shoule false when input is String Object)'],
            [[1, 2, 3], false, '(shoule false when input is Array)'],
            [new Error(), false, '(shoule false when input is Error Object)'],
            [{ '0': 1, length: 1 }, false, '(shoule false when input is normal Object)'],
            [/x/, false, '(shoule false when input is RegExp)'],
            [Symbol('a'), false, '(shoule false when input is symbol)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.isFunction(input)).toBe(expected);
        });
    });

    describe('getRawType', () => {
        test.each([
            [() => {}, 'Function', '(shoule Function when input is function)'],
            // // eslint-disable-next-line func-names
            [true, 'Boolean', '(shoule Boolean when input is boolean)'],
            [null, 'Null', '(shoule Null when input is null)'],
            [undefinedVar, 'Undefined', '(shoule Undefined when input is undefined)'],
            [1, 'Number', '(shoule Number when input is String number)'],
            [new Date(), 'Date', '(shoule Date when input is Date Object)'],
            ['a', 'String', '(shoule String when input is string)'],
            [[1, 2, 3], 'Array', '(shoule Array when input is Array)'],
            [new Error(), 'Error', '(shoule Error when input is Error Object)'],
            [{ '0': 1, length: 1 }, 'Object', '(shoule Object when input is normal Object)'],
            [/x/, 'RegExp', '(shoule RegExp when input is RegExp)'],
            [Symbol('a'), 'Symbol', '(shoule Symbol when input is symbol)'],
            [Promise.resolve(1), 'Promise', '(shoule Promise when input is promise)'],
        ])(`when input is %s should return %s (%s)`, (input, expected) => {
            expect(tools.getRawType(input)).toBe(expected);
        });
    });

    describe('isLength', () => {
        it('should return `true` for length', () => {
            const value = [0, 5, Number.MAX_SAFE_INTEGER];
            const res = value.map(item => tools.isLength(item) === true);
            expect(res.length).toBe(3);
        });

        it('should return `false` for length', () => {
            const value = [-1, '1', 1.1, Number.MAX_SAFE_INTEGER + 1];
            const res = value.map(item => tools.isLength(item) === false);
            expect(res.length).toBe(4);
        });
    });

    describe('isArrayLike', () => {
        it('should return `false` for other', () => {
            expect(tools.isArrayLike(() => {})).toBeFalsy();
            expect(tools.isArrayLike(true)).toBeFalsy();
            expect(tools.isArrayLike(null)).toBeFalsy();
            expect(tools.isArrayLike(undefinedVar)).toBeFalsy();
            expect(tools.isArrayLike(1)).toBeFalsy();
            expect(tools.isArrayLike(new Date())).toBeFalsy();
            expect(tools.isArrayLike(new Error())).toBeFalsy();
            expect(tools.isArrayLike(/x/)).toBeFalsy();
            expect(tools.isArrayLike(Symbol('a'))).toBeFalsy();
            expect(tools.isArrayLike({ '0': 1 })).toBeFalsy();
        });

        it('should return `false` for length', () => {
            const argu = (function(...args) {
                return args;
            })(1, 2, 3);
            expect(tools.isArrayLike(argu)).toBeTruthy();
            expect(tools.isArrayLike('a')).toBeTruthy();
            expect(tools.isArrayLike([1, 2, 3])).toBeTruthy();
            expect(tools.isArrayLike({ '0': 1, length: 1 })).toBeTruthy();
        });
    });
});
