/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 18:46:03
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 22:03:22
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';

describe(' Counter Component ', () => {
    it('should have Button Increment and Decrement', () => {
        const wraper = shallow(<Counter />);
        expect(
            wraper
                .find('Button')
                .at(0)
                .prop('children'),
        ).toEqual('+');
        expect(
            wraper
                .find('Button')
                .at(1)
                .prop('children'),
        ).toEqual('-');
    });

    it('counter value show with props', () => {
        const wraper = shallow(<Counter value={1} />);
        expect(wraper.find('span').text()).toMatch(/^Counter: 1/);
    });
});
