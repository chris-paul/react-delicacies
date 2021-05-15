/*
 * @Author:廉恒凯
 * @Date: 2020-01-05 19:41:10
 * @LastEditTime: 2021-05-15 14:35:57
 * @LastEditors: 廉恒凯
 * @Description: In User Settings Edit
 * @FilePath: /react-delicacies/src/pages/Work/__tests__/spec.js
 */
import React from 'react';
import { shallow } from 'enzyme';
import About from '../index';

const findWrapper = (wrapper, tag) => {
    return wrapper.find(`[data-test="${tag}"]`);
};

describe('About', () => {
    it('should show despriction success', () => {
        const wraper = shallow(<About />);
        const ListElem = findWrapper(wraper, 'about');
        expect(ListElem.length).toBe(1);
        expect(wraper).toMatchSnapshot();
    });
});
