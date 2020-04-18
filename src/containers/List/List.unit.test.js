/*
 * @Author: 廉恒凯
 * @Date: 2020-04-18 15:38:31
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2020-04-18 18:31:22
 * @Description: 单元测试 TDD 测试先行 逐步完善代码
 */
import React from 'react';
import { shallow } from 'enzyme';
import findTestWrapper from '@tests/utils/tools';
import List from '.';

describe(' List Component ', () => {
    it('should have Counter Component', () => {
        const wraper = shallow(<List />);
        const listCounter = findTestWrapper(wraper, 'listCounter');
        expect(listCounter.length).toBe(1);
    });

    it('should have h1 and value is Counter List', () => {
        const wraper = shallow(<List />);
        expect(wraper.contains(<h1>Counter List</h1>)).toEqual(true);
    });
});
