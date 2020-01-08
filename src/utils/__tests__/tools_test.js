/*
 * @Author: lhk
 * @Date: 2020-01-08 10:35:33
 * @LastEditTime : 2020-01-08 11:16:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-delicacies\src\utils\__test__\tools_test.js
 */
import * as tools from '../tools';

describe('isString', () => {
    test('should return `true` for strings', () => {
        expect(tools.isString('a')).toBe(true);
        expect(tools.isString(Object('a'))).toBe(true);
    });
});
