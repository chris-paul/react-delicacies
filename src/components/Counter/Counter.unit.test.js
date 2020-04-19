/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 18:46:03
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 22:36:43
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';

const setup = (value = 0) => {
    const actions = {
        onIncrement: jest.fn(),
        onDecrement: jest.fn(),
    };
    const component = shallow(<Counter value={value} {...actions} />);

    return {
        component,
        actions,
        buttons: component.find('Button'),
        span: component.find('span'),
    };
};

describe(' Counter Component ', () => {
    it('should have Button Increment and Decrement', () => {
        const { buttons } = setup();
        expect(buttons.at(0).prop('children')).toEqual('+');
        expect(buttons.at(1).prop('children')).toEqual('-');
    });

    it('counter value show with props', () => {
        const { span } = setup(1);
        expect(span.text()).toMatch(/^Counter: 1/);
    });
});
