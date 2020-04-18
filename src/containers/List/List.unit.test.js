/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:38:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 22:02:52
 * @Description: 单元测试 TDD 测试先行 逐步完善代码
 */
import React from 'react';
import { shallow } from 'enzyme';
import findTestWrapper from '@tests/utils/tools';
import List from '.';

describe(' List Component ', () => {
    it('should have h1 and value is Counter List', () => {
        const wraper = shallow(<List />);
        expect(wraper.contains(<h3>Counter List</h3>)).toEqual(true);
    });

    it('default counterList is [] for List, and render none', () => {
        const wraper = shallow(<List />);
        const listCounter = findTestWrapper(wraper, 'listCounter');
        expect(wraper.state('counterList')).toEqual([]);
        expect(listCounter.length).toEqual(0);
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
        const listCounter = findTestWrapper(wraper, 'listCounter');
        expect(listCounter.length).toBe(3);
    });

    it('counter Component should have value props', () => {
        const counterList = [{ value: 1, id: '1' }];
        const wraper = shallow(<List />);
        wraper.setState({
            counterList,
        });
        const listCounter = findTestWrapper(wraper, 'listCounter');
        expect(listCounter.prop('value')).toBeTruthy();
    });
});
