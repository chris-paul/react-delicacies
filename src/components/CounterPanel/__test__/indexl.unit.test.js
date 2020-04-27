/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 20:20:07
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import { CounterPanel } from '..';

const setup = (counterList = []) => {
    const actions = {
        increment: jest.fn(),
        decrement: jest.fn(),
    };
    const component = shallow(<CounterPanel counterList={counterList} {...actions} />);
    return {
        component,
        ...actions,
        counters: component.find('Counter'),
        h1: component.find('h1'),
    };
};

describe(' CounterPanel Component ', () => {
    it('should have h3 and value is Counter List', () => {
        const { h1 } = setup();
        expect(h1.text()).toEqual('Counter List');
    });

    it('should not have Counter when counterList is empty Array ', () => {
        const { counters } = setup();
        expect(counters.length).toEqual(0);
    });

    it('should have Counter when counterList is not null ', () => {
        const { counters } = setup([{ value: 1, caption: 'first' }]);
        expect(counters.length).toEqual(1);
    });

    it('counter Component should have value, caption, increment, decrement, props', () => {
        const counterList = [{ value: 1, caption: '1' }];
        const { counters } = setup(counterList);
        const counterProps = counters.props();
        expect(counterProps.value).toBe(1);
        expect(counterProps.increment).toBeTruthy();
        expect(counterProps.decrement).toBeTruthy();
        expect(counterProps.caption).toBe('1');
    });
});
