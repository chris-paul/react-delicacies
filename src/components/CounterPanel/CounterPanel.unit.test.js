/*
 * @Author: 廉恒凯
 * @Date: 2020-04-19 13:23:10
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-19 13:47:34
 * @Description: file content
 */
import React from 'react';
import { shallow } from 'enzyme';
import findTestWrapper from '@tests/utils/tools';
import List from '.';

describe(' CounterPanel Component ', () => {
    it('should have h3 and value is Counter List', () => {
        const wraper = shallow(<List />);
        expect(wraper.contains(<h3>Counter List</h3>)).toEqual(true);
    });

    it('default counterList is [] for List, and render none', () => {
        const wraper = shallow(<List />);
        const counterItem = findTestWrapper(wraper, 'counterItem');
        expect(wraper.state('counterList')).toEqual([]);
        expect(counterItem.length).toEqual(0);
    });

    it('should have Counter Component when counterList not none', () => {
        const counterList = [
            { value: 1, id: '1' },
            { value: 2, id: '2' },
            { value: 3, id: '3' },
        ];
        const wraper = shallow(<List />);
        wraper.setState({
            counterList,
        });
        const counterItem = findTestWrapper(wraper, 'counterItem');
        expect(counterItem.length).toBe(3);
    });

    it('counter Component should have value props', () => {
        const counterList = [{ value: 1, id: '1' }];
        const wraper = shallow(<List />);
        wraper.setState({
            counterList,
        });
        const counterItem = findTestWrapper(wraper, 'counterItem');
        expect(counterItem.prop('value')).toBeTruthy();
    });
});
