/*
 * @Author: your name
 * @Date: 2020-01-12 06:39:11
 * @LastEditTime : 2020-01-12 07:13:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/tests/utils/tools.js
 */
// const toArgs = (array) => {
//     return (function() { return arguments; }.apply(undefined, array));
// };

const root = (typeof global === 'object' && global) || this;

const { Symbol } = root;
const arrayProto = Array.prototype;

const symbol = Symbol ? Symbol('a') : undefined;
const { slice } = arrayProto;
const realm = {};

export { symbol, slice, realm };
