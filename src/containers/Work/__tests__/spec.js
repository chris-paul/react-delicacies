/*
 * @Author: your name
 * @Date: 2020-01-05 19:41:10
 * @LastEditTime: 2020-01-05 19:48:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/src/pages/Work/__tests__/spec.js
 */
import React from 'react';
import { shallow } from 'enzyme';
import Work from '../index';

const findWrapper = (wrapper, tag) => {
    return wrapper.find(`[data-test="${tag}"]`);
};

describe('Work', () => {
    it('should have select', () => {
        const wraper = shallow(<Work />);
        const selectElem = findWrapper(wraper, 'work');
        expect(selectElem.length).toBe(1);
    });
});
